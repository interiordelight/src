import PropTypes from 'prop-types';
import { colors } from '../config';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

const Header = ({ activeMenuItem }) => (
  <header className="header">
    <div className="container">
      <HeaderLogo />
      <HeaderMenu activeItem={activeMenuItem} />
    </div>
    <style jsx>{`
      .header {
        font-family: 'Poiret One', sans-serif;
        background: ${colors.blue};
        text-align: center;
      }

      @media (min-width: 1000px) {
        .container {
          width: 980px;
          margin: auto;
          display: flex;
          justify-content: space-between;
        }
      }
    `}</style>
  </header>
);

Header.propTypes = {
  activeMenuItem: PropTypes.string,
};

Header.defaultProps = {
  activeMenuItem: null,
};

export default Header;
