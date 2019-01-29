import PropTypes from 'prop-types';

const PictureGallerySlide = ({ file }) => (
  <li className="container js_slide">
    <div
      className="pic"
      style={{
        backgroundImage: `url(/static/pics/o/${file})`
      }}
    />
    <style jsx>{`
      .container {
        position: relative;
        display: inline-block;
      }

      .pic {
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        background-origin: content-box;
      }
    `}</style>
  </li>
);

PictureGallerySlide.propTypes = {
  file: PropTypes.string.isRequired
};

export default PictureGallerySlide;
