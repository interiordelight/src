import React from 'react';

export const appName = 'InteriorDelight.ro';
export const brand = 'Interior Delight';
export const tagline = 'Interior design and visualization done right.';
export const domain = 'interiordelight.ro';
export const domainUrl = `http://www.${domain}`;

export const colors = {
  blue: '#00849b',
  lightGray: '#ccc',
  mediumGray: '#aaa',
  darkGray: '#777',
  text: '#333',
  greenText: '#18a133',
  redText: '#c91c1c',
  skype: '#00aff0',
  behance: '#1769ff',
  linkedin: '#0077b5',
  google: '#dd4b39',
  facebook: '#3b5998',
  twitter: '#1da1f2',
  pinterest: '#bd081c'
};

export const iconLinks = [
  <link
    key="shortcut-icon"
    rel="shortcut icon"
    type="image/x-icon"
    href="/static/icons/favicon.ico"
  />,
  ...([32, 16, 36, 48, 72, 96, 144, 192].map(size => (
    <link
      key={`icon-${size}`}
      rel="icon"
      type="image/png"
      href={`/static/icons/icon-${size}x${size}.png`}
    />
  ))),
  ...([57, 60, 72, 76, 114, 120, 144, 152, 180].map(size => (
    <link
      key={`apple-icon-${size}`}
      rel="apple-touch-icon"
      type="image/png"
      href={`/static/icons/icon-apple-${size}x${size}.png`}
    />
  )))
];

export const shareLinks = {
  facebook: {
    width: 600,
    height: 400,
    url: 'https://www.facebook.com/sharer/sharer.php'
  },
  twitter: {
    width: 600,
    height: 450,
    url: 'http://twitter.com/share'
  },
  google: {
    width: 500,
    height: 480,
    url: 'https://plus.google.com/share'
  },
  pinterest: {
    width: 766,
    height: 360,
    url: 'http://pinterest.com/pin/create/button/'
  },
  linkedin: {
    width: 620,
    height: 500,
    url: 'http://www.linkedin.com/shareArticle'
  }
};

export const gallery = {
  slideSpeed: 300,
  wheelThrottle: 300
};

export const projectRegexp = /^\/portfolio\/.+/;
