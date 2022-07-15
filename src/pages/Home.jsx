import React from "react";
import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";
import Carousel from "../components/home/Carousel";
import PartnerList from "../components/home/PartnerList";

const Home = () => {
  return (
    <div className="Home ">
      {/* Navbar */}
      <NavbarHome />

			{/* Slider */}
			<div className="Slider m-5 pl-10 pr-10 pb-4 top-1">
				<Carousel />
			</div>

			{/* Recent Partners */}
			<div className="PartnerTerbaru text-left m-5 ml-12 mr-12 text-gray-800">
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
