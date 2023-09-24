const RadioButton = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center cursor-pointer text-base text-gray-700">
      <input
        type="radio"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      <div className="border border-1 border-black rounded-full">
        <div
          className={`w-5 h-5 rounded-full   border-2 ${
            checked ? "bg-black border-white" : "border-gray-400"
          }`}
        ></div>
      </div>
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default RadioButton;
