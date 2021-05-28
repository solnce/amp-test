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
        role="tablist"
      >
        <div
          role="tabpanel"
          option="0"
          selected
        >
          <div>
            hogehoge

            <img src="" alt="" />

          </div>
        </div>
        <div
          role="tabpanel"
          option="hoge"
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
            a,
            abbr,
            acronym,
            address,
            applet,
            article,
            aside,
            audio,
            b,
            big,
            blockquote,
            body,
            canvas,
            caption,
            center,
            cite,
            code,
            dd,
            del,
            details,
            dfn,
            div,
            dl,
            dt,
            em,
            embed,
            fieldset,
            figcaption,
            figure,
            footer,
            form,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            header,
            hgroup,
            html,
            i,
            iframe,
            img,
            ins,
            kbd,
            label,
            legend,
            li,
            mark,
            menu,
            nav,
            object,
            ol,
            output,
            p,
            pre,
            q,
            ruby,
            s,
            samp,
            section,
            small,
            span,
            strike,
            strong,
            sub,
            summary,
            sup,
            table,
            tbody,
            td,
            tfoot,
            th,
            thead,
            time,
            tr,
            tt,
            u,
            ul,
            var,
            video {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
            }
            article,
            aside,
            details,
            figcaption,
            figure,
            footer,
            header,
            hgroup,
            menu,
            nav,
            section {
              display: block;
            }
            body {
              line-height: 1;
            }
            ol,
            ul {
              list-style: none;
            }
            blockquote,
            q {
              quotes: none;
            }
            blockquote:after,
            blockquote:before,
            q:after,
            q:before {
              content: "";
              content: none;
            }
            table {
              border-collapse: collapse;
              border-spacing: 0;
            }
            * {
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
            }
            .button--blue,
            .button--dark-green,
            .button--dark-yellow,
            .button--green,
            .button--light-blue,
            .button--orange,
            .button--pink,
            .button--purple,
            .button--red,
            .button--white,
            .button--yellow {
              border: solid #ccc;
              border-width: 1px 1px 5px;
              border-radius: 5px;
              color: #333;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 14px;
              line-height: 1.4;
              font-weight: 700;
              padding: 15px 5px;
              text-align: center;
              cursor: pointer;
              transition: 0.2s linear;
            }
            .button--blue:hover,
            .button--dark-green:hover,
            .button--dark-yellow:hover,
            .button--green:hover,
            .button--light-blue:hover,
            .button--orange:hover,
            .button--pink:hover,
            .button--purple:hover,
            .button--red:hover,
            .button--white:hover,
            .button--yellow:hover {
              text-decoration: none;
            }
            .button--white {
              background: -owg-linear-gradient(#fff, #f2f2f2);
              background: -webkit-linear-gradient(#fff, #f2f2f2);
              background: -moz-linear-gradient(#fff, #f2f2f2);
              background: -o-linear-gradient(#fff, #f2f2f2);
              background: linear-gradient(#fff, #f2f2f2);
            }
            .button--white:hover {
              background: -owg-linear-gradient(#f2f2f2, #e5e5e5);
              background: -webkit-linear-gradient(#f2f2f2, #e5e5e5);
              background: -moz-linear-gradient(#f2f2f2, #e5e5e5);
              background: -o-linear-gradient(#f2f2f2, #e5e5e5);
              background: linear-gradient(#f2f2f2, #e5e5e5);
            }
            .button--orange {
              background-color: #f90;
              border-color: #cc7a00;
              color: #fff;
            }
            .button--orange:hover {
              background-color: #ffad33;
            }
            .button--green {
              background-color: #7ebf41;
              border-color: #5c8c30;
              color: #fff;
            }
            .button--green:hover {
              background-color: #92bf67;
            }
            .button--red {
              background-color: #f9344c;
              border-color: #c72a3c;
              color: #fff;
            }
            .button--red:hover {
              background-color: #fa6678;
            }
            .button--blue {
              background-color: #2a5194;
              border-color: #1b3561;
              color: #fff;
            }
            .button--blue:hover {
              background-color: #476394;
            }
            .button--light-blue {
              background-color: #549ab3;
              border-color: #3c6d80;
              color: #fff;
            }
            .button--light-blue:hover {
              background-color: #78a3b3;
            }
            .button--dark-green {
              background-color: #2d9149;
              border-color: #1d5e30;
              color: #fff;
            }
            .button--dark-green:hover {
              background-color: #4a915e;
            }
            .button--yellow {
              background-color: #f2e832;
              border-color: #bfb828;
              color: #fff;
            }
            .button--yellow:hover {
              background-color: #f2eb63;
            }
            .button--purple {
              background-color: #c33279;
              border-color: #8f2558;
              color: #fff;
            }
            .button--purple:hover {
              background-color: #c2598c;
            }
            .button--pink {
              background-color: #ffa0a7;
              border-color: #cc8186;
              color: #fff;
            }
            .button--pink:hover {
              background-color: #ffd4d7;
            }
            .button--dark-yellow {
              background-color: #efbb40;
              border-color: #bd9333;
              color: #fff;
            }
            .button--dark-yellow:hover {
              background-color: #f0ca71;
            }
            * {
              box-sizing: border-box;
            }
            a {
              color: #4381bf;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            body {
              font: 14px Hiragino Kaku Gothic Pro, ヒラギノ角ゴ Pro W3, Meiryo,
                メイリオ, Osaka, MS PGothic, arial, helvetica, sans-serif;
              line-height: 1.6em;
              color: #333;
              -webkit-text-size-adjust: 100%;
            }
            img {
              object-fit: cover;
            }
            small {
              color: #aaa;
              font-size: 13px;
            }
            select {
              -webkit-appearance: none;
              background: #fff
                url(https://www.travelbook.co.jp/assets/common/parts/img/select-arrow.png)
                no-repeat 100%;
              padding-right: 20px;
            }
            [type="text"],
            select {
              -webkit-border-radius: 0;
              -moz-border-radius: 0;
              border-radius: 0;
              border: 1px solid #ccc;
              box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
              transition: border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;
              color: #555;
            }
            [type="submit"],
            [type="text"],
            select {
              font-family: Arial, sans-serif;
              font-size: 13px;
              height: 44px;
              line-height: 1.42857143;
              padding: 10px 12px;
            }
            [type="submit"] {
              -webkit-appearance: none;
              border: 1px solid #aaa;
              background: #aaa;
              color: #fff;
              margin: 0;
            }
            [type="button"] {
              background-color: none;
              border: 0;
              color: inherit;
              font: inherit;
              line-height: normal;
              overflow: visible;
              padding: 0;
              -webkit-appearance: button;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
            }
            amp-lightbox {
              background-color: rgba(0, 0, 0, 0.5);
              z-index: 10000;
            }
            amp-lightbox .DayPicker__withBorder {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            amp-accordion [expanded] .info-hotel__more,
            amp-accordion [expanded] .topic-hotel-list__more,
            amp-accordion [expanded] .topic-index__button {
              height: 0;
              padding: 0;
              border: none;
              opacity: 0;
            }
            .main-footer {
              background: #333;
              padding: 40px 0 20px;
              text-align: center;
              color: #ccc;
              line-height: 1.2;
            }
            .main-footer li {
              display: inline-block;
              padding: 0 10px;
              margin-bottom: 0.4em;
            }
            .main-footer li + .main-footer li {
              border-left: 1px solid #ccc;
            }
            .main-footer i {
              font-size: 29px;
            }
            .main-footer a {
              color: #ccc;
              text-decoration: none;
            }
            .main-footer .copy {
              border-top: 1px solid #ccc;
              margin-top: 20px;
              padding-top: 20px;
              color: #ccc;
            }
            .footer-title {
              color: #7ebf41;
              margin-top: 0;
              margin-bottom: 0.6em;
              font-size: 14px;
              font-weight: 700;
            }
            .footer-title a {
              color: #7ebf41;
            }
            .sidebar__link {
              text-decoration: none;
            }
            .main-header {
              z-index: 100;
              padding-top: 82px;
            }
            .main-header__content {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 1000;
            }
            .main-header__left,
            .main-header__right {
              min-height: 46px;
            }
            .main-header__left .icon-text,
            .main-header__right .icon-text {
              width: 100%;
              height: 100%;
            }
            .main-header__bottom {
              height: 36px;
            }
            .brand {
              display: inline-block;
              vertical-align: bottom;
              padding: 11px 0;
            }
            .brand img {
              height: 22px;
              display: block;
            }
            .icon-text {
              display: inline-block;
              padding: 0;
              background-color: #fff;
              border: none;
            }
            .icon-text__content {
              text-align: center;
              line-height: 1;
              padding: 6px 0;
              display: block;
              height: 100%;
              position: relative;
              text-decoration: none;
            }
            .icon-text__image {
              color: #aaa;
              font-size: 24px;
            }
            .icon-text__text {
              display: block;
              font-size: 8px;
              color: #aaa;
              white-space: nowrap;
            }
            .container {
              margin-left: 10px;
              margin-right: 10px;
            }
            .span1 {
              width: 6.5%;
            }
            .span2 {
              width: 15%;
            }
            .span3 {
              width: 23.5%;
            }
            .span4 {
              width: 32%;
            }
            .span5 {
              width: 40.5%;
            }
            .span6 {
              width: 49%;
            }
            .span7 {
              width: 57.5%;
            }
            .span8 {
              width: 66%;
            }
            .span9 {
              width: 74.5%;
            }
            .span10 {
              width: 83%;
            }
            .span11 {
              width: 91.5%;
            }
            .span12 {
              width: 100%;
            }
            .remove-container {
              margin-left: -10px;
              margin-right: -10px;
            }
            .l-horizon {
              display: table;
              width: 100%;
            }
            .l-horizon__item {
              display: table-cell;
            }
            .l-horizon__item-middle {
              display: table-cell;
              vertical-align: middle;
            }
            .l-horizon__item-top {
              display: table-cell;
              vertical-align: top;
            }
            @media screen and (min-width: 560px) {
              .container {
                width: 1068px;
                max-width: 1068px;
                min-width: 1068px;
                margin-left: auto;
                margin-right: auto;
                padding-left: 10px;
                padding-right: 10px;
              }
              .col-aside {
                width: 300px;
                margin-left: 20px;
                min-height: 1px;
                position: relative;
              }
              .col-aside .__content {
                background: #f2f2f2;
                padding: 10px 0;
              }
              .col-aside + .col-main {
                margin-left: 20px;
              }
              .col-main {
                width: 728px;
                position: relative;
              }
              .col-main + .col-aside {
                margin-left: 20px;
              }
            }
            .commonFooter {
              background-color: #333;
              border-top: 1px solid #ccc;
              padding: 20px;
            }
            .commonFooter__outbound {
              height: 12px;
            }
            .commonFooter__list {
              text-align: center;
              margin-bottom: 5px;
            }
            .commonFooter__item {
              display: inline-block;
              padding: 0 5px;
              margin-bottom: 3px;
            }
            .commonFooter__link {
              color: #ccc;
              text-decoration: none;
              transition: 0.2s linear;
            }
            .commonFooter__company {
              display: table;
              color: #ccc;
              margin: 0 auto 10px;
            }
            .commonFooter__content {
              display: table-cell;
              vertical-align: middle;
            }
            .commonFooter__content + .commonFooter__content {
              padding-left: 10px;
            }
            .commonFooter__logo {
              height: 34px;
            }
            .commonFooter__copy {
              text-align: center;
              color: #fff;
            }
            .main-header {
              background-color: #fff;
            }
            .main-header,
            .main-header__content {
              position: relative;
            }
            .main-header__top {
              display: table;
              width: 100%;
              background-color: #fff;
              height: 46px;
              position: relative;
            }
            .main-header__center,
            .main-header__left,
            .main-header__right {
              display: table-cell;
              vertical-align: middle;
            }
            .main-header__left,
            .main-header__right {
              text-align: center;
              vertical-align: middle;
              width: 49px;
              min-height: 44px;
            }
            .main-header__left > .icon-text,
            .main-header__right > .icon-text {
              width: 100%;
              height: 100%;
            }
            .main-header__left > a,
            .main-header__right > a {
              display: block;
              color: #aaa;
            }
            .main-header__center {
              text-align: center;
            }
            .main-header__bottom {
              position: relative;
              border-top: 1px solid #f2f2f2;
              border-bottom: 1px solid #f2f2f2;
            }
            .main-header .brand {
              display: inline-block;
              vertical-align: bottom;
            }
            .main-header .brand img {
              height: 22px;
              display: block;
            }
            #signup {
              background: #7ebf41;
              color: #fff;
              text-align: center;
            }
            .footer {
              background: #fafafa;
              padding: 30px 0;
            }
            .footer .footer__keywords {
              border-bottom: 1px solid #ddd;
              padding: 0 0 20px;
              margin: 0 0 23px;
            }
            .footer .footer__title {
              color: #333;
              font-size: 14px;
              text-align: center;
              font-weight: 700;
              margin-bottom: 20px;
            }
            .footer .footer__linkList {
              display: flex;
              justify-content: center;
              align-items: flex-start;
              flex-wrap: wrap;
            }
            .footer .footer__link {
              color: #333;
              font-size: 14px;
              text-decoration: none;
              padding: 0 10px;
              line-height: 2;
            }
            #top {
              background: #000;
              height: 500px;
              position: relative;
            }
            #top .__background {
              -webkit-transition: all 0.25s;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background: 50%;
              background-size: cover;
            }
            #top .search-group {
              position: absolute;
              bottom: 0;
              top: 0;
              margin: auto;
              height: 44px;
              padding: 10px;
              width: 100%;
            }
            #top .title {
              text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
              color: #fff;
              text-align: center;
              line-height: 1.2;
              padding-top: 100px;
            }
            #contents {
              padding-bottom: 40px;
            }
            #header-search {
              position: relative;
            }
            #header-search #search__info {
              -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
              -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
              box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
              background: #fff;
              border: 1px solid #ccc;
              border-top: none;
              position: absolute;
              left: 0;
              z-index: 1000000;
              margin: 10px -10px 0;
            }
            @media screen and (min-width: 560px) {
              #contents,
              .contents {
                padding-top: 60px;
                padding-bottom: 60px;
                position: relative;
              }
              .contents-default {
                padding-top: 0;
                padding-bottom: 0;
              }
              .list-inline li {
                display: inline;
                margin-right: 10px;
              }
              .section {
                background: #fff;
              }
              .section-aside .section-aside {
                background-color: #fff;
              }
              .section-aside .section-aside__title {
                font-size: 20px;
                padding: 10px 0;
                line-height: 1.4;
                font-weight: 700;
                border-bottom: 1px solid #333;
                text-align: center;
              }
              .section-aside .section-aside__list {
                padding: 5px;
              }
              .section-aside
                .section-aside__item
                + .section-aside
                .section-aside__item {
                border-top: 1px solid #f2f2f2;
              }
              .section-aside .section-aside__item [class^="icon-plus"]:before {
                padding-bottom: 3px;
              }
              .section-aside .section-aside__open .section-aside__item {
                background-color: #f2f2f2;
              }
              .section-aside .section-aside__t1,
              .section-aside .section-aside__t2,
              .section-aside .section-aside__t3,
              .section-aside .section-aside__t4,
              .section-aside .section-aside__t5 {
                font-size: 12px;
                padding: 7px 10px;
              }
              .section-aside .section-aside__t2 {
                margin-left: 10px;
              }
              .section-aside .section-aside__t3 {
                margin-left: 20px;
              }
              .section-aside .section-aside__t4 {
                margin-left: 30px;
              }
              .section-aside .section-aside__t5 {
                margin-left: 40px;
              }
              .section-aside .section-aside__active {
                background: #f2f2f2;
                font-weight: 700;
              }
              .section-aside .section-aside__link {
                color: #333;
                display: block;
              }
              .section-aside .section-aside__link:hover {
                color: #999;
              }
              .section-aside .section-aside__link [class^="icon-arrow-bottom"] {
                color: #ffa0a7;
              }
              .section-aside .section-aside__more {
                color: #999;
                display: block;
              }
              .section-aside .section-aside__more:hover {
                color: #999;
              }
              .section-aside .section-aside__content {
                padding: 10px;
              }
              .section-aside .section-aside__content input[type="email"],
              .section-aside .section-aside__content input[type="number"],
              .section-aside .section-aside__content input[type="password"],
              .section-aside .section-aside__content input[type="submit"],
              .section-aside .section-aside__content input[type="text"],
              .section-aside .section-aside__content select {
                height: 36px;
                padding-top: 5px;
                padding-bottom: 5px;
                margin-left: auto;
                margin-right: auto;
              }
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
            .icon-accordion:before {
              content: "";
            }
            .icon-answer:before {
              content: "";
            }
            .icon-arrow-bottom:before {
              content: "";
            }
            .icon-arrow-left:before {
              content: "";
            }
            .icon-arrow-right:before {
              content: "";
            }
            .icon-arrow-top:before {
              content: "";
            }
            .icon-autumn:before {
              content: "";
            }
            .icon-baby-bottle:before {
              content: "";
            }
            .icon-bag:before {
              content: "";
            }
            .icon-beauty:before {
              content: "";
            }
            .icon-bed:before {
              content: "";
            }
            .icon-boat:before {
              content: "";
            }
            .icon-bus:before {
              content: "";
            }
            .icon-calendar:before {
              content: "";
            }
            .icon-car:before {
              content: "";
            }
            .icon-check:before {
              content: "";
            }
            .icon-clock:before {
              content: "";
            }
            .icon-close:before {
              content: "";
            }
            .icon-cloudy-day:before {
              content: "";
            }
            .icon-cloudy:before {
              content: "";
            }
            .icon-contact:before {
              content: "";
            }
            .icon-country:before {
              content: "";
            }
            .icon-cycle:before {
              content: "";
            }
            .icon-day-off:before {
              content: "";
            }
            .icon-elevator:before {
              content: "";
            }
            .icon-estimate:before {
              content: "";
            }
            .icon-facebook-silhouette:before {
              content: "";
            }
            .icon-facebook:before {
              content: "";
            }
            .icon-favorite:before {
              content: "";
            }
            .icon-filter:before {
              content: "";
            }
            .icon-fog:before {
              content: "";
            }
            .icon-google-plus:before {
              content: "";
            }
            .icon-gourmet:before {
              content: "";
            }
            .icon-hatena-silhouette:before {
              content: "";
            }
            .icon-hatena:before {
              content: "";
            }
            .icon-help:before {
              content: "";
            }
            .icon-hotel:before {
              content: "";
            }
            .icon-ittemita:before {
              content: "";
            }
            .icon-japan:before {
              content: "";
            }
            .icon-like:before {
              content: "";
            }
            .icon-line-silhouette:before {
              content: "";
            }
            .icon-line:before {
              content: "";
            }
            .icon-link-outbound:before {
              content: "";
            }
            .icon-link:before {
              content: "";
            }
            .icon-login-facebook:before {
              content: "";
            }
            .icon-login-twitter:before {
              content: "";
            }
            .icon-login:before {
              content: "";
            }
            .icon-logout:before {
              content: "";
            }
            .icon-mail:before {
              content: "";
            }
            .icon-man:before {
              content: "";
            }
            .icon-map:before {
              content: "";
            }
            .icon-matome:before {
              content: "";
            }
            .icon-member:before {
              content: "";
            }
            .icon-menu:before {
              content: "";
            }
            .icon-museum:before {
              content: "";
            }
            .icon-new:before {
              content: "";
            }
            .icon-night:before {
              content: "";
            }
            .icon-no-smoking:before {
              content: "";
            }
            .icon-pinterest:before {
              content: "";
            }
            .icon-plan:before {
              content: "";
            }
            .icon-plane:before {
              content: "";
            }
            .icon-plus:before {
              content: "";
            }
            .icon-pocket:before {
              content: "";
            }
            .icon-question:before {
              content: "";
            }
            .icon-rainy:before {
              content: "";
            }
            .icon-rakuten:before {
              content: "";
            }
            .icon-ranking:before {
              content: "";
            }
            .icon-report:before {
              content: "";
            }
            .icon-root:before {
              content: "";
            }
            .icon-rss:before {
              content: "";
            }
            .icon-search:before {
              content: "";
            }
            .icon-season:before {
              content: "";
            }
            .icon-setting:before {
              content: "";
            }
            .icon-shinkansen:before {
              content: "";
            }
            .icon-shopping:before {
              content: "";
            }
            .icon-sleet:before {
              content: "";
            }
            .icon-smile:before {
              content: "";
            }
            .icon-smoking:before {
              content: "";
            }
            .icon-snowly:before {
              content: "";
            }
            .icon-sort:before {
              content: "";
            }
            .icon-spot:before {
              content: "";
            }
            .icon-spring:before {
              content: "";
            }
            .icon-stair:before {
              content: "";
            }
            .icon-star:before {
              content: "";
            }
            .icon-summer:before {
              content: "";
            }
            .icon-sunny:before {
              content: "";
            }
            .icon-tel:before {
              content: "";
            }
            .icon-ticket:before {
              content: "";
            }
            .icon-tour-japan:before {
              content: "";
            }
            .icon-tour-world:before {
              content: "";
            }
            .icon-train:before {
              content: "";
            }
            .icon-twitter:before {
              content: "";
            }
            .icon-user:before {
              content: "";
            }
            .icon-walk:before {
              content: "";
            }
            .icon-wifi-japan:before {
              content: "";
            }
            .icon-wifi-world:before {
              content: "";
            }
            .icon-wifi:before {
              content: "";
            }
            .icon-wind:before {
              content: "";
            }
            .icon-winter:before {
              content: "";
            }
            .icon-woman:before {
              content: "";
            }
            .icon-world:before {
              content: "";
            }
            .add-publish:before {
              content: "掲載サイト";
            }
            .add-cite:before {
              content: "出典: ";
            }
            .add-confirm:after {
              content: "確認";
            }
            .add-more:after {
              content: "見る";
            }
            .add-site:after {
              content: "サイト";
            }
            .add-empty:after {
              content: "空室を見る";
            }
            .article .quote__vendor {
              display: inline-block;
              width: auto;
              height: 20px;
              vertical-align: middle;
            }
            .article .info {
              margin: 10px 0;
            }
            .article .quote {
              color: #aaa;
              font-size: 13px;
              text-align: right;
              margin-top: 0;
              word-break: break-all;
              word-wrap: normal;
              line-height: 1.4;
            }
            .article .quote a {
              color: #aaa;
              text-decoration: none;
            }
            .article__title {
              margin: 0;
              padding-top: 40px;
              color: #333;
              font-size: 18px;
              font-weight: 700;
              padding-bottom: 5px;
              border-bottom: 5px solid;
              border-image: linear-gradient(
                  90deg,
                  #e9b8b8,
                  #edc7aa 16.67%,
                  #e5dcb0 33.33%,
                  #a4ceb8 49.48%,
                  #a4cbd6 66.15%,
                  #aeb1cc 82.81%,
                  #cbb3c7
                )
                1;
            }
            .article__title + .article__title {
              padding-top: 16px;
            }
            .article__subtitle {
              margin-top: 20px;
              padding: 5px 10px;
              font-size: 16px;
              border-left: 5px solid #ddd;
              color: #333;
              font-weight: 700;
            }
            .article__text {
              padding: 16px 0;
              line-height: 1.8;
              margin: 0;
              font-size: 15px;
            }
            .article__text + .article__text-link {
              margin-top: -10px;
              margin-bottom: 10px;
            }
            .article__link {
              text-decoration: underline;
              color: #4381bf;
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
            .article__quote--cosme:after,
            .article__quote:after {
              content: "";
              border: 7px solid transparent;
              border-right: 10px solid #fff;
              position: absolute;
              left: -15px;
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
            .article__caption {
              background: #f2f2f2;
              padding: 10px 16px;
              margin-bottom: 5px;
              text-align: center;
              margin-top: 5px;
            }
            .article__image {
              padding: 16px 0;
            }
            .article__image amp-img {
              max-height: 500px;
            }
            .article__image iframe,
            .article__image img {
              width: 100%;
            }
            .article__image .quote {
              margin: 5px 0 0;
            }
            .article__image-container {
              position: relative;
              width: 100%;
              min-height: 300px;
            }
            .article__image img {
              object-fit: contain;
            }
            .article__notice {
              font-size: 11px;
              color: #aaa;
              margin: 0;
              line-height: 1.4;
            }
            .article__em {
              font-family: Lucida Grande, Hiragino Kaku Gothic ProN, Meiryo,
                sans-serif;
              font-style: italic;
              font-size: 1em;
              line-height: 1.8;
            }
            .article__strong,
            .article__strong--cosme {
              font-weight: 700;
              border-bottom: 5px solid;
              border-image: linear-gradient(270deg, #fb8d3d, #f9344c) 1;
              font-size: 15px;
              line-height: 1.8;
            }
            .article__strong--cosme .article__em,
            .article__strong .article__em {
              font-weight: 700;
            }
            .article__movie {
              position: relative;
              width: 100%;
              margin: 16px 0;
            }
            .article__movie iframe {
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
            }
            .article__movie .quote {
              margin: 5px 0 0;
            }
            .article__embed {
              padding: 10px 0;
            }
            amp-instagram {
              max-width: 100%;
            }
            .article__balloon {
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              -ms-border-radius: 5px;
              -o-border-radius: 5px;
              border-radius: 5px;
              background: linear-gradient(270deg, #fb8d3d, #f9344c);
              padding: 15px;
              margin-top: 40px;
              position: relative;
              color: #fff;
              font-weight: 700;
              font-size: 20px;
              line-height: 1.4;
            }
            .article__balloon:after {
              position: absolute;
              content: "";
              border: 15px solid transparent;
              border-top-color: #f9344c;
              left: 50%;
              bottom: -30px;
              margin-left: -15px;
            }
            .article__map {
              position: relative;
              width: 100%;
              background-color: #f2f2f2;
            }
            .article__map iframe {
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
            }
            .article__table {
              margin: 20px 0;
              border-radius: 10px;
              overflow: hidden;
              min-width: 100%;
              position: relative;
            }
            .article__table:after {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              border-radius: 10px;
              border: 1px solid #ccc;
              content: "";
            }
            .article__tr + .article__tr {
              border-top: 1px solid #ccc;
            }
            .article__th {
              background-color: #f2f2f2;
              font-weight: 700;
              text-align: center;
              padding: 20px 10px;
              vertical-align: middle;
              font-size: 13px;
              white-space: nowrap;
            }
            .article__th:not(:first-child) {
              border-left: 1px solid #ccc;
            }
            .article__td {
              padding: 20px 10px;
              text-align: center;
              vertical-align: middle;
              font-size: 13px;
            }
            .article__td:not(:first-child) {
              border-left: 1px solid #ccc;
            }
            .article__image-panel-item img {
              border-radius: 5px;
            }
            @media screen and (min-width: 560px) {
              .article__container {
                max-width: 640px;
                margin-left: auto;
                margin-right: auto;
                padding-top: 20px;
              }
              .article__title {
                margin-top: 0;
                padding-top: 40px;
                padding-bottom: 5px;
                margin-bottom: 0;
                font-size: 25px;
                line-height: 1.6;
                border-bottom: 5px solid;
                border-image: linear-gradient(
                    90deg,
                    #e9b8b8,
                    #edc7aa 16.67%,
                    #e5dcb0 33.33%,
                    #a4ceb8 49.48%,
                    #a4cbd6 66.15%,
                    #aeb1cc 82.81%,
                    #cbb3c7
                  )
                  1;
                color: #333;
                font-weight: 700;
              }
              .article__title + .article__title {
                padding-top: 10px;
              }
              .article__subtitle {
                margin-top: 20px;
                padding: 5px 15px;
                font-size: 18px;
                border-left: 5px solid #ddd;
                color: #333;
                font-weight: 700;
              }
              .article__text {
                padding: 30px 0;
                line-height: 1.8;
                font-size: 16px;
                word-break: break-all;
              }
              .article__text + .lifestyle-article__text-link,
              .article__text + .link-artilce {
                margin-top: -20px;
              }
              .article__image-container {
                position: relative;
                min-height: 457px;
              }
              .article__table {
                min-width: 100%;
                margin: 20px 0;
                overflow: hidden;
                position: relative;
              }
              .article__table,
              .article__table:after {
                border: 1px solid #ccc;
                border-radius: 10px;
              }
              .article__table:after {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                content: "";
              }
              .article__tr + .article__tr {
                border-top: 1px solid #ccc;
              }
              .article__th {
                font-weight: 700;
                text-align: center;
                padding: 30px 10px;
                vertical-align: middle;
                font-size: 15px;
                background-color: #f2f2f2;
              }
              .article__th:not(:first-child) {
                border-left: 1px solid #ccc;
              }
              .article__td {
                padding: 30px 10px;
                text-align: center;
                vertical-align: middle;
                font-size: 15px;
              }
              .article__td:not(:first-child) {
                border-left: 1px solid #ccc;
              }
            }
            .breadcrumb {
              margin: 0;
              padding: 2px 0;
              background-color: #fff;
              font-size: 11px;
              overflow-x: scroll;
              white-space: nowrap;
              line-height: 2;
            }
            .breadcrumb li {
              display: inline-block;
            }
            .breadcrumb li + li:before {
              color: #aaa;
              content: "/";
              margin: 0 5px 0 0;
            }
            .breadcrumb a {
              color: #aaa;
              text-decoration: none;
            }
            @media screen and (min-width: 560px) {
              .breadcrumb {
                font-size: 13px;
              }
            }
            .button-group {
              overflow: hidden;
            }
            .button-group .button {
              border-radius: 0;
            }
            .button-group .button-decrement:first-child,
            .button-group .button-increment:first-child,
            .button-group .button:first-child {
              border-top-left-radius: 3px;
              border-bottom-left-radius: 3px;
              border-right: none;
            }
            .button-group .button-decrement:last-child,
            .button-group .button-increment:last-child,
            .button-group .button:last-child {
              border-top-right-radius: 3px;
              border-bottom-right-radius: 3px;
              border-left: none;
            }
            .button {
              background: linear-gradient(#fff, #f2f2f2);
              border-radius: 5px;
              border: 1px solid #ccc;
              color: #333;
              font-size: 13px;
            }
            .button,
            .button-accent {
              font-weight: 700;
              display: block;
              padding: 10px 5px;
              text-align: center;
              line-height: 1.4;
              position: relative;
              text-decoration: none;
            }
            .button-accent {
              background: -owg-linear-gradient(#f90, #f29100);
              background: -webkit-linear-gradient(#f90, #f29100);
              background: -webkit-gradient(
                linear,
                left top,
                left bottom,
                from(#f90),
                to(#f29100)
              );
              background: linear-gradient(#f90, #f29100);
              border: 1px solid #f90;
              color: #fff;
              border-radius: 5px;
              font-size: 14px;
            }
            .button-next {
              border-radius: 22px;
              margin: 0 30px;
              padding: 11px 10px;
              line-height: 1.6;
              background: #f9344c;
              border-color: #f9344c;
              font-weight: 700;
              text-decoration: none;
            }
            .button-next,
            .button-red-small {
              text-align: center;
              color: #fff;
              display: block;
            }
            .button-red-small {
              border-radius: 5px;
              font-size: 12px;
              padding: 5px 3px;
              background: -owg-linear-gradient(#f9344c, #ed3248);
              background: -webkit-linear-gradient(#f9344c, #ed3248);
              background: -moz-linear-gradient(#f9344c, #ed3248);
              background: -o-linear-gradient(#f9344c, #ed3248);
              background: linear-gradient(#f9344c, #ed3248);
              border: 1px solid #f9344c;
            }
            .button-more {
              border-radius: 22px;
              margin-left: auto;
              margin-right: auto;
              text-align: center;
              font-weight: 700;
              padding: 0;
              line-height: 44px;
              max-width: 300px;
              background: #f90;
              color: #fff;
              border-color: #f90;
              display: block;
              text-decoration: none;
            }
            .button-decrement,
            .button-decrement[type="button"],
            .button-increment,
            .button-increment[type="button"] {
              border: 1px solid #ccc;
              color: #333;
              font-size: 13px;
              padding: 10px 5px;
              text-align: center;
              line-height: 1.4;
              position: relative;
              display: inline;
              background: #eee;
              width: 44px;
              font-weight: 700;
              text-decoration: none;
            }
            .button-group .button-decrement,
            .button-group .button-decrement[type="button"] {
              border-right: 1px solid #ccc;
            }
            .button.button-next {
              border-radius: 23px;
              display: table;
              min-width: 300px;
              margin: 0 auto;
              padding: 11px 10px;
              line-height: 1.6;
              background: #f9344c;
              color: #fff;
              border-color: #f9344c;
            }
            .mbs {
              margin-bottom: 5px;
            }
            .mbm {
              margin-bottom: 10px;
            }
            .mbl {
              margin-bottom: 20px;
            }
            .mts {
              margin-top: 5px;
            }
            .mtm {
              margin-top: 10px;
            }
            .mtl {
              margin-top: 20px;
            }
            .pbs {
              padding-bottom: 5px;
            }
            .pbm {
              padding-bottom: 10px;
            }
            .pbl {
              padding-bottom: 20px;
            }
            .pts {
              padding-top: 5px;
            }
            .ptm {
              padding-top: 10px;
            }
            .ptl {
              padding-top: 20px;
            }
            .inner-s {
              padding-left: 5px;
              padding-right: 5px;
            }
            .inner-m {
              padding-left: 10px;
              padding-right: 10px;
            }
            .inner-l {
              padding-left: 20px;
              padding-right: 20px;
            }
            .bb {
              border-bottom: 1px solid #ccc;
            }
            .text-center {
              text-align: center;
            }
            .nowrap {
              white-space: nowrap;
            }
            .display-pc {
              display: none;
            }
            @media screen and (min-width: 560px) {
              .display-pc {
                display: block;
              }
            }
            .hidden-pc {
              display: block;
            }
            @media screen and (min-width: 560px) {
              .hidden-pc {
                display: none;
              }
            }
            .input-group {
              display: table;
              border-collapse: separate;
              width: 100%;
            }
            .input-group__button input,
            .input-group__input input {
              width: 100%;
            }
            .input-group__input {
              display: table-cell;
              width: 100%;
            }
            .input-group__button {
              position: relative;
              display: table-cell;
              width: 1%;
              white-space: nowrap;
              vertical-align: middle;
            }
            .input-group__button button {
              width: 100%;
              height: 100%;
            }
            .input-group-select {
              display: table;
              border-collapse: separate;
              width: 100%;
            }
            .input-group-select__select button,
            .input-group-select__select input,
            .input-group-select__select select {
              width: 100%;
            }
            .input-group-select__select {
              display: table-cell;
              width: 100%;
              vertical-align: middle;
            }
            .input-group-select__select-2col {
              display: table-cell;
              width: 50%;
              vertical-align: middle;
            }
            .input-group-select__addon,
            .input-group-select__button {
              position: relative;
              display: table-cell;
              width: 1%;
              white-space: nowrap;
              vertical-align: middle;
            }
            .input-group-select__addon button,
            .input-group-select__button button {
              width: 100%;
            }
            .input-group-select__addon {
              border: 1px solid #ccc;
              min-width: 30px;
              text-align: center;
            }
            .input-group-select > .input-group-select__button button,
            .input-group-select > .input-group-select__button input,
            .input-group-select > .input-group-select__button select,
            .input-group-select > .input-group-select__select-2col button,
            .input-group-select > .input-group-select__select-2col input,
            .input-group-select > .input-group-select__select-2col select,
            .input-group-select > .input-group-select__select button,
            .input-group-select > .input-group-select__select input,
            .input-group-select > .input-group-select__select select {
              border-left: none;
            }
            .input-group-select > .input-group-select__addon:first-child,
            .input-group-select
              > .input-group-select__button:first-child
              button,
            .input-group-select > .input-group-select__button:first-child input,
            .input-group-select
              > .input-group-select__button:first-child
              select,
            .input-group-select
              > .input-group-select__select-2col:first-child
              button,
            .input-group-select
              > .input-group-select__select-2col:first-child
              input,
            .input-group-select
              > .input-group-select__select-2col:first-child
              select,
            .input-group-select
              > .input-group-select__select:first-child
              button,
            .input-group-select > .input-group-select__select:first-child input,
            .input-group-select
              > .input-group-select__select:first-child
              select {
              border-left: 1px solid #ccc;
            }
            .input-table th {
              padding-right: 16px;
            }
            .input-table td {
              padding: 0;
              text-align: right;
            }
            .input-table tr + .input-table tr .input-table td,
            .input-table tr + .input-table tr .input-table th {
              padding-top: 0.5em;
            }
            .input-table__item {
              vertical-align: middle;
              text-align: left;
            }
            .input-table__label {
              font-size: 11px;
              display: inline-block;
              margin-bottom: 5px;
            }
            .input-table-summary {
              border-spacing: 10px;
              border-collapse: separate;
              table-layout: fixed;
            }
            .input-table__value-summary {
              font-size: 20px;
              font-weight: 400;
            }
            .list-default {
              padding: 0;
              margin: 0;
            }
            .list-default li {
              overflow: hidden;
              font-weight: 700;
              line-height: 1.4;
              display: block;
            }
            .list-default li a {
              overflow: hidden;
              padding: 10px 8% 10px 10px;
              display: table;
              width: 100%;
              text-decoration: none;
              color: #333;
            }
            .list-default li a img {
              border-radius: 10px;
            }
            .list-default li .__image {
              height: 80px;
              width: 80px;
              margin: 0 10px 0 0;
              display: table-cell;
              vertical-align: top;
              float: left;
            }
            .list-default__title {
              line-height: 1.4;
              font-size: 13px;
              padding-top: 5px;
              padding-bottom: 5px;
              margin: 0;
              display: table-cell;
              vertical-align: top;
              color: #333;
              width: 100%;
            }
            .list-2col {
              padding: 0;
              margin: 0;
              overflow: hidden;
            }
            .list-2col > li {
              width: 50%;
              float: left;
              list-style-type: none;
            }
            .list-3col:after,
            .list-3col:before {
              content: " ";
              display: table;
            }
            .list-3col:after {
              clear: both;
            }
            .list-3col > li {
              width: 33.33333%;
              float: left;
              list-style-type: none;
            }
            .list-button-2col__button {
              margin: 3px;
              text-align: center;
              display: block;
              background-color: #f2f2f2;
              padding: 5px 0;
              color: #333;
              border: 1px solid #ccc;
              font-weight: 700;
              font-size: 13px;
              text-decoration: none;
              line-height: 1.6;
            }
            .list-table:after,
            .list-table:before {
              content: " ";
              display: table;
            }
            .list-table:after {
              clear: both;
            }
            .list-table > li {
              width: 33.333333333%;
              float: left;
            }
            .list-category li {
              font-size: 13px;
              margin-right: 0;
              color: #aaa;
              display: inline;
            }
            .list-category li a {
              color: #aaa;
            }
            .list-category li + li:before {
              color: #aaa;
              content: "/";
              font-family: icons;
              margin: 0 5px 0 0;
            }
            @media screen and (min-width: 560px) {
              .list-ranking > li + li {
                margin-top: 10px;
              }
              .list-ranking-summary {
                padding: 0 5px;
              }
              .list-ranking__item-summary {
                float: left;
                width: 33%;
                padding: 10px 5px;
              }
              .list-ranking__link,
              .list-ranking__link-summary {
                color: #333;
                display: table;
                width: 100%;
              }
              .list-ranking__link-summary:hover,
              .list-ranking__link:hover {
                text-decoration: none;
              }
              .list-ranking__link-summary:hover .lifestyle-list-ranking__name,
              .list-ranking__link:hover .lifestyle-list-ranking__name {
                text-decoration: underline;
              }
              .list-ranking__link-summary:hover .lifestyle-list-ranking__title,
              .list-ranking__link:hover .lifestyle-list-ranking__title {
                color: #999;
                text-decoration: underline;
              }
              .list-ranking__link-summary:hover
                .lifestyle-list-ranking__label-link,
              .list-ranking__link:hover .lifestyle-list-ranking__label-link {
                color: #ccc;
              }
              .list-ranking__link-summary {
                display: block;
              }
              .list-ranking__link-summary:hover
                .lifestyle-list-ranking__name-summary {
                text-decoration: underline;
              }
              .list-ranking__thumbnail-summary {
                padding-right: 5px;
              }
              .list-ranking__content,
              .list-ranking__thumbnail,
              .list-ranking__thumbnail-summary {
                display: table-cell;
                vertical-align: top;
              }
              .list-ranking__thumbnail,
              .list-ranking__thumbnail-summary {
                padding-right: 10px;
              }
              .list-ranking__image {
                -webkit-border-radius: 10px;
                -moz-border-radius: 10px;
                -ms-border-radius: 10px;
                -o-border-radius: 10px;
                border-radius: 10px;
                display: block;
                width: 80px;
                height: 80px;
              }
              .list-ranking__content {
                width: 100%;
                vertical-align: middle;
              }
              .list-ranking__name,
              .list-ranking__name-summary,
              .list-ranking__title {
                font-size: 14px;
                line-height: 1.4;
                font-weight: 700;
              }
              .list-ranking__name-summary {
                max-height: 2.8em;
                line-height: 1.4;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                margin: 0;
                color: #333;
              }
              .list-ranking__review {
                line-height: 1;
              }
              .list-ranking__reference {
                font-size: 11px;
                color: #aaa;
                line-height: 1.4;
              }
              .list-ranking__price {
                font-size: 16px;
                font-weight: 700;
                color: #f9344c;
                line-height: 1.4;
              }
              .list-ranking__price.price-null {
                color: #aaa;
                font-size: 11px;
                line-height: 22.4px;
              }
              .list-ranking__label-link {
                line-height: 1.4;
                color: #aaa;
                font-size: 11px;
                font-weight: 700;
                text-decoration: underline;
              }
              .list-ranking > .list-ranking__item-more {
                padding: 3px 0 5px;
                text-align: right;
              }
              .list-ranking__link-more {
                font-size: 13px;
                text-decoration: underline;
              }
              .list-ranking__link-more:hover {
                text-decoration: none;
              }
              .list-relative__heading {
                font-weight: 700;
                font-size: 20px;
                line-height: 1.4;
                border-bottom: 1px solid #c4c4c4;
                padding: 5px;
                text-align: center;
              }
              .list-relative__item {
                padding: 10px 0;
              }
              .list-relative__wrap {
                display: table;
                width: 100%;
                text-decoration: none;
              }
              .list-relative__image {
                display: table-cell;
                width: 1%;
                vertical-align: top;
              }
              .list-relative__thumbnail {
                -webkit-border-radius: 10px;
                -moz-border-radius: 10px;
                -ms-border-radius: 10px;
                -o-border-radius: 10px;
                border-radius: 10px;
                width: 170px;
                height: 120px;
              }
              .list-relative__content {
                width: 100%;
                display: table-cell;
                padding: 5px 0 0 10px;
                vertical-align: top;
              }
              .list-relative__link,
              .list-relative__title {
                font-weight: 700;
                color: #333;
                line-height: 1.4;
                font-size: 20px;
              }
              .list-relative__summary {
                font-size: 12px;
                line-height: 1.4;
                font-weight: 400;
                margin: 10px 0 0;
                max-height: 2.8em;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              }
            }
            .nav-header {
              background-color: #333;
              position: relative;
            }
            .nav-header > ul {
              display: table;
              width: 100%;
            }
            .nav-header > ul > li {
              display: table-cell;
              vertical-align: middle;
              text-align: center;
              height: 36px;
            }
            .nav-header > ul > li:last-child {
              width: 1%;
            }
            .nav-header__link {
              color: #fff;
              font-size: 11px;
              display: block;
              padding: 0 5px;
              white-space: nowrap;
              min-width: 36px;
              height: 36px;
              line-height: 36px;
              font-weight: 700;
              text-decoration: none;
              border: none;
              background-color: #333;
            }
            .nav-header__content {
              background-color: #333;
              border-top: 1px solid #ccc;
              position: fixed;
              top: 87px;
              left: 0;
              right: 0;
              padding: 10px;
            }
            .main-nav {
              background: #fff;
              padding-bottom: 60px;
            }
            .main-nav li {
              border-top: none;
              border-bottom: 1px solid #ccc;
            }
            .main-nav__list {
              border-top: 1px solid #ccc;
            }
            .main-nav__list > li > a {
              white-space: nowrap;
              overflow: hidden;
              -ms-text-overflow: ellipsis;
              text-overflow: ellipsis;
              display: block;
              line-height: 24px;
              padding: 10px;
              font-weight: 700;
              text-decoration: none;
              color: #333;
              font-size: 13px;
            }
            .main-nav__list > li > a > i {
              color: #aaa;
              font-size: 15px;
              padding-left: 0;
            }
            .main-nav > .author {
              white-space: nowrap;
              overflow: hidden;
              -ms-text-overflow: ellipsis;
              text-overflow: ellipsis;
              display: block;
              line-height: 24px;
              padding: 10px;
              color: #333;
              font-size: 13px;
            }
            .pagination {
              color: #aaa;
              display: block;
              text-align: center;
            }
            .pagination__item {
              display: inline-block;
              line-height: 1.4;
              margin: 5px;
            }
            .pagination__item.is-active .pagination__link {
              background-color: #aaa;
              color: #fff;
              font-weight: 700;
            }
            .pagination__link {
              color: #aaa;
              font-size: 13px;
              text-decoration: none;
              display: inline-block;
              padding: 5px 10px;
              background-color: #f2f2f2;
            }
            .pagination__button {
              border-radius: 26px;
              color: #fff;
              cursor: pointer;
              padding: 15px 5px;
              font-size: 14px;
              display: block;
              font-weight: 700;
              text-align: center;
              transition: 0.2s linear;
              height: auto;
              position: relative;
              background: #f90;
              text-decoration: none;
            }
            .panel-list .panel-small {
              margin: 3px;
            }
            .panel-small {
              background-color: #fff;
            }
            .panel-small__link-small {
              position: relative;
              display: block;
              min-height: 200px;
              border: 1px solid #f2f2f2;
              text-decoration: none;
            }
            .panel-small__thumbnail__image-small {
              display: block;
            }
            .panel-small__content-small {
              padding: 5px 3px;
            }
            .panel-small__content__title-small {
              max-height: 2.8em;
              -webkit-line-clamp: 2;
              font-size: 11px;
              color: #333;
              margin-top: 0;
              margin-bottom: 0;
              font-weight: 700;
            }
            .panel-small__content__area,
            .panel-small__content__title-small {
              line-height: 1.4;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
            }
            .panel-small__content__area {
              max-height: 1.4em;
              -webkit-line-clamp: 1;
              font-size: 10px;
              color: #ccc;
              margin: 0;
            }
            .panel-small__content__category {
              font-size: 10px;
              color: #ccc;
              line-height: 1.4;
            }
            .panel-small__content__review {
              line-height: 1;
            }
            .panel-small__content__price {
              font-size: 10px;
              color: #f9344c;
              font-weight: 700;
              line-height: 1.4;
            }
            .panel-small__content__price.price-null {
              color: #ccc;
              font-size: 10px;
              line-height: 15.4px;
            }
            .panel-small__content__label-link {
              font-size: 10px;
              color: #aaa;
              font-weight: 700;
              line-height: 1.4;
            }
            .panel-hotel {
              background-color: #fff;
              border: 1px solid #ccc;
            }
            .panel-hotel .panel-small__link-small {
              border: none;
            }
            .panel-hotel .panel-small__content-small {
              height: 70px;
            }
            .panel-hotel-jalan {
              background-color: #fff;
              border: 1px solid #ff7d00;
            }
            .title-rakuten {
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
              color: #333;
              padding: 5px;
              font-size: 14px;
              line-height: 1.6;
              text-align: center;
              font-weight: 700;
              border-left: 1px solid #ccc;
              border-right: 1px solid #ccc;
              border-top: 10px solid #76ae25;
            }
            .title-rakuten__logo {
              margin-bottom: -9px;
              display: inline-block;
            }
            .title-jalan {
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
              background-color: #ff7d00;
              color: #fff;
              padding: 5px;
              font-size: 14px;
              line-height: 1.6;
            }
            .panel-hotel__price,
            .title-jalan {
              text-align: center;
              font-weight: 700;
            }
            .panel-hotel__price {
              font-size: 13px;
              color: #f9344c;
              line-height: 1.4;
              margin: 0 0 3px;
            }
            .panel-hotel__price.price-null {
              color: #aaa;
              font-size: 12px;
              line-height: 18px;
            }
            .panel-hotel__price-booking {
              text-align: center;
              font-size: 14px;
              color: #f9344c;
              font-weight: 700;
              line-height: 1.4;
              margin: 0 0 3px;
            }
            .panel-hotel__price-booking.price-null {
              color: #aaa;
              font-size: 12px;
              line-height: 19.6px;
            }
            .panel-hotel__bottom-rakuten {
              background-color: #ebeae4;
              border-top: 1px solid #ccc;
              padding: 5px 9px;
            }
            .panel-hotel__bottom-rakuten .button-red-small {
              margin: 0;
              line-height: 1;
              background: #bf0000;
              border: 1px solid #bf0000;
            }
            .panel-hotel__bottom-jalan {
              background-color: #fbf5e1;
              border-top: 1px solid #ccc;
              padding: 5px 9px;
            }
            .panel-hotel__bottom-jalan .button-red-small {
              margin: 0;
              line-height: 1;
              background: #058ee3;
              border: 1px solid #1b47ff;
            }
            .review-0,
            .review-0-5,
            .review-1,
            .review-1-5,
            .review-2,
            .review-2-5,
            .review-3,
            .review-3-5,
            .review-4,
            .review-4-5,
            .review-5,
            .review-5-5 {
              display: inline-block;
              padding: 0;
              height: 11px;
              width: 60px;
              background-image: url(https://www.travelbook.co.jp/assets/common/parts/img/review-small.png);
            }
            .review-0 {
              background-position: -60px 0;
            }
            .review-0-5 {
              background-position: -178px 0;
            }
            .review-1 {
              background-position: -48px 0;
            }
            .review-1-5 {
              background-position: -166px 0;
            }
            .review-2 {
              background-position: -36px 0;
            }
            .review-2-5 {
              background-position: -154px 0;
            }
            .review-3 {
              background-position: -24px 0;
            }
            .review-3-5 {
              background-position: -142px 0;
            }
            .review-4 {
              background-position: -12px 0;
            }
            .review-4-5 {
              background-position: -130px 0;
            }
            .review-5 {
              background-position: 0 0;
            }
            .summary-search {
              border: 5px solid #7ebf41;
              border-top: none;
              position: relative;
            }
            .summary-search__title {
              margin: 0 10px;
              color: #333;
              font-size: 14px;
              background-color: #fff;
              text-align: center;
              line-height: 1.4;
              padding: 10px 0 3px;
              font-weight: 700;
              border-bottom: 3px solid #f9344c;
            }
            .summary-search__title-ticket {
              margin: 0 10px;
              padding: 5px 0 0;
              line-height: 1.4;
              text-align: center;
            }
            .summary-search__table {
              display: table;
              width: 100%;
              border-spacing: 10px 5px;
              border-collapse: separate;
            }
            .summary-search__td {
              display: table-cell;
              vertical-align: middle;
            }
            .summary-search__banner {
              display: inline-block;
              width: auto;
              max-width: 100%;
            }
            .summary-search__title-rakuten {
              border-bottom: 2px solid #ccc;
              line-height: 1;
              border-top: 2px solid #66b821;
              text-align: center;
              display: block;
              background-color: #fff;
              margin: 0 0 -5px;
            }
            .summary-search__recommend-rakuten {
              background: #fff;
            }
            .summary-search__image-rakuten {
              display: inline;
              width: auto;
              margin: 0;
              line-height: 1;
            }
            .summary-search__adult {
              white-space: nowrap;
              width: 1%;
              vertical-align: top;
            }
            .summary-search__adult select {
              width: 160px;
            }
            .summary-search__button {
              width: 100%;
              min-width: 100%;
              height: auto;
              font-size: 15px;
              background: linear-gradient(#f9344c, #ed3248);
              border: 1px solid #f9344c;
              text-align: center;
              line-height: 1.4;
              -webkit-appearance: none;
              position: relative;
              font-family: Arial, sans-serif;
              padding: 14px 0;
              margin: 0;
              color: #fff;
              font-weight: 700;
              display: block;
              border-radius: 5px;
              text-decoration: none;
            }
            .tab-summary {
              margin-left: -5px;
              margin-right: -5px;
              background-color: #fff;
            }
            .tab-summary__heading {
              position: relative;
              padding: 5px 5px 0;
              background-color: #7ebf41;
            }
            .tab-summary__heading:before {
              content: "";
              border-bottom: 1px solid #ccc;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: -1;
            }
            .tab-summary__list {
              display: table;
              width: 100%;
              table-layout: fixed;
              border-bottom: 1px solid #fff;
            }
            .tab-summary__item {
              display: table-cell;
              vertical-align: bottom;
            }
            .tab-summary + .tab-summary .tab-summary__title,
            .tab-summary__other {
              border-left: 1px solid #fff;
            }
            .tab-summary__other {
              display: table-cell;
              width: 44px;
            }
            .tab-summary__title {
              background-color: #7ebf41;
              color: #fff;
              text-align: center;
              display: block;
              font-weight: 700;
              padding: 5px 0;
              font-size: 11px;
              white-space: nowrap;
              text-decoration: none;
            }
            .tab-summary__title[data-tab-active] {
              background-color: #fff;
              color: #333;
            }
            .tag-list {
              overflow-x: scroll;
              white-space: nowrap;
            }
            .tag__item {
              display: inline-block;
              background-color: #f2f2f2;
              padding: 0 5px;
              border-radius: 3px;
              border: 1px solid #ccc;
              font-size: 11px;
              color: #333;
              white-space: nowrap;
              margin: 0 0 5px 5px;
              text-decoration: none;
            }
            .tag__item:first-child {
              margin: 0 0 5px;
            }
            .title-section {
              font-weight: 700;
              font-size: 20px;
              line-height: 1.5;
              padding: 5px;
              border-bottom: 1px solid #c4c4c4;
              text-align: center;
              margin-left: 10px;
              margin-right: 10px;
            }
            .title-middle {
              color: #7ebf41;
              margin: 0;
            }
            .title-middle,
            .title-small {
              text-align: center;
              font-weight: 700;
              font-size: 14px;
            }
            .title-small {
              background-color: #333;
              color: #fff;
              line-height: 1.4;
              padding: 5px 10px;
            }
            .title-article {
              padding: 10px 10px 0;
            }
            .title-article__views {
              display: block;
              white-space: nowrap;
              color: #aaa;
            }
            .title-article__title {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 10px;
              font-size: 18px;
              line-height: 1.5;
              color: #333;
              font-weight: 700;
              background-color: hsla(0, 0%, 100%, 0.6);
              white-space: normal;
              overflow: hidden;
            }
            .title-article__subtitle {
              margin-top: 20px;
              padding: 5px 10px;
              font-size: 16px;
              border-left: 5px solid #ddd;
              color: #333;
              font-weight: 700;
            }
            .title-article__bottom {
              display: block;
              font-size: 14px;
            }
            .title-article__image {
              position: relative;
              width: 100%;
              height: 190px;
            }
            .title-article__containter {
              position: relative;
            }
            @media screen and (min-width: 560px) {
              .title-article__image {
                position: relative;
                height: auto;
              }
              .title-article__image img {
                max-height: 640px;
                width: auto;
                max-width: 100%;
                display: block;
                margin-left: auto;
                margin-right: auto;
                border-radius: 10px;
              }
              .title-article__title {
                font-size: 25px;
              }
            }
            .tooltip-hotel {
              position: absolute;
              display: inline-block;
              padding: 5px;
              text-align: center;
              font-size: 10px;
              color: #fff;
              background-color: #f9344c;
              z-index: 10;
              font-weight: 700;
              line-height: 1.4;
              margin-bottom: 15px;
              margin-top: -3px;
              left: 50%;
              margin-left: -100px;
              top: -15px;
              white-space: nowrap;
            }
            .tooltip-hotel:before {
              position: absolute;
              bottom: -10px;
              left: 50%;
              margin-left: -10px;
              height: 0;
              width: 0;
              border: 5px solid transparent;
              border-top-color: #f9344c;
              content: "";
            }
            .nav-accordion {
              position: inherit;
            }
            .search-header {
              position: fixed;
              width: 100%;
              top: 51px;
              left: 0;
              background: #333;
              padding: 10px;
              border-top: 1px solid #ccc;
              z-index: 100;
            }
            .top-menu__list-white {
              display: table;
              width: 100%;
              table-layout: fixed;
              border-collapse: separate;
              border-spacing: 5px 2px;
            }
            .top-menu__item {
              display: table-cell;
            }
            .top-menu__link {
              font-size: 10px;
              height: 70px;
            }
            .top-menu__link,
            .top-menu__link--footer {
              background-color: #fff;
              display: block;
              color: #7ebf41;
              padding: 10px 0;
              line-height: 1.2;
              text-align: center;
              text-decoration: none;
            }
            .top-menu__link--footer {
              font-size: 12px;
              font-weight: 700;
            }
            .top-menu__icon {
              display: block;
              text-align: center;
              font-size: 28px;
              line-height: 1;
            }
            .top-menu__icon--footer {
              font-size: 20px;
              line-height: 1;
            }
            .top-menu__name {
              display: table-cell;
              width: 300px;
              vertical-align: middle;
              height: 24px;
              font-weight: 700;
            }
            .follow-widget {
              border: 5px solid #ccc;
              background-color: #fff;
              padding: 10px 10px 15px;
            }
            .follow-widget__title {
              font-size: 13px;
              font-weight: 700;
              text-align: center;
              color: #7ebf41;
            }
            .follow-widget__list {
              font-size: 40px;
              line-height: 1;
              overflow: hidden;
            }
            .follow-widget__item {
              float: left;
              width: 33.333333%;
              text-align: center;
            }
            .follow-widget__icon {
              color: #fff;
            }
            .icon-color-facebook {
              color: #3b5998;
            }
            .icon-color-twitter {
              color: #1dcaff;
            }
            .icon-color-pinterest {
              color: #bd081c;
            }
            .adsense,
            .adsense-label {
              text-align: center;
            }
            .adsense-label {
              margin: 0;
              line-height: 1;
              font-size: 10px;
              color: #aaa;
            }
            .lightbox__close {
              position: fixed;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
            }
            .lifestyle {
              margin-left: auto;
              margin-right: auto;
            }
            .lifestyle__header {
              display: block;
              height: 60px;
              width: 100%;
              background-color: #fff;
              border-bottom: 5px solid;
              border-image: linear-gradient(
                  90deg,
                  #e9b8b8,
                  #edc7aa 16.67%,
                  #e5dcb0 33.33%,
                  #a4ceb8 49.48%,
                  #a4cbd6 66.15%,
                  #aeb1cc 82.81%,
                  #cbb3c7
                )
                1;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .lifestyle__logo {
              height: 23px;
              cursor: pointer;
            }
            @media screen and (min-width: 560px) {
              .lifestyle {
                margin-left: auto;
                margin-right: auto;
              }
              .lifestyle__header {
                height: 70px;
                width: 100%;
                background-color: #fff;
                border-bottom: 5px solid;
                border-image: linear-gradient(
                    90deg,
                    #e9b8b8,
                    #edc7aa 16.67%,
                    #e5dcb0 33.33%,
                    #a4ceb8 49.48%,
                    #a4cbd6 66.15%,
                    #aeb1cc 82.81%,
                    #cbb3c7
                  )
                  1;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .lifestyle__logo {
                height: 30px;
                cursor: pointer;
              }
              .lifestyle-themes {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: auto;
                gap: 10px 10px;
              }
              .lifestyle-themes__link {
                display: flex;
                align-items: center;
                width: 100%;
                color: #333;
              }
              .lifestyle-themes__link:hover {
                opacity: 0.7;
                text-decoration: none;
              }
              .lifestyle-themes__thumbnail {
                flex: 0 0;
              }
              .lifestyle-themes__image {
                display: block;
                background-size: cover;
                background-position: 50%;
                width: 50px;
                height: 50px;
                border-radius: 10px;
              }
              .lifestyle-themes__thumbnail + .lifestyle-themes__title {
                margin-left: 10px;
              }
              .lifestyle-themes__title {
                font-size: 12px;
                line-height: 1.4;
                flex: 1 0;
                font-weight: 700;
              }
              .lifestyle-side-card {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: auto;
                gap: 10px 10px;
              }
              .lifestyle-side-card__header {
                display: flex;
                align-items: center;
                width: 100%;
                margin-bottom: 5px;
              }
              .lifestyle-side-card__image {
                display: block;
                width: 25px;
                height: 25px;
                border-radius: 5px;
                margin-right: 10px;
              }
              .lifestyle-side-card__title {
                font-size: 12px;
                line-height: 1.4;
                font-weight: 700;
              }
              .lifestyle-side-card__content {
                display: table-cell;
                vertical-align: center;
              }
              .lifestyle-side-card__link {
                -webkit-border-radius: 10px;
                -moz-border-radius: 10px;
                -ms-border-radius: 10px;
                -o-border-radius: 10px;
                border-radius: 10px;
                padding: 10px;
                border: 1px solid #f2f2f2;
                color: #333;
                display: block;
                height: 100%;
              }
              .lifestyle-side-card__link:hover {
                opacity: 0.7;
                text-decoration: none;
              }
              .lifestyle-side-card__cover {
                width: 60px;
                height: 60px;
                border-radius: 10px;
              }
              .lifestyle-side-card__name {
                font-size: 14px;
                font-weight: 700;
                margin-left: 10px;
                color: #333;
                white-space: normal;
              }
              .lifestyle-side-card__summary {
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 10px;
                line-height: 1.4;
                max-height: 2.8em;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              }
            }
            .info {
              width: 100%;
              margin-bottom: 20px;
              background: #f2f2f2;
              padding: 1em;
              border: 1px solid #ccc;
            }
            .info__title {
              display: table;
              width: 100%;
              margin-bottom: 10px;
            }
            .info__content {
              display: flex;
            }
            .info__name,
            .info__thumbnail {
              vertical-align: top;
            }
            .info__thumbnail {
              width: 76px;
              padding-right: 10px;
            }
            .info__thumbnail-large {
              width: 122px;
              padding-right: 10px;
            }
            .info__image,
            .info__image img {
              width: 66px;
              height: 66px;
            }
            .info__image-large,
            .info__image-large img {
              width: 112px;
              height: 112px;
            }
            .info__description {
              width: 100%;
              margin-bottom: 7px;
            }
            .info__notice {
              margin-top: 10px;
              font-size: 11px;
              color: #aaa;
              line-height: 1.4;
            }
            .info__text {
              max-height: 3.2em;
              font-size: 13px;
              line-height: 1.6;
              margin: 2px 0 0;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
            .info__review {
              color: #f90;
              font-weight: 700;
              font-size: 12px;
            }
            .info__review [class^="review-"] {
              margin-bottom: -1px;
            }
            .info__review-count {
              font-size: 11px;
            }
            .info__category {
              font-size: 10px;
              color: #999;
              line-height: 1.4;
              font-weight: 400;
            }
            .info__detail + .info-hotel__title {
              margin-top: 10px;
            }
            .info__button-link {
              width: 100%;
            }
            .info__button-link + .info-hotel__title {
              margin-top: 10px;
            }
            .info__button-link-group {
              margin-top: 6px;
            }
            .info__button__icon--tel {
              font-size: 2em;
              line-height: 0;
              margin-left: 5px;
              margin-right: -10px;
            }
            .info__button__tel {
              border-radius: 40px;
            }
            .info__name h3,
            h3.info__name__link {
              display: inline-block;
              border-bottom: 5px solid;
              border-image: linear-gradient(270deg, #fb8d3d, #f9344c) 1;
            }
            .info__name,
            .info__name__link,
            .info__name h3,
            h3.info__name__link {
              width: 100%;
              font-weight: 700;
              color: #333;
              line-height: 1.4;
              font-size: 16px;
              text-decoration: none;
            }
            .info__name {
              display: table-cell;
            }
            .info__name__link {
              display: block;
            }
            .info__button-description {
              margin: 0;
              font-weight: 700;
              font-size: 12px;
              line-height: 1.4;
              background-color: #fff;
            }
            .info__data__image {
              display: inline;
              width: auto;
              height: 20px;
              vertical-align: sub;
            }
            .info__coupon {
              margin: 10px 0 0;
              font-weight: 700;
              line-height: 1.4;
              background-color: #fff;
              padding: 5px;
              text-align: center;
              color: #333;
              border: 1px solid #ccc;
              width: 100%;
            }
            .info__coupon-image {
              float: left;
              margin-right: 10px;
            }
            .info__coupon-description {
              font-size: 14px;
              font-weight: 700;
              display: flex;
              align-items: center;
            }
            .info__coupon__value {
              color: #f9344c;
              font-size: 19px;
            }
            .info__coupon-subtitle {
              font-size: 12px;
              font-weight: 700;
              text-align: center;
              padding-top: 5px;
              margin: 10px 0;
              color: #aaa;
              line-height: 1.4;
              border-top: 1px solid #ccc;
            }
            .info__coupon-title {
              color: #7ebf41;
              font-weight: 700;
              margin: 0 0 5px;
              line-height: 1.4;
              text-align: left;
              border-bottom: 1px solid #f2f2f2;
              padding: 5px;
              font-size: 13px;
              overflow: hidden;
            }
            .info__coupon-title > a {
              color: #7ebf41;
            }
            .info__coupon-footer {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .info__coupon-logo {
              margin-right: 10px;
            }
            .info dl,
            .info ul {
              line-height: 1.6;
            }
            .info dl {
              display: table;
              margin-bottom: 2px;
              width: 100%;
            }
            .info dd,
            .info dt {
              display: table-cell;
              font-size: 13px;
              color: #aaa;
            }
            .info dt {
              padding-right: 5px;
              width: 1%;
              white-space: nowrap;
            }
            .info dd {
              width: 100%;
              word-break: break-all;
            }
            .info dd > a {
              text-decoration: underline;
            }
            .info i {
              padding: 0;
              font-size: 16px;
              line-height: 1.4;
            }
            .info-cosme .info__image {
              width: 150px;
              height: 150px;
            }
            .info-cosme .info__title {
              margin-bottom: 10px;
            }
            .info-cosme .info__name {
              border-bottom: 5px solid;
              border-image: linear-gradient(270deg, #fb8d3d, #f9344c) 1;
            }
            .info-cosme .button {
              background: #f9344c;
              border: solid #c72a3c;
              border-width: 1px 1px 5px;
              padding: 20px 5px;
              font-size: 13px;
              border-radius: 50px;
            }
            .info-cosme .button:hover {
              background: #fa6678;
            }
            .info-cosme .info__description {
              margin-top: 10px;
            }
            .info-cosme dd {
              color: #333;
            }
            .info-event dl,
            .info-matome dl,
            .info-plan dl {
              line-height: 1.4;
            }
            .info-event dd ul,
            .info-event dt ul,
            .info-matome dd ul,
            .info-matome dt ul,
            .info-plan dd ul,
            .info-plan dt ul {
              display: inline-block;
            }
            .info-event .info__text {
              margin-top: 5px;
            }
            .info-map {
              width: 100%;
              height: 200px;
            }
            .info-hotel {
              border-top: 1px solid #ccc;
              margin-top: 10px;
              text-align: center;
              width: 100%;
            }
            .info-hotel__content {
              position: relative;
              background-color: #fff;
              display: block;
              padding: 10px;
              margin-top: 10px;
            }
            .info-hotel__price {
              text-align: center;
              color: #f9344c;
              font-size: 24px;
              font-weight: 700;
              font-family: Verdana, Geneva, sans-serif;
              line-height: 1.6;
            }
            .info-hotel__map {
              -webkit-border-radius: 3px;
              -moz-border-radius: 3px;
              -ms-border-radius: 3px;
              -o-border-radius: 3px;
              border-radius: 3px;
              padding: 2px 5px;
              font-size: 10px;
              display: inline-block;
              border: 1px solid #333;
              font-weight: 700;
              text-align: center;
              background-color: #fff;
              text-decoration: none;
            }
            .info-hotel__more {
              background: -owg-linear-gradient(#fff, #f2f2f2);
              background: -webkit-linear-gradient(#fff, #f2f2f2);
              background: -moz-linear-gradient(#fff, #f2f2f2);
              background: -o-linear-gradient(#fff, #f2f2f2);
              background: linear-gradient(#fff, #f2f2f2);
              -webkit-border-radius: 3px;
              -moz-border-radius: 3px;
              -ms-border-radius: 3px;
              -o-border-radius: 3px;
              border-radius: 3px;
              background-color: #fff;
              position: relative;
              display: block;
              font-size: 12px;
              border: 1px solid #ccc;
              margin: 5px 5px 0;
              color: #333;
              font-weight: 700;
              line-height: 36px;
            }
            .info-hotel__more:hover {
              background: -owg-linear-gradient(#f2f2f2, #e5e5e5);
              background: -webkit-linear-gradient(#f2f2f2, #e5e5e5);
              background: -moz-linear-gradient(#f2f2f2, #e5e5e5);
              background: -o-linear-gradient(#f2f2f2, #e5e5e5);
              background: linear-gradient(#f2f2f2, #e5e5e5);
              text-decoration: none;
            }
            .info-hotel__link {
              background: -owg-linear-gradient(#7ebf41, #76b33d);
              background: -webkit-linear-gradient(#7ebf41, #76b33d);
              background: -moz-linear-gradient(#7ebf41, #76b33d);
              background: -o-linear-gradient(#7ebf41, #76b33d);
              background: linear-gradient(#7ebf41, #76b33d);
              background-color: #7ebf41;
              border-bottom: 5px solid #5c8c30;
              padding: 20px 5px;
              position: relative;
            }
            .info-hotel__dynamicpackage,
            .info-hotel__link {
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              -ms-border-radius: 5px;
              -o-border-radius: 5px;
              border-radius: 5px;
              font-weight: 700;
              display: block;
              font-size: 13px;
              text-align: center;
              line-height: 1.4;
              color: #fff;
            }
            .info-hotel__dynamicpackage {
              background-color: #f90;
              border-bottom: 5px solid #cc7a00;
              padding: 20px 0;
              transition: 0.2s linear;
            }
            .info-hotel__border {
              border-bottom: 1px solid #ccc;
              width: 100%;
              margin: 10px auto;
            }
            @media screen and (min-width: 560px) {
              .info {
                background: #f6f6f6;
                display: table;
                padding: 1em;
                border: 1px solid #ccc;
              }
              .info,
              .info__content {
                width: 100%;
              }
              .info__thumbnail {
                width: 200px;
                vertical-align: top;
              }
              .info__thumbnail .button {
                padding: 5px;
                margin-top: 5px;
                white-space: nowrap;
              }
              .info__description {
                padding-left: 1em;
              }
              .info__thumbnail-large {
                width: 170px;
                padding-right: 0;
              }
              .info__thumbnail-large .button {
                padding: 5px;
              }
              .info__image {
                margin-bottom: 10px;
              }
              .info__image,
              .info__image img {
                width: 100px;
                height: 100px;
              }
              .info__notice {
                text-align: center;
                font-size: 12px;
                color: #aaa;
                line-height: 1.4;
                margin-top: 10px;
              }
              .info__title {
                border-bottom: 5px solid;
                border-image: linear-gradient(270deg, #fb8d3d, #f9344c) 1;
              }
              .info__title,
              .info__title a {
                font-weight: 700;
                font-size: 20px;
                line-height: 1.4;
              }
              .info__title a {
                color: #333;
              }
              .info__text {
                max-height: 4.8em;
                font-size: 13px;
                line-height: 1.6;
                overflow: hidden;
                margin: 5px 0 0;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
              }
              .info__review {
                color: #f90;
                font-weight: 700;
                font-size: 14px;
              }
              .info__review [class^="review-"] {
                margin-bottom: -2px;
              }
              .info__review-count {
                font-size: 12px;
              }
              .info__category {
                font-size: 11px;
                color: #999;
                line-height: 1.4;
              }
              .info__button-link {
                text-align: center;
                width: 100%;
              }
              .info__button-link > .button,
              .info__button-link > .info-hotel__link {
                margin-left: auto;
                margin-right: auto;
                margin-top: 10px;
              }
              .info__button-link-group {
                padding: 0 5px;
                margin-top: 10px;
                position: relative;
                overflow: hidden;
              }
              .info__data__image {
                display: inline;
                width: auto;
                height: 20px;
                vertical-align: sub;
              }
              .info__coupon {
                margin: 10px 0 0;
                font-weight: 700;
                line-height: 1.4;
                background-color: #fff;
                padding: 5px;
                text-align: center;
                color: #333;
                border: 1px solid #ccc;
                display: table;
                width: 100%;
              }
              .info__coupon > .button,
              .info__coupon > .info-hotel__link {
                width: 300px;
                margin: 10px auto 5px;
              }
              .info__coupon-image {
                display: table-cell;
                vertical-align: top;
                padding: 10px;
              }
              .info__coupon-content {
                display: table-cell;
                vertical-align: top;
                width: 100%;
              }
              .info__coupon-button {
                width: 300px;
                margin: 5px auto;
              }
              .info__coupon-description {
                font-size: 15px;
                font-weight: 700;
                display: flex;
                align-items: center;
              }
              .info__coupon__value {
                color: #f9344c;
                font-size: 24px;
              }
              .info__coupon-subtitle {
                font-size: 12px;
                font-weight: 700;
                text-align: center;
                margin-top: 5px;
                color: #aaa;
              }
              .info__coupon-title {
                color: #7ebf41;
                font-weight: 700;
                margin: 0 5px 5px;
                line-height: 1.4;
                text-align: left;
                border-bottom: 1px solid #f2f2f2;
                padding: 5px;
                font-size: 14px;
                display: block;
              }
              .info__coupon-title > a {
                color: #7ebf41;
              }
              .info-coupon__more {
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                -ms-border-radius: 3px;
                -o-border-radius: 3px;
                border-radius: 3px;
                background-color: #f90;
                position: relative;
                display: block;
                font-size: 15px;
                border: 1px solid #cc7a00;
                margin: 10px 5px 0;
                color: #fff;
                font-weight: 700;
                padding: 10px 5px;
              }
              .info-coupon__more:hover {
                background-color: #ffad33;
                text-decoration: none;
              }
              .info__coupon-footer {
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .info__coupon-logo {
                margin-right: 10px;
              }
              .info dl,
              .info ul {
                line-height: 1.4;
              }
              .info dd,
              .info dt {
                display: inline;
                padding: 0;
                font-size: 13px;
                color: #aaa;
              }
              .info dd {
                word-break: break-all;
              }
              .info dd > a {
                text-decoration: underline;
              }
              .info-cosme .info__image {
                width: 200px;
                height: 200px;
              }
              .info-cosme .info__title {
                border-bottom: 5px solid;
                border-image: linear-gradient(270deg, #fb8d3d, #f9344c) 1;
                margin-bottom: 10px;
              }
              .info-cosme .button {
                background: #f9344c;
                border: solid #c72a3c;
                border-width: 1px 1px 5px;
                border-radius: 50px;
              }
              .info-cosme .button:hover {
                background: #fa6678;
              }
              .info-cosme dd {
                color: #333;
                font-size: 15px;
              }
              .info-event .info__image,
              .info-matome .info__image,
              .info-plan .info__image {
                width: 200px;
                height: 200px;
              }
              .info-event .info__title,
              .info-matome .info__title,
              .info-plan .info__title {
                border-bottom: 5px solid;
                border-image: linear-gradient(270deg, #fb8d3d, #f9344c) 1;
                margin-bottom: 10px;
              }
              .info-event dt,
              .info-matome dt,
              .info-plan dt {
                display: none;
              }
              .info-event dd,
              .info-matome dd,
              .info-plan dd {
                color: #333;
              }
              .info-event dd > ul,
              .info-event dt > ul,
              .info-matome dd > ul,
              .info-matome dt > ul,
              .info-plan dd > ul,
              .info-plan dt > ul {
                display: inline-block;
              }
              .info-event i,
              .info-matome i,
              .info-plan i {
                font-size: 15px;
              }
              .info-event .info__description .info__image {
                width: 200px;
                height: 200px;
              }
              .info-event .info__description .info__title {
                border-bottom: 5px solid;
                border-image: linear-gradient(270deg, #fb8d3d, #f9344c) 1;
                margin-bottom: 10px;
              }
              .info-event .info__description dt {
                display: none;
              }
              .info-event .info__description dd {
                color: #333;
              }
              .info-map {
                width: 100%;
                height: 600px;
              }
              .info-hotel {
                border-top: 1px solid #ccc;
                margin-top: 10px;
                text-align: center;
                width: 100%;
              }
              .info-hotel__content {
                position: relative;
                background-color: #fff;
                display: block;
                padding: 10px;
              }
              .info-hotel__price {
                text-align: center;
                color: #f9344c;
                font-size: 24px;
                font-weight: 700;
                font-family: Verdana, Geneva, sans-serif;
                line-height: 1.6;
                margin-bottom: -10px;
              }
              .info-hotel__button {
                width: 300px;
                margin-left: auto;
                margin-right: auto;
              }
              .info-hotel__title {
                text-align: center;
                font-size: 12px;
                font-weight: 700;
                margin: 0 0 -8px;
                color: #7ebf41;
                padding-top: 5px;
                line-height: 1.4;
              }
              .info-hotel__link {
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                -ms-border-radius: 3px;
                -o-border-radius: 3px;
                border-radius: 3px;
                background: #f90;
                border: 1px solid #f90;
                border-bottom: 5px solid #cc7a00;
                color: #fff;
                cursor: pointer;
                font-weight: 700;
                text-align: center;
                transition: 0.2s linear;
                height: auto;
                position: relative;
                display: block;
                font-size: 17px;
                padding: 18px 0;
              }
              .info-hotel__link:hover {
                background: #ffad33;
                text-decoration: none;
              }
              .info-hotel__map {
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                -ms-border-radius: 3px;
                -o-border-radius: 3px;
                border-radius: 3px;
                padding: 2px 5px;
                font-size: 10px;
                display: inline-block;
                border: 1px solid #333;
                font-weight: 700;
                text-align: center;
                background-color: #fff;
                text-decoration: none;
              }
              .info-hotel__map:hover {
                color: #549ab3;
                border-color: #ccc;
              }
              .info-hotel__label {
                display: table-cell;
                vertical-align: middle;
                margin: 0;
                line-height: 0;
                text-align: right;
                width: 42%;
              }
              .info-hotel__label img {
                display: inline;
                width: auto;
                height: 20px;
              }
              .info-hotel-campaign:before,
              .info-hotel-coupon:before,
              .info-hotel-rakuten-sale,
              .info-hotel-recommend:before {
                font-size: 10px;
                color: #fff;
                font-weight: 700;
                padding: 0 5px;
                position: absolute;
                left: -1px;
                top: -1px;
                line-height: 1.4;
                background-color: #f9344c;
              }
              .info-hotel-rakuten-sale {
                display: flex;
                align-items: start;
              }
              .info-hotel-rakuten-sale__icon {
                color: #fef407;
                font-size: 1.1em;
                line-height: 1;
                margin-right: 3px;
              }
              .info-hotel-rakuten-sale--widget {
                display: flex;
                align-items: start;
                background-color: #f9344c;
                font-size: 10px;
                color: #fff;
                font-weight: 700;
                padding: 0 5px;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                line-height: 1.4;
                border-radius: 5px 5px 0 0;
              }
              .info-hotel-recommend:before {
                content: "スタッフおすすめ";
              }
              .info-hotel-coupon:before {
                content: "クーポンあり";
              }
              .info-hotel-campaign:before {
                content: "キャンペーンあり";
              }
              .info-hotel-recommend.price-null:before,
              .info-hotel-recommend[data-hotel-value="is-null"]:before {
                content: none;
                padding: 0;
              }
              .info-hotel__link-icon {
                position: absolute;
                right: 10px;
                top: 50%;
                line-height: 20px;
                margin: -10px 0 0;
                color: #aaa;
              }
              .info-hotel__dynamicpackage {
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                -ms-border-radius: 3px;
                -o-border-radius: 3px;
                border-radius: 3px;
                background-color: #7ebf41;
                border-bottom: 5px solid #5c8c30;
                display: block;
                text-align: center;
                font-size: 17px;
                color: #fff;
                font-weight: 700;
                line-height: 1.4;
                padding: 18px 0;
                transition: 0.2s linear;
              }
              .info-hotel__dynamicpackage:hover {
                background-color: #92bf67;
                text-decoration: none;
              }
              .info-hotel__border {
                border-bottom: 1px solid #ccc;
                width: 100%;
                margin: 15px auto;
              }
              .info-special {
                border-top: 1px solid #ccc;
                margin-top: 10px;
              }
              .info-cosme .button {
                padding: 18px 0;
                font-size: 17px;
              }
            }
            .widget-topic-recommend {
              white-space: nowrap;
              background-color: #fff;
            }
            .widget-topic-recommend__head {
              font-size: 14px;
              background-color: #333;
              text-align: center;
              color: #fff;
              line-height: 1.4;
              font-weight: 700;
              padding: 5px 10px;
              margin-top: 0;
            }
            .widget-topic-recommend__list {
              opacity: 1;
              overflow: hidden;
              font-size: 0;
            }
            .widget-topic-recommend__item {
              display: block;
              white-space: normal;
              min-height: 94px;
              padding: 0 8px;
              border-bottom: 1px solid #ccc;
              clear: both;
              position: relative;
            }
            .widget-topic-recommend__item[id^="div-gpt-ad"] {
              text-align: center;
              margin-left: -8px;
              margin-right: -8px;
            }
            .widget-topic-recommend__image {
              float: left;
              width: 80px;
              height: 80px;
              margin-right: 10px;
            }
            .widget-topic-recommend__thumbnail {
              margin: 5px 0;
              width: 80px;
              height: 80px;
              display: inline-block;
              overflow: hidden;
              transition: opacity 0.5s;
            }
            .widget-topic-recommend__body {
              text-align: left;
              font-size: 14px;
              line-height: 18px;
              padding: 10px 0 0;
              overflow: hidden;
            }
            .widget-topic-recommend__title {
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              font-size: 14px;
              font-weight: 700;
              text-decoration: none;
              line-height: 1.4;
              color: #333;
              max-height: 4.2em;
              height: auto;
            }
            .widget-topic-recommend__category {
              display: none;
            }
            .widget-topic-recommend__date,
            .widget-topic-recommend__media {
              margin: 2px 0 0;
              font-size: 10px;
              color: #999;
              line-height: 1.4;
              height: 1.4em;
              overflow: hidden;
            }
            .article__buttonContent {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .article__button1col {
              flex-grow: 1;
            }
            .article__button2col {
              width: 49%;
            }
            .article__button {
              background: -owg-linear-gradient(#fff, #f2f2f2);
              background: -webkit-linear-gradient(#fff, #f2f2f2);
              background: -moz-linear-gradient(#fff, #f2f2f2);
              background: -o-linear-gradient(#fff, #f2f2f2);
              background: linear-gradient(#fff, #f2f2f2);
              background-color: #fff;
              color: #333;
              text-align: center;
              padding: 15px 25px 15px 15px;
              margin: 0 auto 40px;
              transition: 0.2s linear;
              font-size: 16px;
              font-weight: 700;
              display: block;
              cursor: pointer;
              width: 100%;
              position: relative;
              border: 1px solid #ccc;
              border-radius: 5px;
            }
            .article__button:hover {
              opacity: 0.8;
              text-decoration: none;
            }
            .article__buttonIcon {
              position: absolute;
              right: 5px;
              top: 50%;
              transform: translateY(-50%);
              font-size: 20px;
            }
            .article__accordion {
              border: 1px solid #ccc;
              border-radius: 3px;
              padding: 10px;
              cursor: pointer;
              margin-top: 20px;
              position: relative;
            }
            .article__accordion + .article__accordion {
              margin-top: 10px;
            }
            .article__accordion--title {
              line-height: 1.4;
              font-size: 16px;
              font-weight: 700;
              margin-bottom: 5px;
            }
            .article__accordion--contents {
              line-height: 1.8;
              font-size: 15px;
              max-height: 1.8em;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #aaa;
            }
            .article__accordion--contents.is-open {
              max-height: none;
              white-space: normal;
              color: #333;
            }
            .article__accordion--icon {
              padding-left: 5px;
              line-height: 1;
              vertical-align: text-bottom;
            }
            .article__accordion--icon.is-open:before {
              transform: rotate(180deg);
            }
            .article__accordion--more {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
            }
            .article__timezone {
              padding: 10px;
              border: 1px solid #ccc;
            }
            .article__timezone-wrapper {
              align-items: center;
              display: flex;
              justify-content: center;
            }
            .article__timezone-contents--title {
              font-size: 18px;
              font-weight: 700;
              margin-left: 10px;
            }
            .article__timezone-contents--text {
              font-size: 12px;
              line-height: 1.6;
              text-align: center;
            }
            .article__timezone-contents--button {
              background: #fff;
              border: solid #ccc;
              border-width: 1px 1px 5px;
              display: block;
              text-align: center;
              padding: 10px;
              color: #333;
              border-radius: 5px;
              font-weight: 700;
            }
            .article__currency {
              padding: 15px;
              border: 1px solid #ccc;
              text-align: center;
            }
            .article__currency-text {
              font-weight: 700;
              font-size: 16px;
            }
            .article__currency-text--bold {
              font-size: 24px;
              font-weight: 700;
              line-height: 1.6;
            }
            .article__currency-note {
              font-size: 10px;
              color: #aaa;
              line-height: 1.4;
            }
            .article__more-strong {
              border-bottom: 5px solid #7ebf41;
              font-size: 1em;
              font-weight: 700;
              line-height: 1.8;
            }
            .article__block-gray {
              padding: 10px;
              background-color: #f2f2f2;
            }
            .article__tag {
              display: flex;
              flex-wrap: wrap;
              margin: 10px 0;
            }
            .article__tag-item {
              line-height: 1.4;
              border: 1px solid #ccc;
              border-radius: 5px;
              background-color: #fff;
              padding: 5px 8px;
              text-decoration: none;
              cursor: pointer;
              color: #333;
              font-size: 11px;
              font-weight: 700;
              margin: 0 10px 10px 0;
            }
            .article__tag-item:hover {
              text-decoration: none;
              background-color: #f2f2f2;
            }
            .article__image-panel {
              display: flex;
              flex-wrap: wrap;
              margin: 10px 0;
            }
            .article__image-panel-link {
              display: block;
              width: 32%;
              margin: 5px 0 5px 2%;
            }
            .article__image-panel-link:hover {
              text-decoration: none;
            }
            .article__image-panel-item:before {
              position: absolute;
              content: "";
              width: 100%;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background-color: rgba(0, 0, 0, 0.1);
              border-radius: 5px;
              z-index: 1;
            }
            .article__image-panel-item {
              position: relative;
              overflow: hidden;
              text-align: center;
              word-break: break-all;
              width: 32%;
              height: 120px;
              background-size: cover;
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-size: 13px;
              font-weight: 700;
              text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
              line-height: 1.4;
            }
            .article__image-panel-image {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .article__image-panel-link:nth-child(3n + 1) {
              margin-left: 0;
            }
            .article__image-panel-text {
              z-index: 1;
            }
            .article__annotation {
              background-color: #f2f2f2;
              font-size: 12px;
              color: #777;
              line-height: 1.6;
              padding: 15px;
              margin: 20px 0;
            }
            .goodsItem__price {
              font-weight: 400;
              color: #fff;
              font-size: 11px;
              text-align: center;
              margin-bottom: -5px;
              margin-top: 2px;
            }
            .goodsItem__minPrice {
              font-weight: 700;
              color: #f9344c;
              font-size: 20px;
            }
            .goodsItem__tax {
              font-weight: 700;
              font-size: 12px;
              color: #f9344c;
            }
            @media screen and (min-width: 560px) {
              .article__container {
                max-width: 640px;
                margin-left: auto;
                margin-right: auto;
                padding-top: 20px;
              }
              .article__buttonContent {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
              }
              .article__button1col {
                flex-grow: 1;
              }
              .article__button2col {
                width: 49%;
              }
              .article__button {
                border-radius: 5px;
                background: -owg-linear-gradient(#fff, #f2f2f2);
                background: -webkit-linear-gradient(#fff, #f2f2f2);
                background: -moz-linear-gradient(#fff, #f2f2f2);
                background: -o-linear-gradient(#fff, #f2f2f2);
                background: linear-gradient(#fff, #f2f2f2);
                background-color: #fff;
                color: #333;
                text-align: center;
                padding: 15px;
                margin: 0 auto 40px;
                transition: 0.2s linear;
                font-size: 16px;
                font-weight: 700;
                display: block;
                cursor: pointer;
                width: 100%;
                border: 1px solid #ccc;
                position: relative;
              }
              .article__button:hover {
                opacity: 0.8;
                text-decoration: none;
              }
              .article__buttonIcon {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 20px;
              }
              .article__accordion {
                border: 1px solid #ccc;
                border-radius: 3px;
                padding: 10px;
                cursor: pointer;
                margin-top: 20px;
                position: relative;
              }
              .article__accordion + .article__accordion {
                margin-top: 10px;
              }
              .article__accordion--title {
                line-height: 1.4;
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 5px;
              }
              .article__accordion--contents {
                line-height: 1.8;
                font-size: 16px;
                max-height: 1.8em;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #aaa;
              }
              .article__accordion--contents.is-open {
                max-height: none;
                white-space: normal;
                color: #333;
              }
              .article__accordion--icon {
                padding-left: 5px;
                line-height: 1;
                vertical-align: text-bottom;
              }
              .article__accordion--icon.is-open:before {
                transform: rotate(180deg);
              }
              .article__accordion--more {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
              }
              .article__timezone {
                padding: 20px;
                border: 1px solid #ccc;
                display: flex;
                align-items: center;
              }
              .article__timezone-contents {
                margin-left: 20px;
              }
              .article__timezone-contents--title {
                font-size: 21px;
                font-weight: 700;
              }
              .article__timezone-contents--text {
                font-size: 14px;
                line-height: 1.6;
              }
              .article__timezone-contents--button {
                background: #fff;
                border: solid #ccc;
                border-width: 1px 1px 5px;
                display: inline-block;
                text-align: center;
                padding: 10px;
                color: #333;
                border-radius: 5px;
                font-weight: 700;
                font-size: 14px;
              }
              .article__timezone-contents--button:hover {
                text-decoration: none;
                background: #f2f2f2;
              }
              .article__currency {
                padding: 15px;
                border: 1px solid #ccc;
              }
              .article__currency-text {
                font-weight: 700;
                font-size: 16px;
              }
              .article__currency-text--bold {
                font-size: 24px;
                line-height: 1.6;
              }
              .article__currency-note {
                font-size: 12px;
                color: #aaa;
              }
              .article__more-strong {
                border-bottom: 5px solid #7ebf41;
                font-size: 1em;
                font-weight: 700;
                line-height: 1.8;
              }
              .article__block-gray {
                padding: 10px;
                background-color: #f2f2f2;
              }
              .article__tag {
                display: flex;
                flex-wrap: wrap;
                margin: 10px 0;
              }
              .article__tag-item {
                line-height: 1.4;
                border: 1px solid #ccc;
                border-radius: 5px;
                background-color: #fff;
                padding: 5px 8px;
                text-decoration: none;
                cursor: pointer;
                color: #333;
                font-size: 13px;
                font-weight: 400;
                margin: 0 10px 10px 0;
              }
              .article__tag-item:hover {
                text-decoration: none;
                background-color: #f2f2f2;
              }
              .article__image-panel {
                display: flex;
                flex-wrap: wrap;
                margin: 10px 0;
              }
              .article__image-panel-link {
                display: block;
                width: 32%;
                margin: 5px 0 5px 2%;
              }
              .article__image-panel-link:hover {
                text-decoration: none;
              }
              .article__image-panel-item:before {
                position: absolute;
                content: "";
                width: 100%;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgba(0, 0, 0, 0.1);
                border-radius: 5px;
              }
              .article__image-panel-item {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                word-break: break-all;
                width: 100%;
                height: 150px;
                background-size: cover;
                border-radius: 5px;
                color: #fff;
                font-size: 16px;
                font-weight: 700;
                text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
                line-height: 1.4;
              }
              .article__image-panel-link:nth-child(3n + 1) {
                margin-left: 0;
              }
              .article__image-panel-text {
                z-index: 1;
              }
              .article__annotation {
                background-color: #f2f2f2;
                font-size: 12px;
                color: #777;
                line-height: 1.6;
                padding: 15px 20px;
                margin: 20px 0;
              }
              .goodsItem__price {
                font-weight: 400;
                color: #fff;
                font-size: 12px;
                text-align: center;
                margin-bottom: -5px;
                margin-top: 2px;
              }
              .goodsItem__minPrice {
                font-weight: 700;
                color: #f9344c;
                font-size: 20px;
              }
              .goodsItem__tax {
                font-weight: 700;
                font-size: 12px;
                color: #f9344c;
              }
            }
            .topic-top__image {
              position: relative;
              width: 100%;
              height: 250px;
            }
            .topic-top__quote {
              position: absolute;
              bottom: 0;
              right: 0;
              background-color: #000;
              color: #fff;
              font-size: 10px;
              line-height: 1.4;
              padding: 2px 5px;
              margin: 0;
            }
            .topic-top__quote a {
              color: #fff;
              text-decoration: none;
            }
            .topic-top__summary {
              line-height: 1.8;
              font-size: 15px;
            }
            .topic-index {
              background-color: #fafafa;
              border-radius: 10px;
              padding: 15px;
            }
            .topic-index__title {
              font-size: 14px;
              font-weight: 700;
              color: #333;
              line-height: 1.4;
              margin-bottom: 5px;
            }
            .topic-index__item {
              font-size: 14px;
              line-height: 1.6;
            }
            .topic-index__link {
              color: #555;
              padding-left: 15px;
              display: block;
              text-decoration: none;
            }
            .topic-index__icon {
              color: #aaa;
              margin-left: -15px;
            }
            .topic-index__coupon:after {
              content: "割引あり";
              display: inline;
              font-size: 10px;
              font-weight: 700;
              color: #f90;
            }
            .topic-index__coupon-label:after {
              border-radius: 5px;
              content: "割引あり";
              display: inline-block;
              font-size: 10px;
              font-weight: 700;
              background-color: #f9344c;
              color: #fff;
              padding: 0 5px;
              line-height: 1.4;
            }
            header.topic-index__button {
              text-align: center;
              color: #aaa;
              display: block;
              border: none;
              border-top: 1px dashed #ccc;
              margin-top: 5px;
              padding-top: 5px;
              font-size: 13px;
              line-height: 1.4;
              padding-right: 0;
              background: #fafafa;
            }
            .topic-index__relative {
              border-top: 1px solid #ccc;
              margin: 5px -10px 0;
              padding: 3px 5px 0;
            }
            .topic-index__relative:before {
              content: "おすすめ関連記事";
              display: inline-block;
              background-color: #f2f2f2;
              padding: 0 5px;
              font-size: 13px;
              font-weight: 700;
              color: #777;
            }
            .icon-asort {
              color: #7ebf41;
            }
            .topic-hotel-list {
              overflow: inherit;
              background-color: #f2f2f2;
              border-left: 1px solid #ccc;
              border-right: 1px solid #ccc;
            }
            .topic-hotel-list__title {
              padding: 5px 10px;
              font-size: 14px;
              line-height: 1.4;
              color: #fff;
              font-weight: 700;
              background-color: #f9344c;
            }
            .topic-hotel-list__item {
              border-right: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              background-color: #fff;
            }
            .topic-hotel-list__item:nth-child(3n + 3) {
              border-right: none;
            }
            .topic-hotel-list__more {
              display: block;
              border: 1px solid #ccc;
              border-top: none;
              text-align: center;
              color: #777;
              padding: 10px;
              font-weight: 700;
              background-color: #fff;
            }
            .topic-hotel-item {
              position: relative;
              padding: 5px;
            }
            .topic-hotel-item__link {
              color: #333;
              transition: 0.2s linear;
            }
            .topic-hotel-item__link:hover {
              opacity: 0.7;
              text-decoration: none;
            }
            .topic-hotel-item__thumbnail {
              width: 100%;
            }
            .topic-hotel-item__image {
              width: 100%;
              height: 80px;
              position: relative;
              overflow: hidden;
            }
            .topic-hotel-item__picture {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .topic-hotel-item__content {
              position: relative;
              height: 53px;
              overflow: hidden;
            }
            .topic-hotel-item__name {
              line-height: 1.2;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              max-height: 2.4em;
              color: #333;
              font-size: 11px;
              font-weight: 700;
            }
            .topic-hotel-item__price {
              color: #f9344c;
              font-family: Verdana, Geneva, sans-serif;
              font-weight: 700;
              font-size: 12px;
              text-align: left;
              line-height: 1.2em;
            }
            .topic-hotel-item__review {
              line-height: 1;
            }
            .topic-hotel-item__tooltip {
              display: none;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 50px;
              padding: 5px;
              background-color: #f90;
              line-height: 1.4;
              box-shadow: 0 0 10px #333;
            }
            .topic-hotel-item__tooltip.is-show {
              display: block;
            }
            .topic-hotel-item__tooltip:after {
              position: absolute;
              bottom: -20px;
              left: 50%;
              margin-left: -10px;
              content: "";
              border: 10px solid transparent;
              border-top-color: #f90;
            }
            .topic-hotel-item__button {
              font-size: 10px;
              padding: 8px 3px;
            }
            .topic-hotel-item__open {
              padding: 8px 3px;
              background: linear-gradient(#fff, #f2f2f2);
              border-radius: 5px;
              border: 1px solid #ccc;
              color: #333;
              font-weight: 700;
              display: block;
              text-align: center;
              font-size: 12px;
              line-height: 1.4;
              position: relative;
              text-decoration: none;
            }
            .topic-hotel-item__bottom {
              height: 35px;
              background-color: transparent;
              border: none;
              padding: 0;
            }
            .top-menu__title {
              font-size: 12px;
              padding: 5px 10px;
              background-color: #7ebf41;
              text-align: center;
            }
            .top-menu__title,
            .top__goto {
              font-weight: 700;
              color: #fff;
              line-height: 1.4;
            }
            .top__goto {
              background-color: #2a5194;
              font-size: 10px;
              padding: 1px 3px;
              position: absolute;
              top: 0;
              left: 0;
            }
            .sponsored {
              display: inline-block;
              font-size: 14px;
              color: #aaa;
              white-space: nowrap;
              margin-bottom: 5px;
            }
            .telAnker {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 5px 0;
              background-color: rgba(0, 0, 0, 0.5);
              z-index: 12;
            }
            .telAnker__wrapper {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              margin-left: auto;
              margin-right: auto;
              padding: 0 5px 10px;
            }
            .telAnker__title {
              color: #fff;
              font-size: 12px;
              font-weight: 700;
              text-align: center;
            }
            .telAnker__icon {
              font-size: 2em;
            }
            .telAnker__buttonTel {
              background: #549ab3;
              border: solid #3c6d80;
              border-width: 1px 1px 5px;
              padding: 15px 5px;
              font-size: 14px;
              border-radius: 50px;
              color: #fff;
              font-weight: 700;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .telAnker__buttonTel [class^="icon-"] {
              margin-right: 3px;
            }
            .telAnker__buttonTel:hover {
              text-decoration: none;
              background-color: #78a3b3;
            }
            .telAnker__buttonInfo {
              background: #f9344c;
              border: solid #c72a3c;
              border-width: 1px 1px 5px;
              padding: 15px 5px;
              font-size: 14px;
              border-radius: 50px;
              color: #fff;
              font-weight: 700;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .telAnker__buttonInfo [class^="icon-"] {
              margin-left: 5px;
            }
            .telAnker__buttonInfo:hover {
              text-decoration: none;
              background-color: #fa6678;
            }
            @media screen and (min-width: 560px) {
              .topic__wrapper {
                display: flex;
              }
              .topic__aside {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
              }
              .topic-aside__content {
                position: sticky;
                position: -webkit-sticky;
                bottom: 0;
              }
            }
            p.article__accordion--contents {
              max-height: inherit;
              overflow: inherit;
              white-space: inherit;
              text-overflow: inherit;
            }
            @media screen and (min-width: 560px) {
              p.article__accordion--contents {
                max-height: inherit;
                overflow: inherit;
                white-space: inherit;
                text-overflow: inherit;
              }
            }
            .spot-review__title {
              font-weight: 700;
              line-height: 1.4;
              display: inline-block;
            }
            .spot-review__date {
              white-space: nowrap;
              font-size: 11px;
              line-height: 1.4;
              color: #aaa;
            }
            .spot-review__summary {
              font-size: 14px;
              line-height: 1.4;
              max-height: 4.2em;
              -webkit-line-clamp: 3;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .spot-review__credit {
              font-size: 11px;
              color: #aaa;
              line-height: 1.4;
              text-align: right;
            }
            .spot-review__credit-image {
              height: 16px;
              display: inline-block;
              vertical-align: top;
            }
            .spot-review__bottom {
              margin-top: 5px;
            }
            .spot-review__more {
              font-size: 12px;
              font-weight: 700;
              color: #549ab3;
              line-height: 2;
              text-decoration: none;
              display: block;
            }

            @font-face {
              font-family: icon;
              src: url(http://localhost:3000/icon.ttf?r5m4zg=)
                  format("truetype"),
                url(http://localhost:3000/icon.woff?r5m4zg=) format("woff"),
                url(http://localhost:3000/icon.svg?r5m4zg=#icon) format("svg");
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
          `}
        </style>
      </amp-selector>
    </div>
  </div>
);

export default Index;
