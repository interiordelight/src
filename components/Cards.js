import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        margin: 0 -10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}</style>
  </div>
);

Cards.propTypes = {
  children: PropTypes.node.isRequired
};

export default Cards;
