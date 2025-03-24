import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./router/App.jsx";
import CreatPost from "./components/creatPost.jsx";
import PostList, { postLoader } from "./components/PostList.jsx";
import { actionCreatPost } from "./components/creatPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader },
      { path: "/creat-post", element: <CreatPost />, action: actionCreatPost },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
