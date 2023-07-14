import Image from "next/image";
import Button from "../child/atom/button";
import img from "../../../../public/images/photo-1506794778202-cad84cf45f1d.avif";

const AboutUsection = () => {
  return (
    <section className=" w-[100%] py-[120px] ">
      <div className="w-[75%] mx-auto flex flex-col md:flex-row justify-around">
        <div className="w-[100%] md:w-[40%] ">
          <Image src={img} className="h-[400px] w-[100%]" alt="image" />
        </div>
        <div className=" w-[100%]  md:w-[50%]">
          <h1 className="font-[700] text-[36px] mb-[12px]">
            What My Programming skills
          </h1>
          <p className="mb-[24px] leading-[36px]">
            Fontend developer with 2 years of experience in Building projects
            using javascript, React js, Next js, RESTful API and Firebase. I
            have worked on various web development project's with hands-on
            experience in frontend technologies. such as HTML, CSS, and
            JavaScript, as well as frameworks like React and Next, to build
            scalable and modular applications, crafting clean and semantically
            structured code to develop visually appealing and interactive user
            interfaces.
          </p>
          <Button className={"mr-[10px]"} children={"Hire me"} />
          <Button children={"Download CV"} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsection;
