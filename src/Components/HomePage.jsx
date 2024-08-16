import CreatePost from "./CreatePost";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PostsCard from "./postsCard";
import initialBlogList from "../BlogList";
import { useState } from "react";


function HomePage() {
  const [blogList, setBlogList] = useState(initialBlogList);
  return (
    <div className=" grid grid-rows-[auto,1fr,auto]  min-h-screen">
      <NavBar />
      <div className=" flex items-center justify-center">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2"> {initialBlogList.map((post, index) =>{
                return <PostsCard post={post} key={index} />
            })}</div>
          </div>
          {/* <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2"> {posts.map((post, index) =>{
                return <PostsCard post={post} key={index} />
            })}</div>
          </div> */}
      {/* <CreatePost /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
