"use client";

import { addDoc, collection } from "firebase/firestore";
import Button from "../atom/button";
import InputField from "../atom/input";
import TextField from "../atom/textarea";
import {
  EmailIcon,
  PhoneIcon,
  SpinnerIcon,
  TextareaIcon,
  UserIcon,
} from "../icons";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { databaseConnection } from "../../../../firebaseConfig";

const ContactForm = ({ setState }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (payload) => {
    setIsLoading(true);
    setState((previous) => !previous);
    setTimeout(async () => {
      try {
        await addDoc(collection(databaseConnection, "response"), payload);
        toast.success("Sent");
        reset();
      } catch (e) {
        toast.error("Error, Not sent");
      } finally {
        setIsLoading(false);
        setState((pre) => !pre);
      }
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] mx-auto">
      <InputField
        name="name"
        type={"text"}
        icon={<UserIcon />}
        label={"Name"}
        placeholder={"Enter your name"}
        register={register("name", { required: "Name is required" })}
        errors={errors}
      />

      <InputField
        name="email"
        icon={<EmailIcon />}
        label={"Email"}
        placeholder={"Enter your email"}
        type="text"
        register={register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        errors={errors}
      />

      <InputField
        name="phone"
        icon={<PhoneIcon />}
        label={"Phone"}
        placeholder={"Enter Phone number"}
        type="number"
        register={register("phone", {
          required: "phone  is required",
          pattern: {
            value: /^[0-9]*$/,
            message: "Please enter only numbers",
          },
          minLength: { value: 10, message: "min length should be 10" },
          maxLength: { value: 10, message: "max length should be 10" }
        })}
        errors={errors}
      />

      <TextField
        name="message"
        icon={<TextareaIcon />}
        label={"Message"}
        placeholder={"Write message..."}
        register={register("message")}
      />

      <Button
        type="submit"
        className={"bg-black text-white w-[100%] h-[44px] my-[16px]"}
      >
        {isLoading ? <SpinnerIcon /> : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
