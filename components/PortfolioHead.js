import Head from 'next/head';
import { domain } from '../config';

export default () => (
  <Head>
    <meta
      name="description"
      // eslint-disable-next-line max-len
      content="See my portfolio of professional interior design, decoration, visualization, 3D modeling, rendering and post-processing"
    />
    <meta
      name="keywords"
      content="interior design, 3d, modeling, rendering, post processing, rhino, vray, maxwell, photoshop, portfolio"
    />
    <meta property="og:site_name" content={domain} />
    <meta property="og:title" content="Portfolio" />
    <meta
      property="og:description"
      // eslint-disable-next-line max-len
      content="See my portfolio of professional interior design, decoration, visualization, 3D modeling, rendering and post-processing"
    />
    <meta property="og:type" content="article" />
    <meta property="og:image" content={`${domainUrl}/static/images/interiordelight-og-image.jpg`} />
  </Head>
);
