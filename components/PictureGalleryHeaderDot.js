import { Component } from 'react';
import PropTypes from 'prop-types';

export default class PictureGalleryHeaderDot extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    currentSlideSrc: PropTypes.string.isRequired,
    onDotClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onDotClick(this.props.src);
  };

  render() {
    const { src, currentSlideSrc } = this.props;
    const isCurrent = src === currentSlideSrc;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        className="dot"
        style={{
          backgroundColor: isCurrent ? 'white' : null,
          cursor: isCurrent ? 'default' : 'pointer'
        }}
        onClick={isCurrent ? null : this.onClick}
      >
        <style jsx>{`
          .dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            border: 2px solid white;
            border-radius: 50%;
            margin: 4px 4px 0 0;

            @media (min-width: 768px) {
              width: 8px;
              height: 8px;
              margin: 6px 6px 0 0;
            }

            @media (min-width: 1000px) {
              width: 10px;
              height: 10px;
              margin: 8px 8px 0 0;
            }
          }
        `}</style>
      </div>
    );
  }
}
