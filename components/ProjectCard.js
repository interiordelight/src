import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Card from './Card';

const ProjectCard = ({ slug, title, color }) => {
  const picPrefix = `/static/pics/t/${slug}-cover`;
  return (
    <Card>
      <Link href={`/project?slug=${slug}`} as={`/portfolio/${slug}`} prefetch>
        <a className="link" title={title} style={{ background: `#${color}` }}>
          <img
            className="cover lazyload"
            alt={title}
            src={`${picPrefix}-20x20.jpg`}
            data-sizes="auto"
            data-srcset={`${picPrefix}-230x230.jpg 230w, ${picPrefix}-460x460.jpg 460w`}
            data-src={`${picPrefix}-230x230.jpg`}
          />
          <h4 className="title">{title}</h4>
        </a>
      </Link>
      <style jsx>{`
        .link {
          display: block;
          color: white;
          text-align: center;
          text-decoration: none;
        }

        .link:hover {
          box-shadow: 0 1px 3px rgba(0, 0, 0, .66);
        }

        .cover {
          background: white url('/static/images/spinner.svg') center no-repeat;
          display: block;
          width: 100%;
          min-height: 100px;
        }

        .title {
          margin: 0;
          font-size: 16px;
          padding: .5em .25em;
          height: 48px;
        }

        @media (min-width: 480px) {
          .title {
            font-size: 18px;
            height: 60px;
          }
        }

        /* quite improbable */
        @media (max-width: 350px) {
          .title {
            height: auto;
          }
        }
      `}</style>
    </Card>
  );
};

ProjectCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default ProjectCard;
