const Button = (props) => {
  return (
    <div>
      <button className=" px-4 py-2 border-2 rounded-full border-amber-600 text-amber-600  font-medium hover:bg-amber-700 hover:text-white transition-all">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
