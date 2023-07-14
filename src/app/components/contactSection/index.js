import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  PhoneIcon,
  WhatsappIcon,
} from "../child/icons";
import ContactForm from "../child/molecule/form";

const CONTACT = [
  {
    title: "Address",
    icon: LocationIcon,
    discription: "chandigarh, India",
  },
  {
    title: "Phone",
    icon: PhoneIcon,
    discription: "+8360395467",
  },
  {
    title: "Email",
    icon: EmailIcon,
    discription: "akshaykumar13147@gmail.com",
  },
];

const SOCIAL_LINKS = [
  {
    icon: WhatsappIcon,
    link: "https://api.whatsapp.com/send?phone=918360395467",
  },
  {
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/akshay-kumar-a3397920a/",
  },
  {
    icon: GithubIcon,
    link: "https://github.com/akshay3377",
  },
];
const ContactSection = () => {
  return (
    <section className=" w-[100%] bg-grey py-[120px]">
      <div className=" w-[75%] flex flex-col md:flex-row   w-container  mx-auto  justify-between">
        <div className="w-[100%] md:w-[45%]">
          <h1 className="font-[700] text-[36px] mb-[12px]">
            Have You Any Project? please Drop a Message
          </h1>
          <p className="mb-[24px]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          {CONTACT.map((contact, index) => {
            return (
              <div key={index} className="mb-[22px] flex">
                <div className="mr-[18px]"> {<contact.icon />}</div>
                <ul>
                  <h3 className="font-[700]">{contact.title}</h3>
                  <li>{contact.discription}</li>
                </ul>
              </div>
            );
          })}

          <div className="flex gap-3 my-[46px]">
            {SOCIAL_LINKS.map((social, index) => {
              return (
                <a href={social.link} target="_blank" key={index}>
            {      <social.icon className="h-[40px] w-[40px]" />}
                </a>
              );
            })}
          </div>
        </div>
        <div className="w-[100%] md:w-[45%] bg-white flex justify-center items-center py-[24px] my-[40px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
