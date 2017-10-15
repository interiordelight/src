import React from 'react';

import { appName, domainUrl } from '../config';

export default () => (
  <a
    href="https://plus.google.com/+IrinelRamonaFlorescu?rel=author"
    rel="publisher noopener noreferrer"
    target="_blank"
    title="See Google+ Profile"
  >
    <span itemScope itemProp="author" itemType="http://schema.org/Person">
      <span itemProp="name">Irinel-Ramona Florescu</span>
    </span>
    <span itemProp="publisher" itemScope itemType="http://schema.org/Organization">
      <meta itemProp="name" content={appName} />
      <span itemProp="logo" itemScope itemType="http://schema.org/ImageObject">
        <meta
          itemProp="url"
          content={`${domainUrl}/static/images/interior-delight-logo.png`}
        />
      </span>
    </span>
  </a>
);
