import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProjectContent extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    galleryEvents: PropTypes.shape({ emit: PropTypes.func }).isRequired
  }

  componentDidMount() {
    this.contentEl.addEventListener('click', this.onContentClick);
  }

  componentWillUnmount() {
    this.contentEl.removeEventListener('click', this.onContentClick);
  }

  onContentClick = (e) => {
    const { target } = e;
    if (target.matches('[data-gallery-item-src]')) {
      this.props.galleryEvents.emit('open', target.attributes['data-gallery-item-src'].nodeValue);
    }
  }

  contentRef = (el) => {
    this.contentEl = el;
  }

  render() {
    const { body } = this.props;
    return (
      <div>
        <div
          className="content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: body }}
          ref={this.contentRef}
        />
        <style jsx>{`
          .content :global(.pics) {
            margin: 0 -10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .content :global(.pic) {
            flex: 0 0 auto;
            width: 50%;
            box-sizing: border-box;
            padding: 10px;
          }

          .content :global(.image) {
            display: block;
            width: 100%;
            cursor: pointer;
          }

          .content :global(.image:hover) {
            box-shadow: 0 1px 3px rgba(0, 0, 0, .66);
          }

          @media (min-width: 768px) {
            .content :global(.pic) {
              width: 25%;
            }
          }

          // quite improbable
          @media (max-width: 350px) {
            .content :global(.pic) {
              width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
}
