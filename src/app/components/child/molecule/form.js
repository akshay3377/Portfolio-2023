import Button from "../atom/button";
import InputField from "../atom/input";
import TextField from "../atom/textarea";
import { EmailIcon, PhoneIcon, TextareaIcon, UserIcon } from "../icons";

const ContactForm = () => {
  return (
    <div className="  ">
      <form className="">
        <InputField
          icon={<UserIcon />}
          label={"Name"}
          placeholder={"Please enter your name"}
        />
        <InputField
          icon={<EmailIcon />}
          label={"Email"}
          placeholder={"Please Enter your email"}
        />
        <InputField
          icon={<PhoneIcon />}
          label={"phone"}
          placeholder={"Phone number"}
        />
        <TextField
          icon={<TextareaIcon />}
          label={"Message"}
          placeholder={"Write message..."}
        />

        <Button
          type="button"
          className={"bg-black text-white w-[450px] h-[44px] my-[16px]"}
        >
          {"Send"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
