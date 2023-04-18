import React from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

export function Badge({ children }: Props) {
  return <Wrap className="badge">{children}</Wrap>;
}

const Wrap = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #000000;
  width: fit-content;
  overflow: hidden;
  border-radius: 4px;
  padding-right: 6px;
  padding-left: 6px;
  padding-top: 0;
  font-weight: 550;
  margin: 0 5px;
`;
