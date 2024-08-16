import PropTypes from 'prop-types';
import penIcon from "../assets/pen-white.png";
function NavBar({isCreatePage = false}) {
    return (
       <div className=' flex-col'>
         <div className=' bg-black h-[70px] flex justify-between    text-white '>
               
            <div className=' p-4 flex hover:cursor-pointer  font-bold text-5xl'>
                <div className=' m-2'> <img src={penIcon} width={"20"} height={"20"}/></div><h1 >Blog Hub</h1>
            </div>
            {!isCreatePage?<div className='  text-white hover:cursor-pointer   p-4' >
                <p className=' hover:border-b-2 hover:border-b-white '>
                Create Post
                </p>
                </div>:""}
            
        </div>
        <div className=' h-2 bg-white'></div>
       </div>
    );
}

NavBar.propTypes = {
    isCreatePage: PropTypes.bool,
};

export default NavBar;
