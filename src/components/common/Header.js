// Created by Zack Sheppard - May 2019 - Based on the gatsby+ghost starter.

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { Navigation } from ".";
import config from "../../utils/siteConfig";

const LogoImg = ({ logo, title }) => (
  <img className="site-logo" src={logo || "/images/logo.svg"} alt={title} />
);

const Header = ({ site, isHome }) => {
  const twitterUrl = site.twitter
    ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
    : null;
  const facebookUrl = site.facebook
    ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
    : null;

  return (
    <header className={"site-head" + (isHome ? "" : " sticky")}>
      {isHome && (
        <div className="container site-mast">
          <nav className="mast-nav">
            <div className="site-mast-left" />
            <div className="site-mast-right">
              {site.twitter && (
                <a
                  href={twitterUrl}
                  className="site-nav-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="site-nav-icon"
                    src="/images/icons/twitter.svg"
                    alt="Twitter"
                  />
                </a>
              )}
              {site.facebook && (
                <a
                  href={facebookUrl}
                  className="site-nav-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="site-nav-icon"
                    src="/images/icons/facebook.svg"
                    alt="Facebook"
                  />
                </a>
              )}
              <a
                className="site-nav-item"
                href={`https://feedly.com/i/subscription/feed/${
                  config.siteUrl
                }/rss/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="site-nav-icon"
                  src="/images/icons/rss.svg"
                  alt="RSS Feed"
                />
              </a>
            </div>
          </nav>

          <div className="site-banner">
            {site.title === "Code & Cocktails" ? (
              <h1 className="site-banner-title">
                <span className="sans-serif">Code</span>
                <span className="large">&amp;</span>Cocktails
              </h1>
            ) : (
              <h1 className="site-banner-title">{site.title}</h1>
            )}
            <h4 className="site-banner-desc">{site.description}</h4>
          </div>
        </div>
      )}
      <div className={"container nav-wrapper" + (isHome ? " centered" : "")}>
        <nav className="site-nav">
          {!isHome && (
            <div className="site-nav-left">
              <div className="site-nav-item brand-logo">
                <Link to="/">
                  <LogoImg {...site} />
                </Link>
              </div>
            </div>
          )}
          <div className="site-nav-right">
            {/* The navigation items as setup in Ghost */}
            <Navigation data={site.navigation} navClass="site-nav-item" />
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  isHome: PropTypes.bool,
  site: PropTypes.object.isRequired
};

export default Header;
