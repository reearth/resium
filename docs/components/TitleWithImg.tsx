import React, { Children } from "react";

import styled from "styled-components";

const TitleWithImg: React.SFC<{ contents: string; children: React.ReactNode }> = ({
  contents,
  children,
}) => {
  return <StyledH3 contents={contents}>{children}</StyledH3>;
};

const StyledH3Before = styled.h3<{ contents: string }>`
  ::before {
    content: "${props => props.contents}";
    margin: 5px;
    position: relative;
    top: 2px;
  }
`;

const StyledH3 = styled(StyledH3Before)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default TitleWithImg;
