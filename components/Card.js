import PropTypes from 'prop-types';

function Card({ children }) {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          flex: 0 0 auto;
          width: 50%;
          box-sizing: border-box;
          padding: 10px;

          @media (min-width: 768px) {
            width: 25%;
          }

          /* quite improbable */
          @media (max-width: 350px) {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
