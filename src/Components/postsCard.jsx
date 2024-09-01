import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostsCard({ post }) {
  const { title, body, author, id } = post;
  let words = [];
  function trancateText(text, limit) {
    words = text.split(" ");
    return (
      words.slice(0, limit).join(" ") + (words.length > limit ? " ..." : "")
    );
  }

  return (
    <Link to={`/viewpost/${id}`} state={{post}}>
      <div className="sm:w-[80%] mx-auto md:w-90  flex-col justify-center bg-white text-black m-4 py-4 px-6 rounded-lg pb-10">
        <p
          className=" text-center text-[21px] font-bold capitalize mb-2"
          title={title}
        >
          {title}
        </p>
        <p className=" font-semibold my-1 text-[17px]">Author: {author}</p>
        {/* <p className=' font-semibold my-1 text-[17px]'> {date}</p> */}
        <p className=" text-[16px]">
          {trancateText(body, 30)}{" "}
          {words.length > 10 && (
            <span
              title={"Click to view full post"}
              className=" text-darkGray font-semibold hover:cursor-pointer hover:border-b-2 hover:border-darkGray"
            >
              read more
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}

PostsCard.propTypes = {
  post: PropTypes.object,
};

export default PostsCard;
