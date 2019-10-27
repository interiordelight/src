import css from 'styled-jsx/css';

export default css.global`
  @font-face {
    font-family: 'icons';
    src: url('/static/fonts/icons.ttf') format('truetype'), url('/static/fonts/icons.woff') format('woff'),
      url('/static/fonts/icons.svg#icons') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class^='icon-'],
  [class*=' icon-'] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icons' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-home:before {
    content: '\e900';
  }
  .icon-info:before {
    content: '\e901';
  }
  .icon-image:before {
    content: '\e902';
  }
  .icon-talk:before {
    content: '\e903';
  }
  .icon-left:before {
    content: '\e904';
  }
  .icon-right:before {
    content: '\e905';
  }
  .icon-close:before {
    content: '\e906';
  }
  .icon-facebook:before {
    content: '\e907';
  }
  .icon-twitter:before {
    content: '\e908';
  }
  .icon-google:before {
    content: '\e909';
  }
  .icon-behance:before {
    content: '\e90a';
  }
  .icon-pinterest:before {
    content: '\e90b';
  }
  .icon-linkedin:before {
    content: '\e90c';
  }
  .icon-email:before {
    content: '\e90d';
  }
  .icon-skype:before {
    content: '\e90e';
  }
  .icon-github:before {
    content: '\e90f';
  }
`;
