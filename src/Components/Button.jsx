import PropTypes from "prop-types";

function Button({ handleClick, buttonTitle, style ="" }) {
  return (
    <div className= { ` ${style} ` } >
      <button
        onClick={handleClick}
        className=" text-white capitalize hover:shadow-lg mt-4 rounded-xl bg-black w-full py-2 "
      >
        {buttonTitle}
      </button>
    </div>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func,
  buttonTitle: PropTypes.string,
};

export default Button;
