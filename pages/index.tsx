import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ArticleItem } from 'components/article-item';
import Container from 'layouts/container';
import request from 'utils/request';

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    function fetchArticle() {
      request('/v2/latest-article', {
        params: {
          language: 'VN',
          page: 1,
          isIgnoreFeatureArticle: true,
        },
      })
        .then((res) => setArticles(res?.data?.docs))
        .catch((err) => console.log(err));
    }
    fetchArticle();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="border rounded-t-md divide-y bg-white">
          {articles.map((_, index) => (
            <ArticleItem
              key={index}
              avatar="/v1621748084728/nQ7lrJxnS.jpeg"
              name="Rahul"
              userName="mcxim"
              publishDate="May 27, 2021"
              slug="asynchronous-programming-in-javascript"
              title="Asynchronous Programming in JavaScript"
              category="Javascript"
              tags="javascript,learning,asynchronous"
              excerpt={
                "They say time is the fourth measurement in our universe. I say that nonconcurrent(asynchronous) computer programs are the fourth element of your rationale. You wanna raise your coding to this new even out of authority? Let's read this post."
              }
              coverImage="/v1622095969334/EDkvIgxJ7.png"
              likeCount={10}
              commentCount={5}
            />
          ))}
        </div>
        <div className="w-full p-6 my-5 bg-white border rounded-md">
          <p className="text-lg text-center text-gray-600">
            {"You've reached the end! 👋"}
          </p>
        </div>
      </Container>
    </>
  );
}

export default Home;
