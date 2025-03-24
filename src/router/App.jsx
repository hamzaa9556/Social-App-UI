import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/HeaderFile";
import Footer from "../components/Footer";
import SideBar from "../components/Sidebar";
import CreatPost from "../components/creatPost";
import PostList from "../components/PostList";
import { useState } from "react";
import PostListProvider from "../store/List-post-store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
