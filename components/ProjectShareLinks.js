import PropTypes from 'prop-types';
import { domain } from '../config';
import ShareLink from './ShareLink';

function ProjectShareLinks({ url, title, absoluteCoverUrl, description }) {
  return (
    <div className="container">
      <ShareLink type="facebook" title={`Share «${title}» project on Facebook`} params={{ u: url }} />
      <ShareLink
        type="pinterest"
        title={`Pin «${title}» project cover picture`}
        params={{
          url,
          media: absoluteCoverUrl,
          description: `${title} - project by ${domain}. ${description}`,
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
}

ProjectShareLinks.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  absoluteCoverUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectShareLinks;
