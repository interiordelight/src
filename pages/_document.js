import Document, { Head, Main, NextScript } from 'next/document';
// important: the styled-jsx module here must be the same version as the one included in next.js
// eslint-disable-next-line import/no-extraneous-dependencies
import flush from 'styled-jsx/server';
import { appName, colors, domain, iconLinks } from '../config';
import getItemType from '../utils/getItemType';

export default class Doc extends Document {
  static getInitialProps({ asPath, renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles, itemType: getItemType(asPath) };
  }

  render() {
    return (
      <html lang="en" itemScope itemType={this.props.itemType}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="author" content="Ionut-Cristian Florescu" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {iconLinks}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content={appName} />
          <meta name="application-name" content={appName} />
          <meta name="theme-color" content={colors.blue} />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans|Poiret+One" rel="stylesheet" />
          <meta property="og:site_name" content={domain} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
