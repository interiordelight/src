import PropTypes from 'prop-types';

import Cards from './Cards';
import ProjectCard from './ProjectCard';

const renderProjectCard = project => <ProjectCard key={project.index} {...project} />;

const ProjectCards = ({ projects }) => <Cards>{projects.map(renderProjectCard)}</Cards>;

ProjectCards.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number
    })
  ).isRequired
};

export default ProjectCards;
