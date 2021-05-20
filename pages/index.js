import React from "react";

export const config = { amp: true };

const Index = () => (
  <div>
    <div>
      <select on="change:myTabs.toggle(index=event.value, value=true)">
        <option value="0">Select tab 1</option>
        <option value="1">Select tab 2</option>
      </select>

      <amp-selector
        id="myTabs"
        class="tabs-with-flex"
        role="tablist"
        keyboard-select-mode="focus"
      >
        <div
          id="sample2-tabpanel1"
          role="tabpanel"
          aria-labelledby="sample2-tab1"
          option="0"
          selected
        >
          Tab one content...{" "}
        </div>
        <div
          id="sample2-tabpanel2"
          role="tabpanel"
          aria-labelledby="sample2-tab2"
          option="1"
        >
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
        </div>
        <style jsx>
          {`
            [role="tabpanel"] {
              display: none;
            }
            [role="tabpanel"][selected] {
              display: block;
            }
          `}
        </style>
      </amp-selector>
    </div>
  </div>
);

export default Index;
