import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../config';

const ContactLink = ({ type, href, title, detail }) => (
  <a
    className="link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
  >
    <i className={`icon icon-${type}`} />
    {detail ? <div className="detail">{detail}</div> : null}
    <style jsx>{`
      .link {
        display: inline-block;
        text-decoration: none;
        margin: 12px 0;
      }

      .icon {
        display: inline-block;
        font-size: 24px;
        padding: 10px;
        color: white;
        background: ${colors.mediumGray};
        border-radius: 50%;
        transition: background .2s;
        margin: 4px 12px;
      }

      .link:hover .icon {
        background: ${colors.blue};
      }

      .link:hover .icon-skype {
        background: ${colors.skype}
      }

      .link:hover .icon-behance {
        background: ${colors.behance}
      }

      .link:hover .icon-linkedin {
        background: ${colors.linkedin}
      }

      .link:hover .icon-facebook {
        background: ${colors.facebook}
      }

      .link:hover .icon-google {
        background: ${colors.google}
      }

      .detail {
        color: ${colors.text};
        transition: background .2s;
      }

      .link:hover .detail {
        color: ${colors.blue};
      }
    `}</style>
  </a>
);

ContactLink.propTypes = {
  type: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string
};

ContactLink.defaultProps = {
  detail: null
};

export default ContactLink;
