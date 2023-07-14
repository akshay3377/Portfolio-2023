const Button = ({ children, className , onClick , type }) => {
  const classes = `  py-[6px] px-[12px] rounded-[4px] border border-1 hover:bg-black hover:text-white ${className}`;
  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}; 

export default Button;


