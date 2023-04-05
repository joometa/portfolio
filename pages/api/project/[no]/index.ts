import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

interface Prop {
  no: number;
}

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

const getProject = async ({ no }: Prop) => {
  try {
    const response = await notion.databases
      .query({
        database_id: databaseId,
        filter: {
          property: "No.",
          number: { equals: no },
        },
      })
      .then((res) => res.results[0]);

    const p = (response as any).properties;
    const c = (response as any).cover;

    const result = {
      no: p["No."].number ?? null,
      title: p.Title.title[0].plain_text ?? null,
      tech: [
        p.Tech.multi_select.length !== 0 &&
          p.Tech.multi_select.map((data: any) => {
            return { name: data.name ?? null, color: data.color ?? null };
          }),
      ],
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
      cover_img: c.external.url ?? null,
    };

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
  const { no } = req.query;

  if (no == null) {
    return res.status(400).json({ message: "no is required" });
  }

  try {
    const result = await getProject({ no: Number(no) });
    res.status(200).json({ message: "Success", result });
  } catch (e) {
    res.status(500).json({ message: "Failed" });
  }
}
