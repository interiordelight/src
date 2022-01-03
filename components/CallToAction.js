import PropTypes from 'prop-types';
import { colors } from '../config';

const title = "Let's talk";

const CallToAction = ({ children }) => (
  <div className="container">
    {children}
    <a className="call-to-action" href="/contact" title={`${title}!`}>
      {title}
    </a>
    <style jsx>{`
      .container {
        text-align: center;
        margin: 2em 0 0.5em;
      }

      .call-to-action {
        display: inline-block;
        font: 24px/2 'Poiret One', sans-serif;
        text-transform: uppercase;
        text-decoration: none;
        color: ${colors.darkGray};
        border: 2px solid ${colors.darkGray};
        padding: 0 16px;
        transition: background 0.2s;

        &:hover {
          color: white;
          background: ${colors.darkGray};
        }

        @media (min-width: 500px) {
          font-size: 36px;
          padding: 0 20px;
        }

        @media (min-width: 1000px) {
          font-size: 52px;
          padding: 0 24px;
        }
      }
    `}</style>
  </div>
);

CallToAction.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CallToAction;
