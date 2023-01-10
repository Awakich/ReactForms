const Button = ({ children, InfoFunction }) => {
  return (
    <button
      onClick={InfoFunction}
      className="bg-white text-2xl font-semibold py-4 px-5 text-black rounded-full hover:bg-white/90"
    >
      {children}
    </button>
  );
};

export default Button;
