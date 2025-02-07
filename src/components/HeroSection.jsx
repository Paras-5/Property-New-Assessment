import Building from "../assets/Building.png";
import TabletMobile from "../assets/TabletMobile.png";

const HeroSection = () => {
  return (
    <section>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-100">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-light text-gray-600">
            Best Buddy for Real Estate{" "}
            <span className="text-[#BB2828]">Builders</span>
          </h1>
          <p className="text-gray-600  text-l">
            Streamline operations with powerful CRM, lead management, and
            automated communication. Boost sales with targeted marketing,
            real-time insights, and data-driven decision-making.
          </p>
          <div className="hidden md:block relative">
            <div className="absolute bottom-0 right-0 left-1 h-1/2 bg-gradient-to-b from-transparent to-white"></div>
            <button className=" hover:cursor-pointer text-sm absolute px-4 py-2 text-[#BB2828] border border-[#BB2828] rounded-4xl">
              Book a free trial
            </button>
            {/* Small Image Below Text */}
            <img
              src={Building}
              alt="Building"
              className=" md:w-120 mx-auto md:mx-0 "
            />
          </div>
        </div>

        {/* Right Side (Main Image) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={TabletMobile}
            alt="Tablet & Mobile"
            className=" w-full max-w-md"
          />
        </div>
      </section>
      <section className="flex justify-between gap-8 p-6 bg-gray-100">
        <ul className=" md:ml-30 md:mr-30 flex w-full justify-around">
          <li className="text-center">
            <h1 className="text-left text-2xl font-bold text-gray-500">30%</h1>
            <div className="text-gray-400 text-sm">Lead Conversion</div>
          </li>
          <li className="text-center">
            <h1 className="text-left text-2xl font-bold text-gray-500">30%</h1>
            <div className="text-gray-400 text-sm">Lead Conversion</div>
          </li>
          <li className="text-center">
            <h1 className="text-left text-2xl font-bold text-gray-500">30%</h1>
            <div className="text-gray-400 text-sm">Lead Conversion</div>
          </li>
          <li className="text-center">
            <h1 className="text-left text-2xl font-bold text-gray-500">30%</h1>
            <div className="text-gray-400 text-sm">Lead Conversion</div>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default HeroSection;
