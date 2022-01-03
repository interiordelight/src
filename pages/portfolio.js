import CallToAction from '../components/CallToAction';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import PortfolioHead from '../components/PortfolioHead';
import ProjectCards from '../components/ProjectCards';
import Title from '../components/Title';
import { domainUrl } from '../config';
import projects from '../projects-json/index.json';

const projectListItemLdJson = ({ slug }, index) => ({
  '@type': 'ListItem',
  'position': index + 1,
  'url': `${domainUrl}/portfolio/${slug}/`,
});

export default () => (
  <Layout title="Portfolio" activeMenuItem="portfolio" showFooterBanners>
    <PortfolioHead />
    <Hero picture="interior-2" text="Art. Engineering. Economics.|Skilfully combined." />
    <Content>
      <Title text="Portfolio" />
      <ProjectCards projects={projects} />
      <CallToAction>
        <hr />
        <p>Need something done?</p>
      </CallToAction>
    </Content>
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'ItemList',
          'itemListElement': projects.map(projectListItemLdJson),
        }),
      }}
    />
  </Layout>
);
