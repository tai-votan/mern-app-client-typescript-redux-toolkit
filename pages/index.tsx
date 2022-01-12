import { GetServerSideProps } from 'next';
import get from 'lodash/get';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ArticleItemLarge } from '@/components';
import Container from '@/layouts/container';
import { ArticleItemLargeProps } from '@/interfaces';
import { getAllPost } from '@/services/posts';

interface HomeProps {
  posts: ArticleItemLargeProps[];
}

function Home(props: HomeProps) {
  // useEffect(() => {
  //   async function get() {
  //     await getAllPost();
  //   }
  //   get();
  // }, []);
  const { posts } = props;

  return (
    <>
      <Container>
        <div className="border rounded-t-md divide-y bg-white">
          {posts.map((post: any) => (
            <ArticleItemLarge
              key={post._id}
              avatar={get(
                post,
                'author.photo',
                'https://cdn.hashnode.com/res/hashnode/image/upload/v1621748084728/nQ7lrJxnS.jpeg'
              ).replace('https://cdn.hashnode.com', '')}
              name={get(post, 'author.name')}
              userName={get(post, 'author.username')}
              publishDate={post.dateUpdated}
              slug="asynchronous-programming-in-javascript"
              title={post.title}
              category="Javascript"
              tags="javascript,learning,asynchronous"
              excerpt={post.brief}
              coverImage={post.coverImage?.replace(
                'https://cdn.hashnode.com',
                ''
              )}
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const res = await getAllPost();
  return {
    props: {
      posts: res?.posts || [],
      ...(await serverSideTranslations(locale || 'vi', ['common'])),
    },
  };
};

export default Home;
