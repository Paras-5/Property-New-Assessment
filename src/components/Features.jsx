import constructionMan from "../assets/constructionMan.png";
import AllFeatures from "../assets/AllFeatures.png";

const Features = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-[100px] h-[100px] bg-[#8b1919] blur-3xl "></div>
      <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-[#8b1919] blur-3xl "></div>
      <div
        className="bg-black md:min-h-screen flex flex-col items-center justify-center text-white 
    px-8 md:py-0 py-8 "
      >
        <h1 className="text-4xl md:text-5xl font-light text-center mb-10">
          The Complete <span className="text-[#BB2828]">Real Estate</span> Suite
        </h1>
        <img
          src={AllFeatures}
          alt="Feature Illustration"
          className=" w-sm md:w-xl"
        />
      </div>
    </div>
  );
};

export default Features;
