import React from "react";

const Parts = () => (
  <div>
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <div>
      <strong>
        <em>title</em>
      </strong>
    </div>
    <dl>
      <dd>dd</dd>
      <dt>dt</dt>
    </dl>
    <p className="article__quote">className="article__quote"</p>
    <table>
      <tr>
        <th>th</th>
        <td>td</td>
      </tr>
      <tr>
        <th>th</th>
        <td>td</td>
      </tr>
      <tr>
        <th>th</th>
        <td>td</td>
      </tr>
    </table>
    <a
      href="https://www.travelbook.co.jp"
      className="article__link"
      rel="nofollow"
      target="_blank"
      data-vars-category="{category}"
      data-vars-action="paragraphLink"
      data-vars-label="{href}"
      referrerpolicy="unsafe-url"
    >
      link
    </a>
    <p class="article__quote--cosme">
      <span class="icon-woman article__quote-icon"></span>
      すっきり、さっぱりなのにやさしい感じで、化粧水もどんどんなじんでいくような感触がうれしいです。トライアルセットの化粧水は30mlで、しっかり試せます。（30代前半／乾燥肌）
    </p>
    <figure>
      <amp-img
        src="https://images.unsplash.com/photo-1533225737818-2a9101586b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80"
        alt="hoge"
        height={100}
        width={100}
        layout="responsive"
      />
    </figure>
  </div>
);

export default Parts;
