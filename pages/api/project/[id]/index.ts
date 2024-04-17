import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ExtendedRecordMap } from "notion-types";

interface Prop {
  id: string;
}

const getProject = async ({ id }: Prop) => {
  const auth = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;
  const activeUser = process.env.NOTION_ACTIVE_USER;
  const authToken = process.env.NOTION_AUTH_TOKEN;

  if (auth == null) throw new Error("NOTION API KEY is null, Check it plz");
  if (activeUser == null) throw new Error("ACTIVE_USER is null, Check it plz");
  if (authToken == null) throw new Error("AUTH_TOKEN is null, Check it plz");
  if (databaseId == null) throw new Error("DATABASE_ID is null, Check it plz");

  const notion = new Client({ auth });

  const notionClient = new NotionAPI({
    activeUser,
    authToken,
  });

  try {
    // const page = (await notion.pages.retrieve({
    //   page_id: id,
    // })) as PageObjectResponse;

    const notionPage = await notionClient.getPage(id);
    console.log({ notionPage });

    return notionPage;
  } catch (e) {
    console.error("Notion Page 컨텐츠 불러오기 에러\n", e);
  }
};

type Data = {
  message: string;
  result: ExtendedRecordMap | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (id == null) {
    return res.status(400).json({ message: "no is required", result: null });
  }

  try {
    const result = (await getProject({ id: String(id) })) ?? null;
    res.status(200).json({ message: "Success", result });
  } catch (e) {
    res.status(500).json({ message: `Failed => ${e}`, result: null });
  }
}
