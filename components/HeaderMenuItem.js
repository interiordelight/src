import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';

import { colors } from '../config';

const HeaderMenuItem = ({ href, text, title, iconName, isActive }) => (
  <Link href={href}>
    <a
      className={classNames('container', { active: isActive })}
      title={title}
    >
      <i className={`icon-${iconName} icon`} />
      <span className="text">{text}</span>
      <style jsx>{`
        .container {
          flex: 1 1 25%;
          border-top: 1px solid white;
          border-left: 1px solid white;
          text-decoration: none;
          color: white;
          position: relative;

          &.active::after {
            position: absolute;
            content: '';
            border: 8px solid transparent;
            border-top-color: ${colors.blue};
            top: 48px;
            left: 50%;
            transform: translate3d(-50%, 0, 0);
          }

          &:first-child {
            border-left: none;
          }
        }


        .icon, .text {
          line-height: 48px;
        }

        .icon {
          font-size: 24px;
        }

        .text {
          display: none;
        }

        @media (min-width: 440px) {
          .icon {
            display: none;
          }

          .text {
            display: inline;
          }
        }

        @media (min-width: 1000px) {
          .container {
            border: 0;
            align-self: flex-start;
            margin: 28px 0 0 30px;
            border-top: 4px solid transparent;
            transition: 0.2s border-color;

            &:hover {
              border-top-color: white;
            }

            &.active::after {
              top: 84px;
            }
          }

          .text {
            line-height: 2;
            font-size: 20px;
          }
        }
      `}</style>
    </a>
  </Link>
);

HeaderMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default HeaderMenuItem;
