import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

const getProjects = async () => {
  try {
    const result: any[] = [];
    await notion.databases
      .query({
        database_id: databaseId,
        sorts: [
          {
            property: "No.",
            direction: "ascending",
          },
        ],
      })
      .then((res) =>
        res.results.map((data: any) => {
          const p = data.properties;

          const tech =
            p.Tech.multi_select.length !== 0 &&
            p.Tech.multi_select.map((data: any) => {
              return { name: data.name ?? null, color: data.color ?? null };
            });

          const item = {
            id: data.id ?? null,
            no: p["No."].number ?? null,
            title: p.Title.title[0].plain_text ?? null,
            tech,
            team: {
              name: p.Team.select.name ?? null,
              color: p.Team.select.color ?? null,
            },
            work_period: {
              start: p.WorkPeriod.date.start ?? null,
              end: p.WorkPeriod.date.end ?? null,
            },
            desc: p.Description.rich_text[0].plain_text ?? null,
            github: p.Github.url ?? null,
            cover_img: data.cover.external?.url ?? null,
            url: p.Url.url ?? null,
          };
          result.push(item);
        })
      );

    return result;
  } catch (e) {
    console.error(e);
  }
};

type Data = {
  message: string;
  result?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const result = await getProjects();
    res.status(200).json({ message: "Success", result });
  } catch (e) {
    res.status(500).json({ message: "Failed" });
  }
}
