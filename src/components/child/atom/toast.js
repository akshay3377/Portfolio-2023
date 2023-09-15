import React from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyToast = () => {
  return (
    <ToastContainer
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
