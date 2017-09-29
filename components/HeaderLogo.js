import React from 'react';
import Link from 'next/link';

import { brand, tagline } from '../config';

export default () => (
  <div className="logo-container">
    <Link href="/">
      <a className="logo" title={tagline}>
        <h1 className="brand">{brand}</h1>
        <h2 className="tagline">{tagline}</h2>
      </a>
    </Link>
    <style jsx>{`
      .logo-container {
        padding: 10px 0;
      }

      .logo {
        background: url('/static/images/logo.svg') left/80px no-repeat;
        display: inline-block;
        text-align: left;
        text-decoration: none;
        color: white;
        padding: 16px 0 8px;
      }

      .brand, .tagline {
        margin: 0;
        font-weight: 400;
      }

      .brand {
        margin: -22px 0 2px 90px;
        font-size: 40px;
        text-transform: lowercase;
      }

      .tagline {
        margin-left: 92px;
        font-size: 11px;
        text-transform: uppercase;
      }

      @media (min-width: 440px) {
        .brand {
          margin: -24px 0 -10px 90px;
          font-size: 52px;
        }

        .tagline {
          font-size: 14px;
          line-height: 2;
        }
      }

      // quite improbable
      @media (max-width: 350px) {
        .brand {
          margin: 0 0 40px 90px;
          font-size: 20px;
        }

        .tagline {
          display: none;
        }
      }
    `}</style>
  </div>
);
