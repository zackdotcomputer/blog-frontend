import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Navigation } from ".";
import config from "../../utils/siteConfig";

// Styles
import "../../styles/master.scss";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
  const site = data.allGhostSettings.edges[0].node;
  return (
    <Fragment>
      <Helmet>
        <html lang={site.lang} />
        <body className={bodyClass} />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Playfair+Display|Roboto+Mono"
          rel="stylesheet"
        />
      </Helmet>
      <div className="viewport">
        <div className="viewport-top">
          {/* The main header section on top of the screen */}
          <Header site={site} isHome={isHome} />

          <main className={"site-main" + (isHome ? "" : " nav-padding")}>
            {/* All the main content gets inserted here, index.js, post.js */}
            {children}
          </main>
        </div>

        <div className="viewport-bottom">
          {/* The footer at the very bottom of the screen */}
          <Footer site={site} />
        </div>
      </div>
    </Fragment>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostSettings: PropTypes.object.isRequired
  }).isRequired
};

const DefaultLayoutSettingsQuery = props => (
  <StaticQuery
    query={graphql`
      query GhostSettings {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
      }
    `}
    render={data => <DefaultLayout data={data} {...props} />}
  />
);

export default DefaultLayoutSettingsQuery;
