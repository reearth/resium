import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";

import styles from "./style.css";

const Sidebar = ({ className, pages }) => (
  <div className={className}>
    <ul className={styles.sidebarList}>
      <li className={styles.sidebarItem}>
        <Link
          to="/"
          className={styles.sidebarTitle}>
          cesium-react examples
        </Link>
      </li>
      {pages.map(r => (
        <li key={r.slug} className={styles.sidebarItem}>
          <NavLink
            to={`/${r.slug}`}
            className={styles.sidebarLink}
            activeClassName={styles.sidebarActiveLink}>
            {r.name || r.slug}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.func.isRequired,
    name: PropTypes.string,
    slug: PropTypes.string.isRequired
  }))
};

Sidebar.defaultProps = {
  pages: []
};

export default Sidebar;
