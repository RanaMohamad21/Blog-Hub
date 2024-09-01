import PropTypes from "prop-types";
import NavBar from "./NavBar";
import CreatePost from "./CreatePost";
import Footer from "./Footer";

function CreatePostPage({ handleAddPost }) {
  return (
    <div className=" grid grid-rows-[auto,1fr,auto]">
      <NavBar isCreatePage={true} />
      <CreatePost handleAddPost={handleAddPost} />
      <Footer />
    </div>
  );
}
CreatePostPage.propTypes = {
  handleAddPost: PropTypes.func,
};

export default CreatePostPage;
