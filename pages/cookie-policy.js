import Head from 'next/head';
import Content from '../components/Content';
import CookiePolicyHead from '../components/CookiePolicyHead';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { domain, domainUrl } from '../config';

const title = 'Cookie Policy';

export default () => (
  <Layout title={title}>
    <Head>
      <meta property="og:image" content={`${domainUrl}/static/images/interiordelight-og-image.jpg`} />
    </Head>
    <CookiePolicyHead />
    <Content>
      <Title text={title} />
      <p>
        Before using this site, you should read this Policy carefully, as well as our{' '}
        <a href="/terms-and-conditions">Terms and Conditions</a>.
      </p>

      <h4>Understanding how and why we use cookies</h4>
      <p>
        We use cookies on{' '}
        <a href="/" title={domain}>
          {domain}
        </a>{' '}
        to create the most effective website possible for our users. Among other things, the cookies we use allow us to
        improve your experience when using our website and to ensure the website performs as you expect it to.
      </p>
      <p>
        This cookie policy explains what cookies are, how we use them on{' '}
        <a href="/" title={domain}>
          {domain}
        </a>{' '}
        and what benefits they bring.
      </p>
      <p>
        The owners of the websites which are linked from this site may also use cookies to improve your experience and
        to ensure their websites performs as expected. Please bear in mind that our partners will have their own privacy
        and cookie policies that will govern their use of cookies.
      </p>

      <h4>Do cookies mean I could get cold calls or junk mail?</h4>
      <p>
        We never use the data gathered through cookies on this site to contact you via post, email or phone and we do
        not use cookies on this site to show you products and/or services advertising.
      </p>
      <p>
        Our partners&apos; websites, to which we provide links from this site, may use cookies to show you subtly
        tailored content of things they think you might be interested in. Their own site cookie policies should explain
        how they use cookies to show you tailored content.
      </p>

      <h4>Can cookies pass on my personal information to others?</h4>
      <p>We will not share any personal information gathered through cookies on this site with third parties.</p>
      <p>
        We do use &apos;analytics&apos; cookies on this site to help us make our website better for those who visit it
        regularly and in doing so we do share certain limited information with our third party &quot;analytics&quot;
        providers but none of that information can be traced to an individual.
      </p>

      <h4>What are cookies?</h4>
      <p>
        Cookies are small text files that are sent to and stored on your computer, smartphone or other device for
        accessing the Internet, whenever you visit a website. Cookies are useful because they allow a website to
        recognise a user&apos;s device. On this site, the cookies we use include &quot;analytics&quot; cookies, to
        analyse how users use this site and to help us make our website better for those who visit it regularly.
      </p>
      <p>
        Other websites may use cookies for a variety of other reasons including to determine preferences, let users
        navigate between pages efficiently, verify the user and carry out other essential security checks. Their own
        cookie policies should explain how they use cookies.
      </p>
      <p>
        Some of the functions that cookies perform can also be achieved using similar technologies. This policy refers
        to &quot;cookies&quot; throughout, however is to include these alternate mechanisms.
      </p>
      <p>
        More information about cookies can be found on{' '}
        <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
          allaboutcookies.org
        </a>
        .
      </p>

      <h4>How cookies make our website safer and easier to use</h4>
      <p>
        Cookies can be used for a variety of reasons, such as to improve the functionality and performance of this site
        and safeguard your privacy when browsing.
      </p>
      <p>
        We use &quot;analytics&quot; cookies on this site to help us make the site better for those who visit it
        regularly. They help us work out what users like and don&apos;t like and how we can improve things for you.
      </p>
      <p>
        When we include links to other websites, please bear in mind they will have their own privacy and cookie
        policies that will govern the use of any information you submit. We recommend you read their policies as{' '}
        <a href="/" title={domain}>
          {domain}
        </a>{' '}
        is not responsible or liable for their privacy practices.
      </p>

      <h4>How we work with trusted third parties</h4>
      <p>
        Third parties are trusted suppliers to{' '}
        <a href="/" title={domain}>
          {domain}
        </a>{' '}
        and include those partners who provide important functionality our website.
      </p>
      <p>We will not share any personal information gathered through cookies on this site with third parties.</p>

      <h4>How you can manage your cookies</h4>

      <p>
        The browsers of most computers, smartphones and other web-enabled devices are typically set up to accept
        cookies. If you wish to amend your cookie preferences for this site or any other websites, you can do this
        through your browser settings. Your browser&apos;s &quot;help&quot; function will tell you how to do this.
      </p>
      <p>
        However, please remember that cookies are often used to enable and improve certain functions on our site. If you
        choose to switch certain cookies off, it is likely to affect how our site works.
      </p>
      <p>
        For more information about how to disable cookies, visit{' '}
        <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
          allaboutcookies.org
        </a>
        .
      </p>

      <h4>More about your privacy</h4>

      <p>
        To find out more about how{' '}
        <a href="/" title={domain}>
          {domain}
        </a>{' '}
        protects your privacy when using our website, see our website{' '}
        <a href="/terms-and-conditions">Terms and Conditions</a>.
      </p>
    </Content>
  </Layout>
);
