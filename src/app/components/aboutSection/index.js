import Image from "next/image";
import Button from "../child/atom/button";
import img from "../../../../public/images/me.jpg";
import Link from "next/link";

const AboutUsection = () => {
  return (
    <section className=" w-[100%] py-[150px] bg-grey ">
      <div className="w-[75%] mx-auto flex flex-col md:flex-row justify-around items-center ">
        <div className="w-[100%] md:w-[40%] ">
          <Image
            key={img}
            src={img}
            className="h-auto w-[85%] rounded-[12px]"
            alt="profile_Picture"
          />
        </div>
        <div className=" w-[100%]  md:w-[54%]  my-[36px] ">
          <h1 className="font-[700] text-[36px] mb-[16px]">
            About me, What My Programming skills.
          </h1>
          <p className="mb-[32px] leading-[36px]">
            <strong>Fontend developer</strong> with 2 years of experience in
            Building projects using javascript, React js, Next js, RESTful API
            and Firebase. I have worked on various web development project's
            with hands-on experience in frontend technologies. such as HTML,
            CSS, and JavaScript, as well as frameworks like React and Next, to
            build scalable and modular applications, crafting clean and
            semantically structured code to develop visually appealing and
            interactive user interfaces.
          </p>
          <div className="flex">
            <Button
              className={"bg-black text-white mr-[4px]"}
              children={"Download CV"}
            />

            <Link href={"/contact"}>
              {" "}
              <Button>{"Contact Me"}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsection;
