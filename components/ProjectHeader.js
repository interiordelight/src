import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Title from './Title';
import { colors } from '../config';

const ProjectHeader = ({ title, color, description, prevProject, nextProject }) => (
  <div className="container">
    <div className="link-container">
      {prevProject ? (
        <Link href={`/project?slug=${prevProject.slug}`} as={`/portfolio/${prevProject.slug}`}>
          <a className="link" title={`See a newer project: «${prevProject.title}»`}>
            <i className="icon icon-left" />
          </a>
        </Link>
      ) : null}
    </div>
    <div className="title">
      <Title
        text={title}
        description={description}
        underlineColor={`#${color}`}
      />
    </div>
    <div className="link-container">
      {nextProject ? (
        <Link href={`/project?slug=${nextProject.slug}`} as={`/portfolio/${nextProject.slug}`}>
          <a className="link" title={`See an older project: «${nextProject.title}»`}>
            <i className="icon icon-right" />
          </a>
        </Link>
      ) : null}
    </div>
    <style jsx>{`
      .container {
        display: flex;
        align-items: center;
      }

      .title {
        flex: 1 1 auto;
      }

      .link-container {
        width: 48px;
      }

      .link {
        display: inline-block;
        color: ${colors.blue};
        height: 24px;
        padding: 10px;
        border: 2px solid ${colors.blue};
        border-radius: 50%;
        text-decoration: none;
        transition: color .2s, background .2s;
      }

      .link:hover:not(:active) {
        color: white;
        background: ${colors.blue};
      }

      .icon {
        font-size: 24px;
      }
    `}</style>
  </div>
);

ProjectHeader.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  prevProject: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string
  }),
  nextProject: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string
  })
};

ProjectHeader.defaultProps = {
  prevProject: null,
  nextProject: null
};

export default ProjectHeader;
