import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import { domain, projectRegexp, colors } from '../config';

if (global.window) {
  // eslint-disable-next-line global-require
  if (!global.window.lazySizes) require('lazysizes');

  const htmlEl = document.getElementsByTagName('html')[0];
  // eslint-disable-next-line global-require
  require('next/router').default.onRouteChangeComplete = (url) => {
    // just for consistency, since this doesn't really matter on the client side
    htmlEl.setAttribute(
      'itemType',
      `http://schema.org/${projectRegexp.test(url) ? 'Article' : 'WebSite'}`
    );
    global.ga('send', 'pageview', url);
  };
}

const Layout = ({ title, activeMenuItem, showFooterBanners, children }) => (
  <div>
    <Head>
      <title>{title} – {domain}</title>
    </Head>
    <Header activeMenuItem={activeMenuItem} />
    {children}
    <Footer showBanners={showFooterBanners} />
    <style jsx global>{`
      body {
        margin: 0;
        background: ${colors.darkGray};
        color: ${colors.text};
        font: 16px/1.5 'Open Sans', sans-serif;
      }

      h3,
      h4 {
        font-weight: 400;
        font-family: 'Poiret One', sans-serif;
        text-transform: uppercase;
      }

      h3 {
        font-size: 24px;
        line-height: 1.33;
        display: inline-block;
        padding: 0 6px;
        border-bottom: 2px solid ${colors.blue};
        margin: 0 0 .5em 0;
      }

      h4 {
        font-size: 20px;
        line-height: 1.5;
        margin: 1em 0 0;
      }

      a {
        color: ${colors.greenText};
      }

      a:hover {
        color: ${colors.redText};
      }

      hr {
        border: 0;
        height: 2px;
        background: ${colors.blue};
      }

      @media (min-width: 480px) {
        h3 {
          font-size: 36px;
          margin: .25em 0;
        }

        h4 {
          font-size: 28px;
        }
      }

      @media (min-width: 1000px) {
        h3 {
          font-size: 52px;
        }

        h4 {
          font-size: 36px;
        }
      }

      @font-face {
        font-family: 'icons';
        src:
          url('/static/fonts/icons.ttf') format('truetype'),
          url('/static/fonts/icons.woff') format('woff'),
          url('/static/fonts/icons.svg#icons') format('svg');
        font-weight: normal;
        font-style: normal;
      }

      [class^="icon-"], [class*=" icon-"] {
        /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'icons' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;

        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .icon-home:before {
        content: "\\e900";
      }
      .icon-info:before {
        content: "\\e901";
      }
      .icon-image:before {
        content: "\\e902";
      }
      .icon-talk:before {
        content: "\\e903";
      }
      .icon-left:before {
        content: "\\e904";
      }
      .icon-right:before {
        content: "\\e905";
      }
      .icon-close:before {
        content: "\\e906";
      }
      .icon-facebook:before {
        content: "\\e907";
      }
      .icon-twitter:before {
        content: "\\e908";
      }
      .icon-google:before {
        content: "\\e909";
      }
      .icon-behance:before {
        content: "\\e90a";
      }
      .icon-pinterest:before {
        content: "\\e90b";
      }
      .icon-linkedin:before {
        content: "\\e90c";
      }
      .icon-email:before {
        content: "\\e90d";
      }
      .icon-skype:before {
        content: "\\e90e";
      }
    `}</style>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  activeMenuItem: PropTypes.string,
  showFooterBanners: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  activeMenuItem: null,
  showFooterBanners: false
};

export default Layout;
