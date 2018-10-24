import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";

import "./style.css";

const Sidebar = ({ className, pages }) => (
  <div className={className}>
    <ul className="sidebar-list">
      <li className="sidebar-item">
        <Link to="/" className="sidebar-title">
          cesium-react examples
        </Link>
      </li>
      {pages.map(r => (
        <li key={r.slug} className="sidebar-item">
          <NavLink to={`/${r.slug}`} className="sidebar-link" activeClassName="sidebar-active-link">
            {r.name || r.slug}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.func.isRequired,
      name: PropTypes.string,
      slug: PropTypes.string.isRequired,
    }),
  ),
};

Sidebar.defaultProps = {
  pages: [],
};

export default Sidebar;
