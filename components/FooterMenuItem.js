import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { colors } from '../config';

const FooterMenuItem = ({ href, text, title }) => (
  <span className="item">
    <Link href={href}>
      <a className="link" title={title}>{text}</a>
    </Link>
    <style jsx>{`
      .item {
        display: block;
        padding: 14px;
        border-bottom: 1px solid ${colors.lightGray};
      }

      .link {
        color: white;
        text-transform: uppercase;
        text-decoration: none;
      }
      .link:hover {
        text-decoration: underline;
      }

      @media (min-width: 500px) {
        .item {
          display: inline;
          border-bottom: 0;
          padding: 0;
        }
        .item::before {
          content: '·';
          margin: 0 10px;
        }
        .item:first-child::before {
          display: none;
        }
      }
    `}</style>
  </span>
);

FooterMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default FooterMenuItem;
