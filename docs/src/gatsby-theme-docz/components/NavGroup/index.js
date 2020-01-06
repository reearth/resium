// Ref: https://raw.githubusercontent.com/doczjs/docz/v2.2.0/core/gatsby-theme-docz/src/components/NavGroup/index.js
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useCurrentDoc } from "docz";
import { ChevronDown } from "gatsby-theme-docz/src/components/Icons";
import { NavLink } from "gatsby-theme-docz/src/components/NavLink";
import { link as linkStyle } from "gatsby-theme-docz/src/components/NavLink/styles";
import * as styles from "gatsby-theme-docz/src/components/NavGroup/styles";

export const NavGroup = ({ item, sidebarRef }) => {
  const currentDoc = useCurrentDoc();
  const currentDocRef = React.useRef();
  const { name, menu } = item;
  const [subheadingsVisible, setShowsubheadings] = React.useState(currentDoc.menu === name);
  const toggleSubheadings = () => setShowsubheadings(!subheadingsVisible);
  React.useEffect(() => {
    if (sidebarRef.current && currentDocRef.current) {
      sidebarRef.current.scrollTo(0, currentDocRef.current.offsetTop);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isExternalLink = !menu && item.href;
  if (isExternalLink) {
    return (
      <a href={item.href} sx={linkStyle}>
        {item.name}
      </a>
    );
  }

  return (
    <div sx={styles.wrapper} data-testid="nav-group">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div sx={styles.title} onClick={toggleSubheadings}>
        {item.name}
        <ChevronDown sx={styles.chevron({ active: subheadingsVisible })} />
      </div>
      <div sx={styles.sublinkWrapper} data-testid="nav-group-links">
        {menu &&
          subheadingsVisible &&
          menu.map(menu => {
            if (currentDoc.route === menu.route) {
              return (
                <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                  {menu.name}
                </NavLink>
              );
            }
            return (
              <NavLink key={menu.id} item={menu}>
                {menu.name}
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};
