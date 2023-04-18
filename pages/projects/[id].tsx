import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useGetProjectQuery } from "@core/queries/project";
import { ProjectDetailParams } from "@core/interface/project";
import { NotionRenderer } from "react-notion-x";
import { useTheme } from "next-themes";
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";
import { projectApis } from "@core/apis/project";
import type { ExtendedRecordMap } from "notion-types";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

interface Props {
  data: ExtendedRecordMap;
}

export default function Detail({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { theme } = useTheme();
  console.log("DATA!!", theme);

  return (
    <Container theme={theme} className="project-detail">
      {data && (
        <NotionRenderer
          recordMap={data}
          fullPage={false}
          darkMode={theme === "dark"}
        />
      )}
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await projectApis.getProjects().then((res) => res.result);
    const paths = res
      ? res.map((d) => {
          return { params: { id: d.id } };
        })
      : [];
    console.log("패쓰패쓰", paths);
    return {
      paths,
      fallback: true,
    };
  } catch (e) {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id ?? undefined;

  const m = 60;
  const h = m * 60;
  const d = h * 24;

  console.log("아이디??\n\n\n", id);
  if (!id) throw new Error("Id is required!");

  try {
    const params = { id: id ? String(id) : id };
    const res = await projectApis.getProject(params);
    const recordMap = res.result!;

    return { props: { data: recordMap }, revalidate: d };
  } catch (e) {
    console.error("STATIC PROPS ERROR다!");
    return {
      notFound: true,
    };
  }
};

const Container = styled.div<{ theme?: string }>`
  background: ${(props) =>
    props.theme === "dark"
      ? "rgba(71, 85, 105, 0.2)"
      : "rgba(249, 250, 251, 1)"};
  border: ${(props) =>
    props.theme === "dark"
      ? "2px solid rgba(229, 231, 235, 0.5)"
      : "1.5px solid rgba(229, 231, 235, 0.6)"};
  max-width: 1000px;
  width: 100%;
  margin: auto;
  min-height: 100vh;
  height: 100%;
  border-radius: 30px;
  margin-top: 50px;
  margin-bottom: 70px;
  padding-top: 50px;
  padding-bottom: 90px;
`;
