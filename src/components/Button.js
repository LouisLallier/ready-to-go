const Button = ({ textColor, backGround, text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="m-4 w-20 rounded-md border border-blue-400 py-3 px-4"
        style={{ backgroundColor: backGround, color: textColor }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
