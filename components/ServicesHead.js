import Head from 'next/head';
import { domainUrl } from '../config';

export default function ServicesHead() {
  return (
    <Head>
      <meta property="og:title" content="Services" />
      <meta property="og:image" content={`${domainUrl}/static/images/interiordelight-og-image.jpg`} />
    </Head>
  );
}
