const Button = ({ children, className, onClick, type }) => {
  const classes = `py-[5px] px-[10px] md:py-[8px] px-[12px] rounded-[4px] flex justify-center items-center  border border-1 hover:bg-black hover:text-white ${className}`;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
