import { useState } from "react";
import TextEditor from "./TextEditor.jsx";
function CreatePost() {
    const [body, setBody] = useState("");
  return (
    <div className=" h-full w-full flex items-center justify-center  ">
      <div className=" bg-white w-1/2 p-3 border border-black text-black rounded-md  flex-col  h-[600px] my-6">
        <div className=" text-center text-xl font-bold  flex-col">
          <p>Tittle</p>
          <input
            type="text"
            className=" border my-2 border-black rounded-xl p-1 text-center "
          />
          <p>Author</p>
          <input
            type="text"
            className=" border my-2 border-black rounded-xl p-1 text-center"
          />
          <p className=" my-4"> Body </p>
          <TextEditor value={body} setValue={setBody}  />
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
