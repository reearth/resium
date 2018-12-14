import React from "react";
import { Link } from "docz";
import styled from "styled-components";

const Button = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  border-radius: 2px;
  border: 2px solid #ccc;
  text-decoration: none;
  color: #000;
  width: 200px;
  text-align: center;
  transition: background-color ease-in-out 0.1s;

  & + & {
    margin-left: 10px;
  }

  &:hover {
    background-color: #ccc;
  }
`;

export default Button;
