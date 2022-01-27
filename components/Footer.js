import Link from 'next/link';
import PropTypes from 'prop-types';
import { colors, domain, tagline } from '../config';
import FooterBanners from './FooterBanners';
import FooterMenu from './FooterMenu';

function Footer({ showBanners }) {
  return (
    <footer className="footer">
      {showBanners ? <FooterBanners /> : null}
      <div className="container">
        <div className="content">
          <FooterMenu />
          <div>
            By using this website you agree to the terms and conditions of our{' '}
            <Link href="/cookie-policy">
              <a className="link">cookie policy</a>
            </Link>
            .
          </div>
        </div>
        <hr className="separator" />
        <div className="attribution">
          <div>
            Developed by{' '}
            <a
              className="link"
              title="Website developer profile"
              href="https://github.com/icflorescu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ionut Cristian Florescu.
            </a>
          </div>
          <div>
            © 2010 — {new Date().getFullYear()}{' '}
            <Link href="/">
              <a title={tagline} className="link">
                {domain}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          font: 14px/2 'Poiret One', sans-serif;
          color: white;
          text-align: center;
        }

        .container {
          margin: 10px;
        }

        .link {
          color: white;
          text-decoration: none;
          border-bottom: 1px dotted ${colors.mediumGray};

          &:hover {
            border-bottom-style: solid;
          }
        }

        .separator {
          border: 0;
          height: 1px;
          background: ${colors.lightGray};
          width: 50%;
        }

        @media (min-width: 768px) {
          .container {
            display: flex;
            justify-content: space-between;
          }

          .content {
            text-align: left;
          }

          .separator {
            display: none;
          }

          .attribution {
            text-align: right;
          }
        }

        @media (min-width: 1000px) {
          .container {
            width: 980px;
            margin: 10px auto;
          }

          .footer {
            font-size: 18px;
          }
        }
      `}</style>
    </footer>
  );
}

Footer.propTypes = {
  showBanners: PropTypes.bool.isRequired,
};

export default Footer;
