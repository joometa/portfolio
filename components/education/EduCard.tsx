import styled from "@emotion/styled";
import React from "react";

interface Props {
  title: React.ReactNode;
  period: string;
  children: React.ReactNode;
}

export function EduCard({ title, period, children }: Props) {
  return (
    <Container className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col ">
        <span className="font-semibold title-font text-gray-700 break-word">
          {title}
        </span>
        <span className="mt-1 text-gray-500 text-sm">{period}</span>
      </div>
      <div className="md:flex-grow md:ms-10">{children}</div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
`;
