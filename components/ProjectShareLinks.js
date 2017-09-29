import React from 'react';
import PropTypes from 'prop-types';

import ShareLink from './ShareLink';

const ProjectShareLinks = ({ url, title, absoluteCoverUrl, description }) => (
  <div className="container">
    <ShareLink
      type="facebook"
      title={`Share «${title}» project on Facebook`}
      params={{ u: url }}
    />
    <ShareLink
      type="twitter"
      title={`Tweet about «${title}» project`}
      params={{ text: title, url, hashtags: 'design, visualization, 3d', via: 'iriflorescu' }}
    />
    <ShareLink
      type="google"
      title={`Share «${title}» project on Google+`}
      params={{ url }}
    />
    <ShareLink
      type="pinterest"
      title={`Pin «${title}» project cover picture`}
      params={{
        url,
        media: absoluteCoverUrl,
        description: `${title} - project by interiordelight.ro. ${description}`
      }}
    />
    <ShareLink
      type="linkedin"
      title={`Share «${title}» project on LinkedIn`}
      params={{
        mini: true,
        url,
        title,
        summary: description,
        source: 'http://www.interiordelight.ro'
      }}
    />
    <style jsx>{`
      .container {
        text-align: center;
        margin-bottom: 10px;
      }
    `}</style>
  </div>
);

ProjectShareLinks.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  absoluteCoverUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProjectShareLinks;
