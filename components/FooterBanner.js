import React from 'react';
import PropTypes from 'prop-types';

const FooterBanner = ({ code, name, tld }) => (
  <div className="container">
    <a
      href={`http://www.${tld}`}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      className={`banner ${code}`}
    >{name}</a>
    <style jsx>{`
      .container {
        flex: 1 0 auto;
      }
      .banner {
        display: inline-block;
        width: 166px;
        height: 100px;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
        background: url('/static/images/partners.jpg');
        border: 2px solid white;
        transition: background .25s;
        margin: 0 10px 0;
      }

      .lsh:hover {
        background-position: 0px -100px;
      }

      .evg {
        background-position: -166px 0;
      }
      .evg:hover {
        background-position: -166px -100px;
      }

      .bex {
        background-position: -332px 0;
      }
      .bex:hover {
        background-position: -332px -100px;
      }

      .viv {
        background-position: -498px 0;
      }
      .viv:hover {
        background-position: -498px -100px;
      }
      @media (min-width: 400px) {
        .container {
          flex-basis: 50%;
        }
      }
      @media (min-width: 800px) {
        .container {
          flex-basis: 186px;
        }
      }
    `}</style>

  </div>
);

FooterBanner.propTypes = {
  tld: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};

export default FooterBanner;
