import PropTypes from 'prop-types';
import Cards from './Cards';
import ProjectCard from './ProjectCard';

// eslint-disable-next-line react/jsx-props-no-spreading
const renderProjectCard = (project) => <ProjectCard key={project.index} {...project} />;

function ProjectCards({ projects }) {
  return <Cards>{projects.map(renderProjectCard)}</Cards>;
}

ProjectCards.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
    })
  ).isRequired,
};

export default ProjectCards;
