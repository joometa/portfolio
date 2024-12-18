import React from "react";
import { Card, Item } from "@components/skill";
import { useTheme } from "next-themes";

export default function Skill() {
  const { theme } = useTheme();

  return (
    <section className="text-gray-600 body-font overflow-hidden h-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <Card title="FrontEnd">
            <Item img="/images/next-logo.png">Next.js</Item>
            <Item img="/images/react-logo.png">React</Item>
            <Item img="/images/ts-logo.png">TypeScript</Item>
            <Item img="/images/js-logo.png">JavaScript</Item>
            <Item img="/images/react-query-logo.png">react query</Item>
            <Item img="/images/redux-logo.png">redux</Item>
            <Item img="/images/styled-components-logo.png">
              styled components
            </Item>
            <Item img="/images/tailwind-css-logo.png">Tailwind CSS</Item>
            <Item img="/images/emotion.png">Emotion</Item>
            <Item img="/images/scss.webp">SCSS</Item>
            <Item img="/images/vanilla.png">Vanilla Extract</Item>
            <Item img="/images/yarn.webp">Yarn Berry</Item>
          </Card>
          <Card title="BackEnd">
            <Item
              img={
                theme === "dark"
                  ? "/images/node-logo-dark.png"
                  : "/images/node-logo.png"
              }
            >
              Node.js
            </Item>
          </Card>
          <Card title="Tools">
            <Item img="/images/git-logo.png">Git</Item>
            <Item img="/images/vs-code-logo.png">VS Code</Item>
          </Card>
        </div>
      </div>
    </section>
  );
}
