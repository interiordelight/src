import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import { domain, projectRegexp } from '../config';

if (global.window) {
  // eslint-disable-next-line global-require
  if (!global.window.lazySizes) require('lazysizes');

  const htmlEl = document.getElementsByTagName('html')[0];
  // eslint-disable-next-line global-require
  require('next/router').default.onRouteChangeComplete = (url) => {
    // just for consistency, since this doesn't really matter on the client side
    htmlEl.setAttribute(
      'itemType',
      `http://http://schema.org/${projectRegexp.test(url) ? 'Article' : 'WebPage'}`
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
