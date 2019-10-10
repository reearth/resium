import React from "react";

const Link: React.FC<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = props => {
  return <a {...props} />;
};

export default Link;
