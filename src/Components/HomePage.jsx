import Footer from "./Footer";
import NavBar from "./NavBar";
import PostsCard from "./postsCard";
import PropTypes from "prop-types";

function HomePage({ blogList }) {
  return (
    <div className=" grid grid-rows-[auto,1fr,auto]  min-h-screen">
      <NavBar />
      <div className=" flex items-center justify-center">
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-2">
          {" "}
          {blogList.map((post, index) => {
            return <PostsCard post={post} key={index} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
HomePage.propTypes = {
  blogList: PropTypes.array,
};
export default HomePage;
