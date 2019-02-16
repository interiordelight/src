import Head from 'next/head';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ContactLink from '../components/ContactLink';
import { domainUrl, colors } from '../config';

export default () => (
  <Layout title="Contact" activeMenuItem="contact" showFooterBanners>
    <Head>
      <meta
        name="description"
        // eslint-disable-next-line max-len
        content="Contact me if you're looking for professional interior design, decoration, visualization, 3D modeling, rendering and post-processing"
      />
      <meta
        name="keywords"
        content="interior design, 3d, modeling, rendering, post processing, rhino, vray, maxwell, photoshop, contact"
      />
      <meta property="og:title" content="Contact Irinel-Ramona Florescu, CG Artist and Architect" />
      <meta property="og:image" content={`${domainUrl}/static/images/irinel-ramona-florescu.jpg`} />
      <meta
        property="og:description"
        content="If you're looking for professional interior design and visualization, you're in the right place."
      />
      <meta property="og:type" content="profile" />
      <meta property="fb:profile_id" content="100003892666191" />
      <meta property="profile:first_name" content="Irinel-Ramona" />
      <meta property="profile:last_name" content="Florescu" />
      <meta property="profile:gender" content="female" />
    </Head>
    <Hero picture="map">
      <div className="container">
        <h3 className="title">Contact</h3>
        <p>Need something done? Let&apos;s talk!</p>
        <img className="picture" alt="Irinel-Ramona Florescu" src="/static/images/irinel-ramona-florescu.jpg" />
        <div className="subtitle">Irinel-Ramona Florescu</div>
        <p className="job">Founder, CG Artist & Architect</p>
        <hr className="separator" />
        <ContactLink
          type="email"
          href="mailto:irinel.florescu@gmail.com"
          title="Send me an email"
          detail="irinel.florescu@gmail.com"
        />
        <hr className="separator" />
        <ContactLink type="skype" href="skype:irinel.florescu?call" title="Call me on Skype" detail="irinel.florescu" />
        <hr className="separator" />
        <ContactLink type="behance" href="https://www.behance.net/iflorescu" title="Behance profile" />
        <ContactLink type="linkedin" href="https://linkedin.com/in/iriflorescu" title="LinkedIn profile" />
        <ContactLink
          type="facebook"
          href="https://www.facebook.com/interiordelight.cc"
          title="Official Facebook page"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'Person',
              'name': 'Irinel-Ramona Florescu',
              'url': domainUrl,
              'sameAs': [
                'https://www.behance.net/iflorescu',
                'https://www.facebook.com/interiordelight.cc',
                'https://linkedin.com/in/iriflorescu'
              ]
            })
          }}
        />
        <hr className="large separator" />
        <img className="picture" alt="Irinel-Ramona Florescu" src="/static/images/ionut-cristian-florescu.jpg" />
        <div className="subtitle">Ionut-Cristian Florescu</div>
        <p className="job">Co-Founder, Technical Support</p>
        <hr className="separator" />
        <ContactLink type="github" href="https://github.com/icflorescu" title="GitHub profile" />
        <ContactLink type="linkedin" href="https://linkedin.com/in/icflorescu" title="LinkedIn profile" />
        <ContactLink type="facebook" href="https://www.facebook.com/icflorescu" title="Facebook page" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'Person',
              'name': 'Ionut-Cristian Florescu',
              'url': domainUrl,
              'sameAs': [
                'https://github.com/icflorescu',
                'https://linkedin.com/in/icflorescu',
                'https://www.facebook.com/icflorescu'
              ]
            })
          }}
        />
      </div>
      <style jsx>
        {`
          .container {
            background: rgba(white, 75%);
            width: 90%;
            padding: 10px;
            margin: 50px auto;

            @media (min-width: 480px) {
              width: 420px;
            }

            @media (min-width: 768px) {
              width: 600px;
            }
          }

          .picture {
            border-radius: 50%;
          }

          .job {
            color: ${colors.blue};
            margin: 0 0 1em;
          }

          .separator {
            height: 1px;
            background: ${colors.lightGray};
            max-width: 75%;

            &.large {
              margin: 10px -10px 30px;
              max-width: initial;
            }
          }
        `}
      </style>
    </Hero>
  </Layout>
);
