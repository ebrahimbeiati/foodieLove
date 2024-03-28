const Button = (props) => {
  return (
    <div className="flex flex-col items-center">
      {props.img && <img src={props.img} alt="icon" className="w-6 h-6 mr-2" />}
      <button
        className="px-4 py-2 border-2 rounded-full border-amber-600 text-amber-600 font-medium hover:bg-amber-700 hover:text-white transition-all"
        onClick={props.onClick} // Add onClick event handler
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
