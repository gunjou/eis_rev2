import React from "react";
import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";
import ListGroup from "../components/group/ListGroup";
import ToTop from "../ToTop";

const LandingGroup = () => {
  return (
    <div className="LandingGroup bg-[#eeeff1]">
      {/* Navbar */}
      <NavbarHome />

			<div className="GroupList pt-4 text-gray-800">
				<div className="title text-left">
				  <p className="font-bold text-xl m-10">
						List Grup RS A
					</p>	
				</div>
				<ListGroup />
			</div>

      {/* Footer */}
      <Footer />
      <ToTop />
    </div>
  );
};

export default LandingGroup;
