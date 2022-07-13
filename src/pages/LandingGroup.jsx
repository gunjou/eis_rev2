import React from "react";
import { FiLogIn } from "react-icons/fi";
import Footer from "../components/Footer";
import ListGroup from "../components/group/ListGroup";

const LandingGroup = () => {
  return (
    <div className="LandingGroup">
      {/* Navbar */}
      <div className="Navbar grid grid-cols-3 gap-4 bg-[#FFFFFF] sticky top-0 z-50 drop-shadow-lg ">
        <div className="Logo w-48 p-3 col-span-2 cursor-pointer">
          <img src={process.env.PUBLIC_URL + "images/logo.svg"} alt="Jasamedika" />
        </div>
        <div className="Login col-span-1 text-right p-6">
          <button
            type="button"
            class="text-white bg-teal-600 hover:bg-teal-800 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center mr-2 mb-2"
          >
            <FiLogIn className="mr-3 text-lg" />
            Login
          </button>
        </div>
      </div>

			<div className="GroupList pt-4">
				<div className="title text-left">
				  <p className="font-bold text-xl m-10">
						List Grup RS A
					</p>	
				</div>
				<ListGroup />
			</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingGroup;
