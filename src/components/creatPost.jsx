import { Form, redirect } from "react-router-dom";
//import PostList from "./PostList";
//import { useContext } from "react";
const CreatPost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="creat-post">
      <div className="mb-3">
        <label htmlFor="user_Id" className="form-label">
          Enter your user Id here
        </label>
        <input
          type="input"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Enter tags with space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export async function actionCreatPost(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}
export default CreatPost;
