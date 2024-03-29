import React from "react";
import { MdOutlineAccountCircle, MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const SignUp = () => {
  return (
    <div className="Login flex m-auto mt-36 grid-col-3 gap-4 bg-white">
      <div className="form m-auto ml-56">
        {/* <form className="w-80 mb-12 h-[24rem] pl-5 pr-5 justify-center border border-white bg-gray-50 rounded drop-shadow-2xl"> */}
        <div className="w-80 mb-12 h-[24rem] pl-5 pr-5 justify-center border border-white bg-gray-50 rounded drop-shadow-2xl">
          <div className="logo pb-6 pt-5 text-xl">
            <img
              src={process.env.PUBLIC_URL + "images/logo.svg"}
              className="w-48 m-auto mb-2"
              alt="jasamedika-logo"
            />
            <h5 className="text-gray-700">Daftar</h5>
          </div>
          <div className="username mb-4">
            <label class="relative block">
              <span class="sr-only">Username</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <MdOutlineAccountCircle className="h-5 w-5 text-gray-700" />
              </span>
              <input
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#04ac49] focus:ring-[#04ac49] focus:ring-1 sm:text-sm"
                placeholder="username"
                type="text"
                name="username"
              />
            </label>
          </div>
          <div className="email mb-4">
            <label class="relative block">
              <span class="sr-only">Email</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <MdOutlineEmail className="h-5 w-5 text-gray-700" />
              </span>
              <input
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#04ac49] focus:ring-[#04ac49] focus:ring-1 sm:text-sm"
                placeholder="email"
                type="email"
                name="email"
              />
            </label>
          </div>
          <div className="password mb-4">
            <label class="relative block">
              <span class="sr-only">Password</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <RiLockPasswordLine className="h-5 w-5 text-gray-700" />
              </span>
              <input
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#04ac49] focus:ring-[#04ac49] focus:ring-1 sm:text-sm"
                placeholder="password"
                type="password"
                name="password"
              />
            </label>
          </div>
          <a href="/#/login">
            <div className="submit h-8 mb-3 rounded w-full pt-1 text-white bg-[#04ac49] hover:bg-[#026e2e] text-md">
              <button type="submit">SIGN UP</button>
            </div>
          </a>
          <div className="text-xs">
            <span>
              Sudah punya akun?{" "}
              <a href="/#/login" className="text-blue-700">
                Login Disini
              </a>
            </span>
          </div>
        </div>
        {/* </form> */}
        <span className="text-xs">© 2022, PT. Jasamedika Saranatama</span>
      </div>
      <div className="picture m-auto mr-56">
        <div className="pic w-[45rem]">
          <img
            src={process.env.PUBLIC_URL + "images/login-register.svg"}
            alt="signin"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
