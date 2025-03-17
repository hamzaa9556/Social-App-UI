import { FaDeleteLeft } from "react-icons/fa6";
import { useContext } from "react";
import { PostList } from "../store/List-post-store";
const WritePost = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card write-Post" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}

          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <FaDeleteLeft />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tags-styles">{tag}</span>
        ))}
        <div className="alert alert-info reactions" role="alert">
          This post has been reacted by {post.reaction} people.
        </div>
      </div>
    </div>
  );
};
export default WritePost;
