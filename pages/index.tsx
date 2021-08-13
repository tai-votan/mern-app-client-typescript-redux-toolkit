// import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  GetStaticProps,
  // GetStaticPaths, GetServerSideProps
} from 'next';
import { ArticleItem } from 'components/article-item';
import Container from 'layouts/container';
import request from 'utils/request';
import { ArticleItemLargeProps } from '@/interfaces';

function Home(props: { articles: ArticleItemLargeProps[] }) {
  console.log('File: index.tsx - Func: Home - Params: { props }', props);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="border rounded-t-md divide-y bg-white">
          {props.articles.map((article, index): any => (
            <ArticleItem
              key={index}
              avatar="/v1621748084728/nQ7lrJxnS.jpeg"
              name="Rahul"
              userName="mcxim"
              publishDate="May 27, 2021"
              slug="asynchronous-programming-in-javascript"
              title={article.title}
              category="Javascript"
              tags="javascript,learning,asynchronous"
              excerpt={article.excerpt}
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

export const getStaticProps: GetStaticProps = async () => {
  const articles = await request('/v2/latest-article', {
    params: {
      language: 'VN',
      page: 1,
      isIgnoreFeatureArticle: true,
    },
  });

  return {
    props: {
      articles: articles.data.docs,
    },
  };
};

export default Home;
