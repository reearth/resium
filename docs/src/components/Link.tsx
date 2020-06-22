import React from "react";

const Link: React.FC<{
  href: string;
}> = ({ href, children }) => {
  return (
    <a
      href={href}
      style={{ color: "#00A0E8", textDecoration: "none" }}
      onClick={e => {
        e.stopPropagation();
      }}>
      {children}
    </a>
  );
};

export default Link;
