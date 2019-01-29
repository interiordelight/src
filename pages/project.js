// TODO: add itemProp dates!!!...

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sampleSize from 'lodash.samplesize';
import EventEmitter from 'eventemitter3';

import prune from 'underscore.string/prune';

import Layout from '../components/Layout';
import ProjectHead from '../components/ProjectHead';
import Content from '../components/Content';
import ProjectHeader from '../components/ProjectHeader';
import Title from '../components/Title';
import ProjectShareLinks from '../components/ProjectShareLinks';
import ProjectCover from '../components/ProjectCover';
import ProjectContent from '../components/ProjectContent';
import ProjectPublisher from '../components/ProjectPublisher';
import CallToAction from '../components/CallToAction';
import PictureGallery from '../components/PictureGallery';
import ProjectCards from '../components/ProjectCards';
import projects from '../projects-json/index.json';
import { domainUrl, colors } from '../config';

const randomKey = () => `${Date.now()}${Math.random()}`;

class Project extends Component {
  static propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    otherProjects: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
        color: PropTypes.string
      })
    ).isRequired,
    prevProject: PropTypes.shape(),
    nextProject: PropTypes.shape()
  };

  static defaultProps = {
    prevProject: null,
    nextProject: null
  };

  static getInitialProps({ query: { slug } }) {
    const projectSummary = projects.find(({ slug: projectSlug }) => projectSlug === slug);
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const projectData = require(`../projects-json/${slug}.json`);
    // randomly pick 4 other projects
    const otherProjects = sampleSize(projects.filter(p => p.index !== projectSummary.index), 4);
    return { ...projectSummary, ...projectData, otherProjects };
  }

  galleryEvents = new EventEmitter();

  render() {
    const { slug, title, color, description, body, gallery, otherProjects, prevProject, nextProject } = this.props;
    return (
      <Layout title={title} activeMenuItem="portfolio">
        <ProjectHead slug={slug} title={title} description={description} otherProjects={otherProjects} />
        <Content>
          <ProjectHeader
            title={title}
            color={color}
            description={description}
            prevProject={prevProject}
            nextProject={nextProject}
          />
          <meta itemProp="headline" content={prune(description, 110, '…')} />
          <div className="description">{description}</div>
          <meta itemProp="mainEntityOfPage" content={`${domainUrl}/portfolio/`} />
          <ProjectShareLinks
            url={`${domainUrl}/portfolio/${slug}/`}
            title={title}
            absoluteCoverUrl={`${domainUrl}/static/pics/o/${slug}-cover.jpg`}
            description={description}
          />
          <ProjectCover
            // cover needs to be always unmounted and remounted
            key={randomKey()}
            slug={slug}
            title={title}
          />
          <ProjectContent body={body} galleryEvents={this.galleryEvents} />
          <div className="author">
            - by
            {' '}
            <ProjectPublisher />
            {' '}
-
          </div>
          <CallToAction>
            <hr style={{ background: `#${color}` }} />
            <p>Want something like this?</p>
          </CallToAction>
          <PictureGallery
            // gallery needs to be always unmounted and remounted
            key={randomKey()}
            projectSlug={slug}
            projectTitle={title}
            pictures={gallery}
            events={this.galleryEvents}
          />
        </Content>
        <Content backgroundColor={colors.mediumGray}>
          <Title text="See other projects" textColor="white" underlineColor="white" />
          <ProjectCards projects={otherProjects} />
        </Content>
        <style jsx>
          {`
            .description {
              margin: 0.5em 0;
              color: ${colors.darkGray};
              text-align: center;
              font-size: 16px;

              @media (min-width: 768px) {
                font-size: 20px;
              }
            }

            .author {
              margin: 1em;
              text-align: center;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Project;
