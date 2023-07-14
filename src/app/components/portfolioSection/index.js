import Image from "next/image";
import work1 from "../../../../public/images/work1.png";
import work2 from "../../../../public/images/work2.png";
import work3 from "../../../../public/images/work3.png";
import work4 from "../../../../public/images/work4.png";

const PORTFOLIO = [
  {
    title: "Instagram Clone",
    image: work4,
    link :"https://instagram-clone-irjb.vercel.app/?vercelToolbarCode=jrcV5XOTFKC6VBr"
  },
  {
    title: "Food order website UI",
    image: work1,
    link :"https://food-app-xi-fawn.vercel.app/"
  },
  {
    title: "Tourism website UI",
    image: work2,
    link :"https://tourism-app-rho.vercel.app/"
  },
  {
    title: "3D website UI",
    image: work3,
    link :"https://3-d-app-akshaysaga777.vercel.app/"
  },
];

const PortfolioSection = () => {
  return (
    <section className="w-[100%] py-[120px]">
      <div className="w-[75%] mx-auto">
        <p className="mb-[64px] text-end">
          <h1 className="font-[700] text-[36px] text-end ">
            See My Work which will amaze you
          </h1>
          <span>click on link to navigate on live project</span>
        </p>

        <div className="flex flex-wrap gap-12 justify-center">
          {PORTFOLIO.map((portfolio, index) => {
            return (
              <div
                key={index}
                className="max-w-[500px] shadow-lg rounded-[10px] py-[12px] px-[18px] "
              >
                <Image
                  className=" w-[100%] rounded-lg  hover:scale-125 transition-all duration-500 cursor-pointer z-50"
                  src={portfolio.image}
                  alt={portfolio.title}
                />
                <a href={portfolio.link} target="_blank" className=" inline-block my-[6px] underline font-[700] text-[16px] ">
                  {portfolio.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
