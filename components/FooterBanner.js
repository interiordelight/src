import PropTypes from 'prop-types';

function FooterBanner({ code, name, tld }) {
  return (
    <div className="container">
      <a href={`http://www.${tld}`} target="_blank" rel="noopener noreferrer" title={name} className={`banner ${code}`}>
        {name}
      </a>
      <style jsx>{`
        .container {
          flex: 1 0 auto;

          @media (min-width: 400px) {
            flex-basis: 50%;
          }

          @media (min-width: 800px) {
            flex-basis: 186px;
          }
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
          transition: background 0.25s;
          margin: 0 10px 0;
        }

        .lsh:hover {
          background-position: 0px -100px;
        }

        .evg {
          background-position: -166px 0;
          &:hover {
            background-position: -166px -100px;
          }
        }

        .bex {
          background-position: -332px 0;
          &:hover {
            background-position: -332px -100px;
          }
        }

        .viv {
          background-position: -498px 0;
          &:hover {
            background-position: -498px -100px;
          }
        }
      `}</style>
    </div>
  );
}

FooterBanner.propTypes = {
  tld: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default FooterBanner;
