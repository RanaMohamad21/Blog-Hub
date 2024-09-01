import { BrowserRouter, Routes, Route } from "react-router-dom"; // Added missing 'Route' import
import HomePage from "./Components/HomePage.jsx";
import "./index.css";
import CreatePostPage from "./Components/CreatePostPage.jsx";
import initialBlogList from "./BlogList";
import { useEffect, useState } from "react";
import ViewPostPage from "./Components/ViewPostPage.jsx";
function App() {
  const [blogList, setBlogList] = useState(initialBlogList);
  function handleAddPost(post) {
    setBlogList((curr) => [...curr, { ...post, id: blogList.length + 1 }]);
  }
  useEffect(() => {
    console.log(blogList);
  }, [blogList]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage blogList={blogList} />} />
        <Route
          path="/Create"
          element={
            <CreatePostPage
              handleAddPost={handleAddPost}
              blogLists={blogList}
            />
          }
        />
      
        <Route
          path="/viewpost/:postId"
          element={
            <ViewPostPage/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
