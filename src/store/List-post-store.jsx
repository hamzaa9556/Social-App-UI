import { createContext, useReducer } from "react";
export const PostList = createContext({
  //creatcontext used for to used methods in different components easily
  postListArray: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  //Reducer methode used for take action and implment on it delte or add post.
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const Default_Post_List = [
    {
      id: "1",
      title: "Going to Lahore",
      body: "Hamza will go the Lahore in sometime becuase i took job InsAllah",
      reaction: 6,
      tags: ["Lahore", "job"],
      user_Id: "user_7",
    },
    {
      id: "3",
      title: "Life of collage",
      body: "collage ki life bhut mazedar hoti hm gaurdian collage mn phary haan",
      reaction: 900,
      tags: ["Collage", "Life"],
      user_Id: "user_9",
    },
  ];

  const [postList, dispacthPostList] = useReducer(
    //useReducer hook for action it is mother of useState
    postListReducer,
    Default_Post_List
  );

  const addPost = (userId, postTitle, postBody, postReactions, postTags) => {
    // arguments from creatpost component

    dispacthPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: postReactions,
        user_Id: userId,
        tags: postTags,
      },
    });
  };

  const deletePost = (postId) => {
    //postId argument from the writepost component
    //delete post method to dispacth type and payload
    dispacthPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
