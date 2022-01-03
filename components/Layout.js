import Head from 'next/head';
import PropTypes from 'prop-types';
import { colors, domain } from '../config';
import getItemType from '../utils/getItemType';
import Footer from './Footer';
import Header from './Header';
import icons from './Layout.icons';

if (global.window) {
  /* eslint-disable no-console, max-len */
  console.log(
    [
      '%cHi there!',
      "This is not a theme slapped on top of a Wordpress deployment. It's a custom-made web application carefully crafted with React, Next.js, Node.js and a secret medley of unholy magic powders by Ionut-Cristian Florescu.",
      "He's a nice guy and an outstanding developer.",
      "If you're seeing this, you're most likely interested in his work or want to build something similar. So... why don't you try to approach him at https://linkedin.com/in/icflorescu instead of just staring at the console?",
    ].join('\n\n'),
    'font-size: 140%; color: #133542; line-height: 1.5'
  );
  /* eslint-enable */

  // eslint-disable-next-line global-require
  if (!global.window.lazySizes) require('lazysizes');

  const htmlEl = document.getElementsByTagName('html')[0];
  // eslint-disable-next-line global-require
  require('next/router').default.onRouteChangeComplete = (url) => {
    // just for consistency, since this doesn't really matter on the client side
    htmlEl.setAttribute('itemType', getItemType(url));
    global.ga('send', 'pageview', url);
  };
}

/* eslint-disable no-useless-escape */
const Layout = ({ title, activeMenuItem, showFooterBanners, children }) => (
  <div>
    <Head>
      <title>
        {title} – {domain}
      </title>
      <meta
        name="description"
        content="Professional interior design, decoration, visualization, 3D modeling, rendering and post-processing"
      />
      <meta
        name="keywords"
        content="interior design, 3d, modeling, rendering, post processing, rhino, vray, maxwell, photoshop"
      />
      <meta property="og:title" content="Interior design and visualization done right" />
      <meta
        property="og:description"
        content="Professional interior design, decoration, visualization, 3D modeling, rendering and post-processing"
      />
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
        margin: 0 0 0.5em 0;
      }

      h4 {
        font-size: 20px;
        line-height: 1.5;
        margin: 1em 0 0;
      }

      a {
        color: ${colors.greenText};
        &:hover {
          color: ${colors.redText};
        }
      }

      hr {
        border: 0;
        height: 2px;
        background: ${colors.blue};
      }

      @media (min-width: 480px) {
        h3 {
          font-size: 36px;
          margin: 0.25em 0;
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
    `}</style>
    <style jsx global>
      {icons}
    </style>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  activeMenuItem: PropTypes.string,
  showFooterBanners: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  activeMenuItem: null,
  showFooterBanners: false,
};

export default Layout;
