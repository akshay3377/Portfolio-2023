"use client";

import { addDoc, collection } from "firebase/firestore";
import Button from "../atom/button";
import InputField from "../atom/input";
import TextField from "../atom/textarea";
import emailjs from "@emailjs/browser";
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

  const onSubmit = async (userData, e) => {
    setIsLoading(true);
    setState((previous) => !previous);
    try {
      const [firebase, Email] = await Promise.all([
        addDoc(collection(databaseConnection, "response"), { ...userData }),
        emailjs.sendForm(
          "service_629f2nm",
          "template_m1vpz6t",
          e.target,
          "vKKoec85US-oDv-uP"
        ),
      ]);

      toast.success("Response sent successfully");
      reset();
    } catch (error) {
      toast.error("Sorry, Error");
    } finally {
      setIsLoading(false);
      setState((previous) => !previous);
    }
  };

  const handleInputChange = (e) =>
    (e.target.value = e.target.value.replace(/\D/g, ""));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] mx-auto">
      <InputField
        name="name"
        type={"text"}
        icon={<UserIcon />}
        label={"Name"}
        placeholder={"Enter your name"}
        register={register("name", { required: "*Name is required" })}
        errors={errors}
      />

      <InputField
        name="email"
        icon={<EmailIcon />}
        label={"Email"}
        placeholder={"Enter your email"}
        type="text"
        register={register("email", {
          required: "*Email is required",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
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
        type="text"
        register={register("phone", {
          required: "*phone  is required",
          minLength: { value: 10, message: "min length should be 10" },
          maxLength: { value: 10, message: "max length should be 10" },
        })}
        onInput={handleInputChange}
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
