import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostsCard({ post }) {
  const { title, body, author, id } = post;
  let words = [];

  // A function that converts html into plain text
  function convertHtmlToPlainText(htmlString) {
    // Create a new DOMParser instance
    const parser = new DOMParser();

    // Parse the HTML string into a Document object
    const doc = parser.parseFromString(htmlString, "text/html");
    // Extract and return the text content from the document
    return doc.body.textContent || "";
  }

  // This function trancates the post body after converting it from html into plain text and returns only the number of words specified by the limit
  function trancateText(text, limit) {
    words = convertHtmlToPlainText(text).split(" ");

    return (
      words.slice(0, limit).join(" ") + (words.length > limit ? " ..." : "")
    );
  }

  return (
    <Link to={`/viewpost/${id}`} state={{ post }}>
      <div className="sm:w-[80%] mx-auto md:w-90  flex-col justify-center bg-white text-black m-4 py-4 px-6 rounded-lg pb-10 md:h-[280px]">
        {/* Post title */}
        <p
          className=" text-center text-[21px] font-bold capitalize mb-2"
          title={title}
        >
          {title}
        </p>
        {/* Post Author Name */}
        <p className=" font-semibold my-1 text-[17px]">Author: {author}</p>

        {/* Post body */}
        <p className=" text-[16px]">
          {trancateText(body, 25)}{" "}
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
