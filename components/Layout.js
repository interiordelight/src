import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import { gaProperty, appName, domain, domainUrl, colors, iconLinks } from '../config';

if (global.window) {
  /* eslint-disable global-require */
  if (!global.window.lazySizes) {
    require('lazysizes');
  }

  require('next/router').default.onRouteChangeComplete = (url) => {
    global.ga('send', 'pageview', url);
  };
  /* eslint-enable global-require */
}

const Layout = ({ title, schemaType, activeMenuItem, showFooterBanners, children }) => (
  <div
    itemScope={schemaType ? true : null}
    itemType={schemaType ? `http://schema.org/${schemaType}` : null}
  >
    <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaProperty}`} />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: `
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', '${gaProperty}', 'auto');
          ga('send', 'pageview');
      ` }}
      />
      <meta charSet="UTF-8" />
      <meta name="author" content="Ionut-Cristian Florescu" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      {iconLinks}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={appName} />
      <meta name="application-name" content={appName} />
      <meta name="theme-color" content={colors.blue} />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Poiret+One" rel="stylesheet" />
      <title>{title} – {domain}</title>
      <meta name="description" content="Professional interior design, decoration, visualization, 3D modeling, rendering and post-processing" />
      <meta name="keywords" content="interior design, 3d, modeling, rendering, post processing, rhino, vray, maxwell, photoshop" />
      <meta property="og:site_name" content={domain} />
      <meta property="og:title" content="Interior design and visualization done right" />
      <meta property="og:image" content={`${domainUrl}/static/images/interiordelight-og-image.jpg`} />
      <meta property="og:description" content="Professional interior design, decoration, visualization, 3D modeling, rendering and post-processing" />
    </Head>
    <Header activeMenuItem={activeMenuItem} />
    {children}
    <Footer showBanners={showFooterBanners} />
    <style jsx global>{`
      /* global style */
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

      /* icons */
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
  schemaType: PropTypes.string,
  activeMenuItem: PropTypes.string,
  showFooterBanners: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  schemaType: null,
  activeMenuItem: null,
  showFooterBanners: false
};

export default Layout;
