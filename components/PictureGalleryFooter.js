import PropTypes from 'prop-types';

import ShareLink from './ShareLink';
import { domain, domainUrl } from '../config';

const PictureGalleryFooter = ({ projectSlug, projectTitle, currentSlideSrc }) => (
  <div className="container">
    <ShareLink
      transparent
      type="pinterest"
      title="Pin this picture"
      params={{
        url: `${domainUrl}/portfolio/${projectSlug}/`,
        media: `${domainUrl}/static/pics/o/${currentSlideSrc}`,
        description: `Picture from ${projectTitle} project by ${domain}.`
      }}
    />
    <style jsx>{`
      .container {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to bottom, transparent, rgba(black, 50%));
        text-align: center;
        z-index: 1;
        opacity: 0.5;
        transition: opacity 0.5s;

        &:hover {
          opacity: 1;
        }
      }
    `}</style>
  </div>
);

PictureGalleryFooter.propTypes = {
  projectSlug: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  currentSlideSrc: PropTypes.string.isRequired
};

export default PictureGalleryFooter;
