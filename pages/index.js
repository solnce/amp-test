import React from "react";

export const config = { amp: true };

const Index = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
    <amp-list width="auto" height="1000" layout="fixed-height" src="/api/hello">
      <template type="amp-mustache">
        {{{body}}}
      </template>
    </amp-list>

    `,
    }}
  />
);

export default Index;
