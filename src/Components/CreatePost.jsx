import { useState } from "react";
import PropTypes from 'prop-types';
import TextEditor from "./TextEditor.jsx";
import Button from "./Button.jsx";
import {  useNavigate } from "react-router-dom";
function CreatePost({ handleAddPost}) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [body, setBody] = useState("");
  const [postCreated, setPostCreated] = useState(false);
  function handleCreatePost() {
    if (!title || !authorName || !body) return;
    setPostCreated(true);

    const newPost = {
      title,
      author: authorName,
      date: new Date(),
      body,
    };
    handleAddPost(newPost);
    setPostCreated(true);
    
  }
  function resetInputs(){
    setTitle("");
    setAuthorName("");
    setBody("");
  }

  function handleCreateAnotherPost(){
    resetInputs();
    setPostCreated(false);
  }
  function handleViewPosts(){
    navigate('/')
  }

  return (
    <div className="  w-full flex items-center justify-center  ">
      {!postCreated && (
        <div className=" bg-white w-1/2 p-3 border border-black text-black rounded-xl  flex-col  h-[600px] my-6">
          <div className=" text-center text-xl font-bold  flex-col px-6">
            <p>Tittle</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" border my-2 border-black rounded-xl p-1 text-center w-full "
            />
            <p>Author</p>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className=" border my-2 border-black rounded-xl p-1 text-center w-full"
            />
            <p className=" my-4"> Body </p>
            <TextEditor value={body} setValue={setBody}  />
            {/* <input
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className=" border my-2 border-black rounded-xl p-1 text-center h-60 font-normal  w-full"
            /> */}
            <div>
              <Button handleClick={handleCreatePost}
              buttonTitle={"Create"}/>
            </div>
          </div>
        </div>
      )}
      {postCreated && <div className=" text-black h-[538px] flex flex-col  justify-center ">
        <h1 className=" font-semibold text-xl">Post Created Successfully!</h1>
        <Button buttonTitle={ "Create a new Post"}
        handleClick={handleCreateAnotherPost}/>
       
        <Button buttonTitle={ "View all posts"}
        handleClick={handleViewPosts}/>
        </div>}
    </div>
  );
}

CreatePost.propTypes = {
  handleAddPost: PropTypes.func
};

export default CreatePost;
