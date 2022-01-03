import PropTypes from 'prop-types';
import ProjectHeaderLink from './ProjectHeaderLink';
import Title from './Title';

const ProjectHeader = ({ title, color, description, prevProject, nextProject }) => (
  <div className="container">
    <div className="link-container">
      <ProjectHeaderLink type="prev" project={prevProject} />
    </div>
    <div className="title">
      <Title text={title} description={description} underlineColor={`#${color}`} itemProp="name" />
    </div>
    <div className="link-container">
      <ProjectHeaderLink type="next" project={nextProject} />
    </div>
    <style jsx>{`
      .container {
        display: flex;
        align-items: center;
      }

      .title {
        flex: 1 1 auto;
      }

      .link-container {
        width: 48px;
      }
    `}</style>
  </div>
);

ProjectHeader.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  prevProject: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
  }),
  nextProject: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
  }),
};

ProjectHeader.defaultProps = {
  prevProject: null,
  nextProject: null,
};

export default ProjectHeader;
