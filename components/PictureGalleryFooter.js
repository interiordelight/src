import React from 'react';
import PropTypes from 'prop-types';

import ShareLink from './ShareLink';

const PictureGalleryFooter = ({ projectSlug, projectTitle, currentSlideSrc }) => (
  <div className="container">
    <ShareLink
      transparent
      type="pinterest"
      title="Pin this picture"
      params={{
        url: `http://www.interiordelight.ro/portfolio/${projectSlug}/`,
        media: `http://www.interiordelight.ro/static/pics/o/${currentSlideSrc}`,
        description: `Picture from ${projectTitle} project by interiordelight.ro.`
      }}
    />
    <style jsx>{`
      .container {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, .5));
        text-align: center;
        z-index: 1;
        opacity: .5;
        transition: opacity .5s;
      }

      .container:hover {
        opacity: 1;
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
