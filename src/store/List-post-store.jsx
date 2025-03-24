import { createContext, useReducer, useState, useEffect } from "react";
export const PostList = createContext({
  //creatcontext used for to used methods in different components easily
  postList: [],

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
  } else if (action.type === "ADD_INTIAL_POST") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispacthPostList] = useReducer(
    //useReducer hook for action it is mother of useState
    postListReducer,
    []
  );

  const addPost = (post) => {
    // arguments from creatpost component
    console.log("add post");
    dispacthPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addIntialPost = (posts) => {
    // it takes posts from server dummy API

    dispacthPostList({
      type: "ADD_INTIAL_POST",
      payload: {
        posts,
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
