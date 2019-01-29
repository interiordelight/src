import PropTypes from 'prop-types';

import PictureGalleryHeaderDot from './PictureGalleryHeaderDot';

const renderDot = (currentSlideSrc, onDotClick) => file => (
  <PictureGalleryHeaderDot key={file} src={file} currentSlideSrc={currentSlideSrc} onDotClick={onDotClick} />
);

const onCloseClick = () => history.back();

const PictureGalleryHeader = ({ projectTitle, pictures, currentSlideSrc, onDotClick }) => (
  <div className="container">
    <div className="title">
      <div className="text">{projectTitle}</div>
      <div className="dots">{pictures.map(renderDot(currentSlideSrc, onDotClick))}</div>
    </div>
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
    <i className="icon icon-close" role="button" tabIndex="0" onClick={onCloseClick} />
    <style jsx>{`
      .container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 16px;
        z-index: 1;
        color: white;
        background: linear-gradient(to bottom, rgba(black, 50%), transparent);
        transition: opacity 0.5s;
        display: flex;
        align-items: flex-start;
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
      }

      .title {
        text-shadow: 0 0 2px black;
        flex: 1 1 100%;
        padding-right: 10px;
      }

      .text {
        font: 20px 'Poiret One', sans-serif;
        text-transform: uppercase;
        border-bottom: 2px solid white;
      }

      .dots {
        line-height: 0;
      }

      .icon-close {
        font-size: 24px;
        padding: 10px;
        border: 2px solid white;
        border-radius: 50%;
        cursor: pointer;
      }

      @media (min-width: 768px) {
        .title {
          padding-right: 30px;
        }

        .text {
          font-size: 24px;
          padding-bottom: 4px;
        }
      }

      @media (min-width: 1000px) {
        .text {
          font-size: 36px;
        }
      }
    `}</style>
  </div>
);

PictureGalleryHeader.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSlideSrc: PropTypes.string.isRequired,
  onDotClick: PropTypes.func.isRequired
};

export default PictureGalleryHeader;
