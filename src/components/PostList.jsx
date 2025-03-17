import { useContext } from "react";
import WritePost from "./WritePost";
import { PostList as PostListStore } from "../store/List-post-store";
const PostList = () => {
  const { postList } = useContext(PostListStore);

  return (
    <>
      {postList.map((post) => (
        <WritePost key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
