import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// important: the styled-jsx module here must be the same version as the one included in next.js
// eslint-disable-next-line import/no-extraneous-dependencies
import flush from 'styled-jsx/server';

import { appName, domain, domainUrl, colors, iconLinks, projectRegexp } from '../config';

export default class Doc extends Document {
  static getInitialProps({ asPath, renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return {
      html,
      head,
      errorHtml,
      chunks,
      styles,
      itemType: `http://schema.org/${projectRegexp.test(asPath) ? 'Article' : 'WebSite'}`
    };
  }

  render() {
    return (
      <html lang="en" itemScope itemType={this.props.itemType}>
        <Head>
          <script async src="/static/ga.js" />
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
          <meta name="description" content="Professional interior design, decoration, visualization, 3D modeling, rendering and post-processing" />
          <meta name="keywords" content="interior design, 3d, modeling, rendering, post processing, rhino, vray, maxwell, photoshop" />
          <meta property="og:site_name" content={domain} />
          <meta property="og:title" content="Interior design and visualization done right" />
          <meta property="og:image" content={`${domainUrl}/static/images/interiordelight-og-image.jpg`} />
          <meta property="og:description" content="Professional interior design, decoration, visualization, 3D modeling, rendering and post-processing" />
        </Head>
        <body>
          <Main />
          <NextScript />
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

        </body>
      </html>
    );
  }
}
