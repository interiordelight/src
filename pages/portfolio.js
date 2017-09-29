import React from 'react';

import Layout from '../components/Layout';
import PortfolioHead from '../components/PortfolioHead';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Title from '../components/Title';
import ProjectCards from '../components/ProjectCards';
import CallToAction from '../components/CallToAction';
import projects from '../projects-json/index.json';

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
  </Layout>
);
