import MultiplePlatforms from "../assets/MultiplePlatforms.png";
import Magnet from "../assets/Magnet.png";
import FooterLogo from "../assets/FooterLogo.png";
import Arrow from "../assets/Arrow.png";

const Footer = () => {
  return (
    <div className="relative">
      <div class="absolute top-0 left-0 w-[200px] h-[350px] bg-[#2c0606] blur-3xl "></div>
      <div class="absolute top-0 right-0 w-[200px] h-[280px] bg-[#2c0606] blur-3xl"></div>
      <footer className=" text-center bg-black text-white p-8">
        {/* Heading */}
        <h2 className="text-3xl font-light mb-4 mt-5">
          Get multiple <span className="text-[#BB2828]">Integrations</span> in a
          single platform
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-12 mx-auto max-w-3xl text-sm">
          Streamline operations with powerful CRM, lead management, and
          automated communication. Boost sales with targeted marketing,
          real-time insights, and data-driven decision-making.
        </p>

        {/* Three-Part Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0 mt-20">
          {/* Left Part */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={MultiplePlatforms}
              alt="Multiple Platforms"
              className="w-3/4 md:w-full max-w-xs"
            />
          </div>

          {/* Right Part (2 Sections) */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* First Image */}
            <img src={Magnet} alt="Magnet" className="w-24 md:w-30 lg:w-56" />

            {/* Arrow Icon */}
            <span>
              <img src={Arrow} alt="Arrow" className="w-12 md:w-20 lg:w-40" />
            </span>

            {/* Second Image */}
            <img
              src={FooterLogo}
              alt="Footer Logo"
              className="w-20 md:w-24 lg:w-64"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
