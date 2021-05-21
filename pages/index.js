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
        <style jsx global>
          {`
            @font-face {
              font-family: icon;
              src: url(http://localhost:3000/icon.ttf?r5m4zg=)
                  format("truetype"),
                url(http://localhost:3000/icon.woff?r5m4zg=)
                  format("woff"),
                url(http://localhost:3000/icon.svg?r5m4zg=#icon)
                  format("svg");
              font-weight: 400;
              font-style: normal;
              font-display: block;
            }
            [class*=" icon-"],
            [class^="icon-"] {
              font-family: icon;
              speak: never;
              font-style: normal;
              font-weight: 400;
              font-variant: normal;
              text-transform: none;
              line-height: 1;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            [role="tabpanel"] {
              display: none;
            }
            [role="tabpanel"][selected] {
              display: block;
            }
            h1 {
              color: red;
            }
            .article__quote,
            .article__quote--cosme {
              position: relative;
              margin: 30px 0 30px 67px;
              border: 1px solid #ccc;
              border-radius: 5px;
              padding: 10px;
              line-height: 1.8;
            }
            .article__quote--cosme:before,
            .article__quote:before {
              content: "";
              border: 7px solid transparent;
              border-right: 10px solid #ccc;
              position: absolute;
              left: -17px;
              top: 22px;
            }
            .article__quote-icon {
              position: absolute;
              left: -60px;
              font-size: 44px;
              color: #aaa;
              top: 10px;
              line-height: 0;
            }
            [class*=" icon-"],
            [class^="icon-"] {
              font-family: icon;
              speak: never;
              font-style: normal;
              font-weight: 400;
              font-variant: normal;
              text-transform: none;
              line-height: 1;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .icon-woman:before {
              content: "\e963";
            }
            .article__quote--cosme:after,
            .article__quote:after {
              content: "";
              border: 7px solid transparent;
              border-right: 10px solid #fff;
              position: absolute;
              left: -15px;
              top: 22px;
            }
          `}
        </style>
      </amp-selector>
    </div>
  </div>
);

export default Index;
