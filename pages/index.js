import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Title from '../components/Title';
import ProjectCards from '../components/ProjectCards';
import CallToAction from '../components/CallToAction';
import { domainUrl } from '../config';
import projects from '../projects-json/index.json';

const featuredProjects = projects.slice(0, 4);

export default () => (
  <Layout title="Interior design and visualization done right" activeMenuItem="home" showFooterBanners>
    <Hero picture="coffee" text="See. Feel. Use. Enjoy.|Equally Important." />
    <Content>
      <Title text="Featured projects" />
      <ProjectCards projects={featuredProjects} />
      <p>Have a look at the <a href="/portfolio" title="Some of the things I did">portfolio</a> section to see more.</p>
      <Title text="What I do" />
      <p>Based on <a href="https://www.behance.net/iflorescu" title="See my Behance profile" target="_blank" rel="noopener noreferrer">my experience</a> and a network of highly-skilled professional partners, I'm offering top-quality interior design, 3D modeling & visualization, furniture design and digital graphics & web development <a href="/services" title="See what can I do">services</a>. Check out the <a href="/portfolio" title="See what I did">portfolio</a> section to see some samples of my work.</p>
      <Title text="My philosophy" />
      <p>My never-ending mission is to discover the beauty and consequence of developing and improving the quality of the interior space in a world in which artificial environment has become the background of most our living. Interior design gives me the tools and opportunity to create something new out of old, to correct mistakes, to change, adapt and improve interior space to best answer our needs for living, learning, working and relaxing.</p>
      <p>Successful interior design is about much more than just precious materials and beautiful, creative designer furniture. It is about achieving balance through proper negotiation between form and function, aesthetic and pragmatic, desire and possibility, wanting and affording, fantasy and reality. A good and constructive collaboration between designer and client is essential to the success of the design. On one hand, the designer must acquire a good understanding of the client’s needs, expectations, personality and background, on the other the client must be aware of his expectations versus his resources and work with the designer to negotiate the best solution.</p>
      <p>Just like architecture in general, good interior design is the right mix of art, engineering and economics, skillfully combined to create a beautiful, harmonious space that successfully addresses its function.</p>
      <CallToAction>
        <p>Need something done?</p>
      </CallToAction>
    </Content>
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'Organization',
        url: domainUrl,
        logo: `${domainUrl}/static/images/interior-delight-logo.png`
      }) }}
    />
  </Layout>
);
