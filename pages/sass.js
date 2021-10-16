import React, { useState } from 'react';

const Sass = require('sass.js/dist/sass.sync.js');

export const config = { amp: false };

export default () => {
  const [css, setCss] = useState('');

  const onclick = () => {
    const _css = `
      div {
        background-color: #fff;

        div {
          color: #f00;
        }
      }
    `;
    Sass.compile(_css, ({ text }) => {
      setCss(text)
    });
  }

  return (
    <div>
      <button onClick={onclick}>css</button>
      <pre>
        {css}
      </pre>
    </div>
  )
}

