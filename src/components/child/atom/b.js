import { LeftIcon, RightIcon } from "../icons";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="z-50 absolute left-0 top-1/2 transform -translate-y-1/2 bg-[white] text-white rounded-full p-2   hover:translate-x-1 transition-transform "
    >
      <LeftIcon className=" hover:translate-x-1 transition-transform" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="z-50 absolute right-0 top-1/2 transform -translate-y-1/2 bg-[white] text-white  rounded-full p-2  hover:translate-x-1 transition-transform "
    >
      <RightIcon />
    </button>
  );
};

export { CustomPrevArrow, CustomNextArrow };
