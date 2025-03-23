import { useContext} from "react";
import WritePost from "./WritePost";
import { PostList as PostListStore } from "../store/List-post-store";
import Welcome from "./welcomemessage";
import Loading from "./Loadingmessage";
const PostList = () => {
  const { postList, fecthing } = useContext(PostListStore);


  return (
    <>
    {fecthing&&<Loading></Loading>}
      {!fecthing&&postList.length === 0 && <Welcome />}
      {!fecthing&&postList.map((post) => 
        <WritePost key={post.id} post={post}/> 
      )}
    </>
  );
};
export default PostList;
