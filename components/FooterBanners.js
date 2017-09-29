import React from 'react';

import FooterBanner from './FooterBanner';
import { colors } from '../config';

export default () => (
  <div className="container">
    <div className="inner-container">
      <h3 className="title">Customers & Partners</h3>
      <div className="banners">
        <FooterBanner code="viv" name="Virtual Viewing" tld="virtualviewing.co.uk" />
        <FooterBanner code="lsh" name="LeasingSH.ro" tld="leasingsh.ro" />
        <FooterBanner code="bex" name="BodyExprim" tld="bodyexprim.ro" />
        <FooterBanner code="evg" name="Vila EverGreen" tld="vilaevergreen.ro" />
      </div>
    </div>
    <style jsx>{`
      .container {
        background: ${colors.mediumGray};
      }

      .inner-container {
        padding: 10px;
      }

      .title {
        color: white;
        margin-bottom: .66em;
        border-bottom-color: white;
      }

      .banners {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      @media (min-width: 1000px) {
        .inner-container {
          width: 980px;
          margin: auto;
          padding: 20px 0;
        }
      }
    `}</style>
  </div>
);
