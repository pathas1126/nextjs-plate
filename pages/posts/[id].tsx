import React from "react";
import Layout from "../../components/common/Layout";
import { request, RestMethod } from "../../utils/request";
import { Post } from "../../store/models/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter, NextRouter } from "next/dist/client/router";

interface PostOneProps {
  post: Post;
}

const PostOne = ({ post }: PostOneProps): JSX.Element => {
  const router: NextRouter = useRouter();
  return (
    <Layout>
      {router.isFallback && <h4>로딩...</h4>}
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const url: string = "https://jsonplaceholder.typicode.com/posts";
  const method: RestMethod = RestMethod.GET;
  const posts: Post[] = await request({ url, method });
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url: string = `https://jsonplaceholder.typicode.com/posts/${params?.id}`;
  const method: RestMethod = RestMethod.GET;
  const post: Post = await request({ url, method });
  return { props: { post }, revalidate: 1 };
};

export default PostOne;
