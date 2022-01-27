import Head from 'next/head';
import { domainUrl } from '../config';

export default function CookiePolicyHead() {
  return (
    <Head>
      <meta
        name="description"
        // eslint-disable-next-line max-len
        content="I'm doing professional interior design, decoration, visualization, 3D modeling, rendering and post-processing and this is my website cookie policy."
      />
      <meta
        name="keywords"
        content="interior design, 3d, modeling, rendering, post processing, rhino, vray, maxwell, photoshop, cookies"
      />
      <meta property="og:image" content={`${domainUrl}/static/images/interiordelight-og-image.jpg`} />
    </Head>
  );
}
