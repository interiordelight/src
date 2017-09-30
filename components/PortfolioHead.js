import React from 'react';
import Head from 'next/head';

import { domain, domainUrl } from '../config';
import projects from '../projects-json/index.json';

const twitterImageIndexes = [1, 2, 3, 4];

const renderTwitterImage = index => (
  <meta
    key={index}
    property={`twitter:image${index}`}
    content={`${domainUrl}/static/pics/o/${projects[index].slug}-cover.jpg`}
  />
);

export default () => (
  <Head>
    <meta name="description" content="See my portfolio of professional interior design, decoration, visualization, 3D modeling, rendering and post-processing" />
    <meta name="keywords" content="interior design, 3d, modeling, rendering, post processing, rhino, vray, maxwell, photoshop, portfolio" />
    <meta name="twitter:card" content="gallery" />
    <meta name="twitter:creator" content="iriflorescu" />
    <meta name="twitter:domain" content={`www.${domain}`} />
    <meta name="twitter:title" content="InteriorDelight.RO Portfolio" />
    <meta name="twitter:description" content="See my portfolio of professional interior design, decoration, visualization, 3D modeling, rendering and post-processing." />
    {twitterImageIndexes.map(renderTwitterImage)}
    <meta property="og:site_name" content={domain} />
    <meta property="og:title" content="Portfolio" />
    <meta property="og:description" content="See my portfolio of professional interior design, decoration, visualization, 3D modeling, rendering and post-processing" />
    <meta property="og:type" content="article" />
    <meta property="og:author" content="100003892666191" />
    <meta property="og:publisher" content="215465541907600" />
  </Head>
);
