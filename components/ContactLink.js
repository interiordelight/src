import PropTypes from 'prop-types';

import { colors } from '../config';

const ContactLink = ({ type, href, title, detail }) => (
  <a className="link" href={href} target="_blank" rel="noopener noreferrer" title={title}>
    <i className={`icon icon-${type}`} />
    {detail ? <div className="detail">{detail}</div> : null}
    <style jsx>{`
      .link {
        display: inline-block;
        text-decoration: none;
        margin: 12px 0;

        &:hover {
          .icon {
            background: ${colors.blue};
          }

          .icon-skype {
            background: ${colors.skype};
          }

          .icon-behance {
            background: ${colors.behance};
          }

          .icon-linkedin {
            background: ${colors.linkedin};
          }

          .icon-facebook {
            background: ${colors.facebook};
          }

          .icon-google {
            background: ${colors.google};
          }

          .detail {
            color: ${colors.blue};
          }
        }
      }

      .icon {
        display: inline-block;
        font-size: 24px;
        padding: 10px;
        color: white;
        background: ${colors.mediumGray};
        border-radius: 50%;
        transition: background 0.2s;
        margin: 4px 12px;
      }

      .detail {
        color: ${colors.text};
        transition: background 0.2s;
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
