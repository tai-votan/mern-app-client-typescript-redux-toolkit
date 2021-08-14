import { useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { ArticleItem } from 'components/article-item';
import Container from '@/layouts/container';
import { ArticleItemLargeProps } from '@/interfaces';
import { getLatestArticle } from '@/services/home';

function Home(props: { articles: ArticleItemLargeProps[] }) {
  useEffect(() => {
    async function get() {
      const res = await getLatestArticle();
      console.log('File: index.tsx - Func: get - Params: { res }', res);
    }
    get();
  }, []);
  const { articles } = props;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="border rounded-t-md divide-y bg-white">
          {articles.map((article): any => (
            <ArticleItem
              key={article._id}
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
              likeCount={Math.floor(Math.random() * 1000)}
              commentCount={Math.floor(Math.random() * 100)}
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
  const articles = await getLatestArticle({ server: true });

  return {
    props: {
      articles: articles?.data?.docs || [],
    },
  };
};

export default Home;
