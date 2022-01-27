import PropTypes from 'prop-types';

function Title({ text, textColor, underlineColor, itemProp }) {
  return (
    <div className="container">
      <h3
        style={{
          color: textColor,
          borderBottomColor: underlineColor,
        }}
        itemProp={itemProp}
      >
        {text}
      </h3>
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  underlineColor: PropTypes.string,
  itemProp: PropTypes.string,
};

Title.defaultProps = {
  textColor: null,
  underlineColor: null,
  itemProp: null,
};

export default Title;
