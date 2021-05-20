import Parts from "../../components/pats";
import { renderToString } from 'react-dom/server';

export default async (req, res) => {
  const response = {
    items: [
      {
        body: renderToString(<Parts />),
        title: 'タイトル１',
        image: 'https://images.unsplash.com/photo-1533225737818-2a9101586b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80',
      },
      {
        body: renderToString(<Parts />),
        title: 'タイトル２',
        image: 'https://images.unsplash.com/photo-1533225737818-2a9101586b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80',
      },
      {
        body: renderToString(<Parts />),
        title: 'タイトル３',
        image: 'https://images.unsplash.com/photo-1533225737818-2a9101586b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80',
      },
    ]
  };

  console.log(`response`, response)

  res.statusCode = 200;
  res.setHeader(
    "AMP-Access-Control-Allow-Source-Origin",
    "https://www.travelbook.co.jp"
  );
  res.setHeader(
    "Access-Control-Expose-Headers",
    "AMP-Access-Control-Allow-Source-Origin"
  );

  return res.json(response);
};
