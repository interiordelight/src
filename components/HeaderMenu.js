import PropTypes from 'prop-types';
import { tagline } from '../config';
import HeaderMenuItem from './HeaderMenuItem';

function HeaderMenu({ activeItem }) {
  return (
    <nav className="menu">
      <HeaderMenuItem href="/" text="Home" title={tagline} iconName="home" isActive={activeItem === 'home'} />
      <HeaderMenuItem
        href="/services"
        text="Services"
        title="What do I do"
        iconName="info"
        isActive={activeItem === 'services'}
      />
      <HeaderMenuItem
        href="/portfolio"
        text="Portfolio"
        title="Some of the things I did"
        iconName="image"
        isActive={activeItem === 'portfolio'}
      />
      <HeaderMenuItem
        href="/contact"
        text="Contact"
        title="Let's talk!"
        iconName="talk"
        isActive={activeItem === 'contact'}
      />
      <style jsx>{`
        .menu {
          display: flex;
          text-transform: uppercase;
        }
      `}</style>
    </nav>
  );
}

HeaderMenu.propTypes = {
  activeItem: PropTypes.string,
};

HeaderMenu.defaultProps = {
  activeItem: null,
};

export default HeaderMenu;
