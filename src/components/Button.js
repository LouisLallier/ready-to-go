const Button = ({ textColor, backGround, text }) => {
  return (
    <button
      className="m-4 rounded-md border border-blue-400 py-3 px-4"
      style={{ backgroundColor: { backGround }, color: { textColor } }}
    >
      {text}
    </button>
  );
};

export default Button;
