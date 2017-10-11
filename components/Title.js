import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, textColor, underlineColor }) => (
  <div className="container">
    <h3
      style={{
        color: textColor,
        borderBottomColor: underlineColor
      }}
    >{text}</h3>
    <style jsx>{`
      .container {
        text-align: center;
      }
    `}</style>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  underlineColor: PropTypes.string
};

Title.defaultProps = {
  textColor: null,
  underlineColor: null
};

export default Title;
