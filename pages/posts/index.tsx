import React from "react";
import { Post } from "../../store/models/posts";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Layout from "../../components/common/Layout";

const Posts = (): JSX.Element => {
  const dispatch = useDispatch<Dispatch>();
  const posts: Post[] = useSelector((state: RootState) => state.posts.list);
  const loading: boolean = useSelector(
    (state: RootState) => state.posts.loading
  );

  return (
    <Layout>
      <div>
        <button onClick={() => dispatch.posts.getPostsAsync()}>getPosts</button>
        {loading && !posts && <h2>로딩중입니다...</h2>}
        {!loading && (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
                <button onClick={() => dispatch.posts.deleteOnePost(post.id)}>
                  DELETE
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default Posts;
