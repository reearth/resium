import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";

import styles from "./style.css";

const Sidebar = ({ className, routes }) => (
  <div className={className}>
    <ul className={styles.sidebarList}>
      <li className={styles.sidebarItem}>
        <Link
          to="/"
          className={styles.sidebarTitle}>
          cesium-react examples
        </Link>
      </li>
      {routes.map(r => (
        <li key={r.slug} className={styles.sidebarItem}>
          <NavLink
            to={`/${r.slug}`}
            className={styles.sidebarLink}
            activeClassName={styles.sidebarActiveLink}>
            {r.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.array
};

Sidebar.defaultProps = {
  routes: []
};

export default Sidebar;
