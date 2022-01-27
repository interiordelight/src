import PropTypes from 'prop-types';
import { domainUrl } from '../config';

function ProjectCover({ slug, title }) {
  const coverOriginalSrc = `/static/pics/o/${slug}-cover.jpg`;
  const coverSrcSet = [
    `/static/pics/t/${slug}-cover-230.jpg 230w`,
    `/static/pics/t/${slug}-cover-460.jpg 460w`,
    `${coverOriginalSrc} 980w`,
  ].join(', ');

  return (
    <div itemScope itemProp="image" itemType="http://schema.org/ImageObject">
      <meta itemProp="url" content={`${domainUrl}${coverOriginalSrc}`} />
      <img
        className="cover lazyload"
        alt={title}
        src={`/static/pics/t/${slug}-cover-20.jpg`}
        data-sizes="auto"
        data-srcset={coverSrcSet}
        data-src={`/static/pics/t/${slug}-cover-230.jpg`}
      />
      <style jsx>{`
        .cover {
          width: 100%;
          min-height: 100px;
          background: white url('/static/images/spinner.svg') center no-repeat;
        }
      `}</style>
    </div>
  );
}

ProjectCover.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectCover;
