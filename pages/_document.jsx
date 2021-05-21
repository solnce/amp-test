/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class commonDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            custom-element="amp-analytics"
            src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
          />
        </Head>
        <body>
          <amp-analytics
            config={`https://www.googletagmanager.com/amp.json?id=GTM-M9L7ZJB&gtm.url=SOURCE_URL`}
            data-credentials="include"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
