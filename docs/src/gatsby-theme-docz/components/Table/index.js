// Ref: https://github.com/doczjs/docz/blob/v1.2.0/core/docz-theme-default/src/components/ui/Table.tsx
import * as React from "react";
import styled from "@emotion/styled";

import { mq } from "../../styles/responsive";

const Wrapper = styled.div`
  overflow-x: auto;
  padding: 2px;
  margin-bottom: 30px;

  ${mq({
    marginBottom: [20, 40],
    maxWidth: ["calc(100vw - 40px)", "calc(100vw - 80px)", "100%"],
  })};
`;

const TableStyled = styled.table`
  padding: 0;
  table-layout: auto;
  box-shadow: 0 0 0 1px #2d3747;
  background-color: transparent;
  border-spacing: 0;
  border-collapse: collapse;
  border-style: hidden;
  border-radius: 2px;
  font-size: 14px;
  color: #f5f6f7;

  ${mq({
    overflowX: ["initial", "initial", "initial", "hidden"],
    display: ["table", "table", "table", "table"],
  })}

  & thead {
    color: #7d899c;
    background: #2d3747;
  }

  & thead th {
    font-weight: 400;
    padding: 20px 20px;

    &:nth-of-type(1) {
      ${mq({
        width: ["20%", "20%", "20%", "auto"],
      })};
    }

    &:nth-of-type(2) {
      ${mq({
        width: ["10%", "10%", "10%", "auto"],
      })};
    }

    &:nth-of-type(3) {
      ${mq({
        width: ["10%", "10%", "10%", "auto"],
      })};
    }

    &:nth-of-type(4) {
      ${mq({
        width: ["10%", "10%", "10%", "auto"],
      })};
    }

    &:nth-of-type(5) {
      ${mq({
        width: ["20%", "20%", "20%", "auto"],
      })};
    }
  }

  & tbody td {
    padding: 12px 20px;
    line-height: 2;
    font-weight: 200;
  }

  & tbody > tr {
    display: table-row;
    border-top: 1px solid #2d3747;
  }

  overflow-y: hidden;
  width: 100%;
  font-family: "Inconsolata", monospace;
  font-size: 16px;
  overflow-x: initial;
  display: block;
`;

export const Table = props => (
  <Wrapper>
    <TableStyled {...props} />
  </Wrapper>
);
