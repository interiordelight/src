import { colors } from '../config';
import FooterBanner from './FooterBanner';

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

        @media (min-width: 1000px) {
          width: 980px;
          margin: auto;
          padding: 20px 0;
        }
      }

      .title {
        color: white;
        margin-bottom: 0.66em;
        border-bottom-color: white;
      }

      .banners {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `}</style>
  </div>
);
