import { Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ReactHtmlParser from "react-html-parser";
function ViewPostPage() {
  const location = useLocation();
  const { post } = location.state || {};

  //   Change the format of the date to make the month a text.
  function formateDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <div className=" grid grid-rows-[auto,1fr,auto]  text-black h-screen">
      <NavBar />
      {!post ? (
        <div className=" text-black h-full text-center flex justify-center items-center font-bold  flex-col">
          {/*  // Handling the case where No post is found */}
          <p className=" text-5xl">Post not found!</p>
          <Link to="/">
            <div className="bg-black text-xl  w-[20rem] mt-6 font-normal capitalize px-4 py-2 rounded-xl hover:shadow-lg text-white">
              Go back to home page
            </div>
          </Link>
          <Link to="/create">
            <div className="bg-black w-[20rem] text-xl  my-6 font-normal capitalize px-4 py-2 rounded-xl hover:shadow-lg text-white">
              Create a Post
            </div>
          </Link>
        </div>
      ) : (
        <div className=" py-8  flex items-center justify-center  ">
          {/*  // Handking the case where the post is found
           */}
          <div className="bg-white rounded-2xl h-full p-3 pb-6 min-w-1/2 max-w-[75%] lg:max-w-[50%] px-8 flex flex-col items-center ">
            <p className=" font-bold text-xl py-4">{post.title}</p>{" "}
            <div>
              <p className=" font-bold mb-3">Author: {post.author}</p>
              <p className=" font-bold mb-3">Date: {formateDate(post.date)}</p>
              <div className=" postBody">{ReactHtmlParser(post.body)}</div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ViewPostPage;
