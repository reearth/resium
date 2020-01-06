import React from "react";
import styled from "@emotion/styled";
import { Link } from "docz";

const Image = styled.img`
  width: 200px;
`;

export const Logo = () => (
  <Link to="/">
    <Image
      src="https://raw.githubusercontent.com/darwin-education/resium/master/docs/resources/logo-sidebar.png"
      alt="Resium"
    />
  </Link>
);
