import PropTypes from 'prop-types';

function PostsCard({post}) {
    const {title, body } = post;

    function trancateText(text,limit){
        const words =  text.split(' ');
        return words.slice(0,limit).join(' ')+ (words.length>limit?' ...':'');
    }

    return (
        <div className=' w-80 h-[280px] flex-col justify-center bg-white text-black m-4 py-4 px-6 rounded-lg'>
          
           <p className=' text-center text-[21px] font-bold capitalize '>{trancateText(title,4)}</p>
            <p className=' font-semibold my-1 text-[17px]'>Author: {"Author name"}</p>
            <p className=' text-[16px]'>{trancateText(body,30)} <span className=' text-darkGray font-semibold hover:cursor-pointer'>Read more</span></p>
           

            
        </div>
    )
}

PostsCard.propTypes = {
    post: PropTypes.object
};

export default PostsCard;
