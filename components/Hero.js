import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hero extends Component {
  static propTypes = {
    picture: PropTypes.string.isRequired,
    text: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    text: null,
    children: null
  };

  componentDidMount() {
    this.elBottom = this.el.getBoundingClientRect().bottom;
    window.addEventListener('scroll', this.onWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  onWindowScroll = () => {
    const cssPosPercent = (1 - Math.min(1, window.scrollY / this.elBottom)) * 100;
    this.backgroundPositionY = `${cssPosPercent}%`;
    this.forceUpdate();
  };

  setRef = (el) => {
    this.el = el;
  };

  render() {
    const { picture, text, children } = this.props;
    return (
      <div
        className="container"
        style={{
          backgroundImage: `url('/static/images/${picture}.jpg')`,
          backgroundPositionY: this.backgroundPositionY || '100%'
        }}
        ref={this.setRef}
      >
        {children || (
          <div
            className="text"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: text.split('|').join('<br />') }}
          />
        )}
        <style jsx>{`
          .container {
            text-align: center;
            padding: 10px 0;
            background: center 100% / cover no-repeat;
          }

          .text {
            font: 24px/1.65 'Poiret One', sans-serif;
            color: white;
            background: rgba(black, 30%);
            text-shadow: 0 0 1px black, 0 2px 6px black;
            text-transform: uppercase;
            display: inline-block;
            padding: 0 20px;
            margin: 25px auto;
            max-width: 75%;
            animation: hero-text 8s 2s infinite;

            @media (min-width: 480px) {
              font-size: 36px;
              margin: 50px auto;
            }

            @media (min-width: 1000px) {
              font-size: 52px;
              margin: 100px auto;
            }
          }

          @keyframes hero-text {
            0% {
              transform: scale3d(1, 1, 1);
            }
            2% {
              transform: scale3d(1.1, 1.1, 1);
            }
            4% {
              transform: scale3d(1, 1, 1);
            }
            6% {
              transform: scale3d(1.1, 1.1, 1);
            }
            8% {
              transform: scale3d(1, 1, 1);
            }
          }
        `}</style>
      </div>
    );
  }
}
