import React, { Children } from "react";

import styled from "styled-components";

const TitleWithImg: React.SFC<{ contents: string; children: React.ReactNode }> = ({
  contents,
  children,
}) => {
  return <StyledH3 contents={contents}>{children}</StyledH3>;
};

const StyledH3 = styled.h3<{ contents: string }>`
  ::before {
    content: "${props => props.contents}";
    margin: 5px;
    position: relative;
    top: 2px;
  }
`;

export default TitleWithImg;
