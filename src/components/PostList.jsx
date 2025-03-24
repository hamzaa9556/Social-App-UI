import { useContext } from "react";
import WritePost from "./WritePost";
import { PostList as PostListStore } from "../store/List-post-store";
import Welcome from "./welcomemessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <Welcome />}
      {postList.map((post) => (
        <WritePost key={post.id} post={post} />
      ))}
    </>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
