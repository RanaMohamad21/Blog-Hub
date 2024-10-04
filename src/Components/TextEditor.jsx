import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import PropTypes from "prop-types";
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
  ],
};

function TextEditor({ value, setValue }) {
  // const [isFocused, setIsFocused] = useState(false);
  const editorRef = useRef(null);
  

  return (
    <div className={`relative h-44    ml-auto mr-auto  `}>
      <ReactQuill
        theme="snow"
        placeholder={"Type your post body here..."}
        modules={modules}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
        ref={editorRef}
        className=" h-full  "
        value={value}
        onChange={setValue}
      >
        {/* <div style={toolbarStyles} /> */}
      </ReactQuill>
      {/* {!text && !isFocused && (
        <div
          className="absolute top-[50px] left-3 text-gray cursor-text ml-4"
          onClick={handleClickPlaceholder}
        >
          Type your description here...
        </div>
      )} */}
    </div>
  );
}

TextEditor.propTypes = {
  value: PropTypes.string.isRequired, // text prop is required and must be a string
  setValue: PropTypes.func.isRequired, // setValue prop is required and must be a function
};

export default TextEditor;

// TextEditor.propTypes = {
//   text: PropTypes.string.isRequired, // text prop is required and must be a string
//   setValue: PropTypes.func.isRequired, // setValue prop is required and must be a function
//   name: PropTypes.string.isRequired, // name prop is required and must be a string
//   register: PropTypes.func.isRequired, // register prop is required and must be a function
// };

// export default TextEditor;
