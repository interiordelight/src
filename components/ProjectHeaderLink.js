import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { colors } from '../config';

export default class ProjectHeaderLink extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['prev', 'next']).isRequired,
    project: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  };

  static defaultProps = {
    project: null,
  };

  state = { hover: false };

  onMouseEnter = () => {
    this.setState({ hover: true });
  };

  onMouseLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    const { type, project } = this.props;

    if (!project) {
      return null;
    }

    const { slug, title } = project;
    const { hover } = this.state;

    return (
      <Link href={`/project?slug=${slug}`} as={`/portfolio/${slug}`}>
        <a
          className={classNames('link', { hover })}
          title={`See a newer project: «${title}»`}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <i
            className={classNames('icon', {
              'icon-left': type === 'prev',
              'icon-right': type === 'next',
            })}
          />
          <style jsx>{`
            .link {
              display: inline-block;
              color: ${colors.blue};
              height: 24px;
              padding: 10px;
              border: 2px solid ${colors.blue};
              border-radius: 50%;
              text-decoration: none;
              transition: color 0.2s, background 0.2s;

              &.hover {
                color: white;
                background: ${colors.blue};
              }
            }

            .icon {
              font-size: 24px;
            }
          `}</style>
        </a>
      </Link>
    );
  }
}
