import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ backgroundColor, children }) => (
  <div className="wrapper" style={{ background: backgroundColor }}>
    <div className="container">
      {children}
    </div>
    <style jsx>{`
      .wrapper {
        padding: 20px 10px;
        background: white linear-gradient(
          90deg,
          #e6e6e6 0%,
          #fafafa 16%,
          white 50%,
          #fafafa 84%,
          #e6e6e6 100%
        );
      }

      @media (min-width: 1000px) {
        .container {
          width: 980px;
          margin: auto;
        }
      }
    `}</style>
  </div>
);

Content.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired
};

Content.defaultProps = {
  backgroundColor: null
};

export default Content;
