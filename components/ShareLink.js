import { Component } from 'react';
import PropTypes from 'prop-types';

import { colors, shareLinks } from '../config';

export default class ShareLink extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    params: PropTypes.shape().isRequired,
    transparent: PropTypes.bool
  };

  static defaultProps = {
    transparent: false
  };

  onClick = () => {
    const { type, params } = this.props;
    const { width, height, url } = shareLinks[type];
    // eslint-disable-next-line prefer-template
    const popupUrl =
      `${url}?` +
      Object.keys(params)
        .map(key => `${key}=${encodeURIComponent(params[key])}`)
        .join('&');

    const popup = window.open(popupUrl, 'share', `width=${width},height=${height}`);
    popup.moveTo((screen.width - width) / 2, (screen.height - height) / 2);
    popup.focus();
  };

  render() {
    const { type, title, transparent } = this.props;
    return (
      <a
        className="link"
        href={`#share-this-on-${type}`}
        title={title}
        role="button"
        tabIndex="0"
        onClick={this.onClick}
      >
        <i
          className={`icon icon-${type}`}
          style={{
            background: transparent ? 'transparent' : null,
            border: transparent ? '2px solid white' : null
          }}
        />
        <style jsx>{`
          .link {
            display: inline-block;
            text-decoration: none;
            margin: 10px 6px;
            cursor: pointer;

            @media (min-width: 768px) {
              text-decoration: none;
              margin: 16px 12px;
              cursor: pointer;
            }

            &:hover {
              .icon-facebook {
                background: ${colors.facebook};
              }
              .icon-twitter {
                background: ${colors.twitter};
              }
              .icon-google {
                background: ${colors.google};
              }
              .icon-pinterest {
                background: ${colors.pinterest};
              }
              .icon-linkedin {
                background: ${colors.linkedin};
              }
            }
          }

          .icon {
            display: inline-block;
            font-size: 24px;
            width: 24px;
            text-align: center;
            padding: 10px;
            color: white;
            background: ${colors.mediumGray};
            border-radius: 50%;
            transition: background 0.2s;
          }
        `}</style>
      </a>
    );
  }
}
