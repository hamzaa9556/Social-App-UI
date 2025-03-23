import { useContext, useRef } from "react";
import { PostList } from "../store/List-post-store";
//import { useNavigation } from "react-router-dom";
const CreatPost = () => {
  const { addPost } = useContext(PostList);

  const user_IdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = user_IdElement.current.value;
    const postTitle = titleElement.current.value;
    const postBody = bodyElement.current.value;
    const reactions = reactionElement.current.value;
    const tags = tagsElement.current.value.split(/[\s,]+/).filter(Boolean);

    //this is for clean after the post
    user_IdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
      console.log("add  post")
  };
  return (
    <form className="creat-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="user_Id" className="form-label">
          Enter your user Id here
        </label>
        <input
          type="input"
          ref={user_IdElement}
          className="form-control"
          id="user_Id"
          placeholder="Your user ID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="How are you  feeling today......"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          ref={bodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about it....."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted....."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="input"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter tags with space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatPost;
