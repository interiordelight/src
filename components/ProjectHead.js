import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { domain, domainUrl } from '../config';

const renderOgSeeAlsoProject = project => (
  <meta
    key={project.index}
    property="og:see_also"
    content={`${domainUrl}/portfolio/${project.slug}/`}
  />
);

const ProjectHead = ({ slug, title, description, otherProjects }) => {
  const absoluteCoverUrl = `${domainUrl}/static/pics/o/${slug}-cover.jpg`;
  return (
    <Head>
      <meta name="description" content={`Professional interior design and visualization. ${description}`} />
      <meta name="keywords" content="interior design, 3d, modeling, rendering, post processing, rhino, vray, maxwell, photoshop, portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="iriflorescu" />
      <meta name="twitter:domain" content={`www.${domain}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteCoverUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={absoluteCoverUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:author" content="100003892666191" />
      <meta property="og:publisher" content="215465541907600" />
      {otherProjects.map(renderOgSeeAlsoProject)}
    </Head>
  );
};

ProjectHead.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  otherProjects: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number,
    slug: PropTypes.string
  })).isRequired
};

export default ProjectHead;
