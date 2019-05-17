// Created by Zack Sheppard - May 2019 - Based on the gatsby+ghost starter.

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { Navigation } from ".";

const Footer = ({ site }) => {
  return (
    <footer className="site-foot">
      <div className="site-foot-nav container">
        <div className="site-foot-nav-left">
          <Link to="/">{site.title}</Link> © 2019{" "}
          <a href="https://zacksheppard.com" rel="author" target="_blank">
            Zack Sheppard
          </a>{" "}
        </div>
        <div className="site-foot-nav-right">
          See the code that powers this frontend
          <a
            className="site-foot-nav-item"
            href="https://github.com/genuinezack/blog-frontend"
            target="_blank"
          >
            here on my Github
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  site: PropTypes.object.isRequired
};

export default Footer;
