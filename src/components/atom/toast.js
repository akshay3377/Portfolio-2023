import React from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyToast = () => {
  return (
    <ToastContainer
      className="sm:w-full md:w-1/2 lg:w-1/3 p-2"
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      draggable={false}
      transition={Slide}
      pauseOnVisibilityChange
      pauseOnHover
    />
  );
};

export default MyToast;
