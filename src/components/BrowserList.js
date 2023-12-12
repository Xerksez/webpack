// BrowserList.js

import React from 'react';
import browsersData from '../data/browsers.json';

const BrowserList = () => {
  return (
    <section>
      {browsersData.map((browser) => (
        <article key={browser.name}>
          <h2>{browser.name}</h2>
          <img src={browser.logo} alt={`${browser.name} Logo`} style={{ width: '100px', height: '100px' }} />
          <p>{browser.description}</p>
        </article>
      ))}
    </section>
  );
};

export default BrowserList;
