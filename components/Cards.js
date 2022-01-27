import PropTypes from 'prop-types';

function Cards({ children }) {
  return (
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
}

Cards.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cards;
