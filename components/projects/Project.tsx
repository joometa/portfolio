import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export const Project = () => {
  // const { recordMap } = props;
  // console.log(props);

  return (
    <>
      <div>
        Hello
        {/* {recordMap && (
          <NotionRenderer
            recordMap={recordMap}
            fullPage={false}
            darkMode={false}
          />
        )} */}
      </div>
    </>
  );
};
