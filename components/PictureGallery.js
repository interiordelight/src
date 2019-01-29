import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash.throttle';

import PictureGalleryHeader from './PictureGalleryHeader';
import PictureGalleryFooter from './PictureGalleryFooter';
import PictureGallerySlide from './PictureGallerySlide';
import { gallery as galleryConfig } from '../config';

const { slideSpeed, wheelThrottle } = galleryConfig;

const ESC_KEY = 27;
const LEFT_KEY = 37;
const RIGHT_KEY = 39;

export default class PictureGallery extends Component {
  static propTypes = {
    projectSlug: PropTypes.string.isRequired,
    projectTitle: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    events: PropTypes.shape({
      on: PropTypes.func,
      removeListener: PropTypes.func
    }).isRequired
  };

  state = {
    isOpen: false,
    currentSlideSrc: ''
  };

  throttledPrevSlide = throttle(
    () => {
      this.slider.prev();
    },
    wheelThrottle,
    { trailing: false }
  );

  throttledNextSlide = throttle(
    () => {
      this.slider.next();
    },
    wheelThrottle,
    { trailing: false }
  );

  componentDidMount() {
    if (global.window) {
      this.sliderEl = document.querySelector('.js_slider');
      // eslint-disable-next-line global-require
      this.slider = require('lory.js').lory(this.sliderEl, { infinite: 1, slideSpeed });
      this.props.events.on('open', this.open);
      window.addEventListener('popstate', this.ensureClosed);
      document.addEventListener('keydown', this.onKeyDown);
      window.addEventListener('wheel', this.onWheel);
      this.sliderEl.addEventListener('after.lory.slide', this.onAfterSlide);
    }
  }

  componentWillUnmount() {
    if (global.window) {
      this.ensureClosed();
      this.props.events.removeListener('open', this.open);
      window.removeEventListener('popstate', this.ensureClosed);
      document.removeEventListener('keydown', this.onKeyDown);
      window.removeEventListener('wheel', this.onWheel);
      this.sliderEl.removeEventListener('after.lory.slide', this.onAfterSlide);
      this.slider.destroy();
    }
  }

  open = (src) => {
    document.querySelector('body').style.overflow = 'hidden';
    history.pushState(null, '');
    this.setState({ isOpen: true });
    this.slideTo(src);
  };

  ensureClosed = () => {
    document.querySelector('body').removeAttribute('style');
    this.setState({ isOpen: false });
  };

  onKeyDown = (e) => {
    if (this.state.isOpen) {
      const { keyCode } = e;
      if ([ESC_KEY, LEFT_KEY, RIGHT_KEY].indexOf(keyCode) !== -1) {
        const { slider } = this;
        if (keyCode === LEFT_KEY) {
          slider.prev();
        } else if (keyCode === RIGHT_KEY) {
          slider.next();
        } else {
          history.back();
        }
        e.preventDefault();
      }
    }
  };

  onWheel = (e) => {
    if (this.state.isOpen) {
      if (e.deltaY > 0) {
        this.throttledNextSlide();
      } else {
        this.throttledPrevSlide();
      }
      e.preventDefault();
    }
  };

  onAfterSlide = (e) => {
    this.setState({ currentSlideSrc: this.props.pictures[e.detail.currentSlide - 1] });
  };

  slideTo = (src) => {
    this.slider.slideTo(this.props.pictures.indexOf(src));
  };

  renderPicture = file => <PictureGallerySlide key={file} file={file} />;

  render() {
    const { projectSlug, projectTitle, pictures } = this.props;
    const { isOpen, currentSlideSrc } = this.state;
    return (
      <div className={classNames('container', { active: isOpen })}>
        <PictureGalleryHeader
          projectTitle={projectTitle}
          pictures={pictures}
          currentSlideSrc={currentSlideSrc}
          onDotClick={this.slideTo}
        />
        <div className="slider js_slider">
          <div className="frame js_frame">
            <ul className="slides js_slides">{pictures.map(this.renderPicture)}</ul>
          </div>
          <i className="icon icon-left js_prev" title="Next picture" />
          <i className="icon icon-right js_next" title="Previous picture" />
        </div>
        <PictureGalleryFooter
          projectSlug={projectSlug}
          projectTitle={projectTitle}
          pictures={pictures}
          currentSlideSrc={currentSlideSrc}
        />
        <style jsx>{`
          .container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            transform: translate3d(100%, 0, 0);
            transition: opacity 0.5s;
            background: rgba(black, 90%);

            &.active {
              transform: translate3d(0, 0, 0);
              opacity: 1;
            }
          }

          .icon {
            display: none;
            position: fixed;
            top: 50%;
            transform: translate3d(0, -50%, 0);
            z-index: 1;
            color: white;
            font-size: 48px;
            padding: 30px 6px;
            background: rgba(black, 24%);
            transition: opacity 0.5s;
            cursor: pointer;
            opacity: 0.5;

            &:hover {
              opacity: 1;
            }

            @media (min-width: 768px) {
              display: block;
            }
          }

          .icon-right {
            right: 0;
          }

          .frame {
            position: relative;
            font-size: 0;
            line-height: 0;
            overflow: hidden;
            white-space: nowrap;
          }

          .slides {
            display: inline-block;
          }
        `}</style>
      </div>
    );
  }
}
