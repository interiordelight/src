import Head from 'next/head';
import { domainUrl } from '../config';

export default function TermsAndConditionsHead() {
  return (
    <Head>
      <meta
        name="description"
        // eslint-disable-next-line max-len
        content="I'm doing professional interior design, decoration, visualization, 3D modeling, rendering and post-processing and these are my website terms and conditions."
      />
      <meta
        name="keywords"
        // eslint-disable-next-line max-len
        content="interior design, 3d, modeling, rendering, post processing, rhino, vray, maxwell, photoshop, terms, conditions"
      />
      <meta property="og:image" content={`${domainUrl}/static/images/interiordelight-og-image.jpg`} />
    </Head>
  );
}
