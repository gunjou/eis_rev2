import React from "react";
import { FiLogIn } from 'react-icons/fi';
import Footer from "../components/Footer";
import Carousel from "../components/home/Carousel";
import PartnerList from "../components/home/PartnerList";

const Home = () => {
  return (
    <div className="Home ">
      {/* Navbar */}
      <div className="Navbar grid grid-cols-3 gap-4 bg-[#FEFEFE] sticky top-0 z-50 drop-shadow-lg shadow-teal-800">
        <div className="Logo w-48 p-3 col-span-2 cursor-pointer">
          <img src={process.env.PUBLIC_URL + "images/logo.svg"} alt="Jasamedika" />
        </div>
        <div className="Login col-span-1 text-right p-6">
          <button type="button" class="text-white bg-[#42a7b3] hover:bg-teal-800 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center mr-2 mb-2" >
            <FiLogIn className="mr-3 text-lg" />
            Login
          </button>
        </div>
      </div>

			{/* Slider */}
			<div className="Slider m-5 pl-10 pr-10 pb-4 top-1">
				<Carousel />
			</div>

			{/* Recent Partners */}
			<div className="PartnerTerbaru text-left m-5 ml-12 mr-12">
				<div className="partnerBaru pb-12">
					<p className="font-bold text-2xl pb-5">
						Partner Terbaru
					</p>
					<PartnerList type={"partnerBaru"} />
				</div>
				<div className="partnerLama pb-12">
					<p className="font-bold text-2xl pb-5">
						Partner Lama
					</p>
					<PartnerList type={"partnerLama"} />
				</div>
				<div className="partnerGroup pb-12">
					<p className="font-bold text-2xl pb-5">
						Grup Rumah Sakit
					</p>
					<PartnerList type={"partnerGroup"} />
				</div>
			</div>

			{/* Footer */}
			<Footer />

    </div>
  );
};

export default Home;
