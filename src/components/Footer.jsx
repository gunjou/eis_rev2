import { BsLinkedin } from "react-icons/bs";
import { GrFacebook, GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineCall, MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="Footer bg-gradient-to-t from-teal-700 to-[#eeeff1] text-gray-800">
      <div className="Address grid grid-cols-6">
        {/* Left */}
        <div className="Left text-left m-5 pl-8 pb-5 col-span-4">
          <p className="pb-8 font-semibold">CONTACT INFORMATION</p>
          <p className="flex pb-2 text-sm">
            <MdOutlineLocationOn size={21} className="mr-2" />
            Head Office | Kopo Mas Regency Blok 8i Bandung - Indonesia, 40225
          </p>
          <p className="flex pb-4 text-sm">
            <MdOutlineCall size={21} className="mr-2" />
            022 543 0317
          </p>
          <p className="flex pb-2 text-sm">
            <MdOutlineLocationOn size={21} className="mr-2" />
            Corporate Campus | Jl. Cikutra Baru Raya No. 28 Bandung - Indonesia,
            40124
          </p>
          <p className="flex pb-4 text-sm">
            <MdOutlineCall size={21} className="mr-2" />
            022 710 4596
          </p>
          <p className="flex pb-2 text-sm">
            <MdOutlineEmail size={21} className="mr-2" />
            info@jasamedika.co.id
          </p>
        </div>

        {/* Right */}
        <div className="Right col-span-2 text-left">
          <p className="m-5 pb-4 font-semibold flex-none">STAY CLOSE WITH US</p>
          <div className="Right flex pl-1">
            <a href="https://www.facebook.com/jasamedikaofficial">
              <GrFacebook size={24} className="ml-4" color="#4267B2" />
            </a>
            <a href="https://www.instagram.com/bottis.id/">
              <GrInstagram size={25} className="ml-4" color="#fb3958" />
            </a>
            <a href="https://www.linkedin.com/company/jasamedika-saranatama">
              <BsLinkedin size={24} className="ml-4" color="#0072b1" />
            </a>
            <a href="https://www.youtube.com/channel/UCNOiAkGB2IQss_OnBelv2xg/">
              <IoLogoYoutube size={28} className="ml-4" color="red" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="Copyright pb-4 pt-4 text-white bg-teal-800">
        © Copyright 2022 PT. Jasamedika Saranatama | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
