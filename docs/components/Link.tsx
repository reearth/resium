import React from "react";

const Link: React.FC<{
  href: string;
}> = ({ href, children }) => {
  return (
    <a
      href={href}
      onClick={e => {
        e.stopPropagation();
      }}>
      {children}
    </a>
  );
};

export default Link;
