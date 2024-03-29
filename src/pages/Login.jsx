import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import UseToken from "../UseToken";
import { BASE_URL } from "../App";


const Login = () => {
  const navigate = useNavigate();
  const {setToken} = UseToken();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
	const [isMessage, setIsMessage] = useState(false);

    
  function handleLogin(event) {
    // localStorage.setItem("token", "1234");
    // localStorage.setItem("rs_name", "rsud mataram");
    // localStorage.setItem("rs_logo", "rsud mataram");
    // setToken("1234");
    // navigate("/live-reports");
    // event.preventDefault();
    setIsMessage(true)
    axios({
      method: "POST",
      url: BASE_URL + ":8008/users/login",
      data: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("rs_name", response.data.current_user.rs_name);
        localStorage.setItem("rs_logo", response.data.current_user.rs_logo);
        setToken(response.data.access_token);
        setMessage(response.data.message);
        navigate("/live-reports");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          setMessage(error.response.data.message);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    }

    const handleKeyPress = (event) => {
      // look for the `Enter` keyCode
      if (event.keyCode === 13 || event.which === 13) {
        handleLogin()
      }
    }

    return (
    <div className="Login flex m-10 mt-36 grid-col-3 gap-4 bg-white">
      <div className="form m-auto ml-56">
        <div className="w-80 mb-12 h-[24rem] pl-5 pr-5 justify-center border border-white bg-gray-50 rounded drop-shadow-2xl">
          <div className="logo pb-7 pt-5 text-xl">
            <img
              src={process.env.PUBLIC_URL + "images/logo.svg"}
              className="w-48 m-auto mb-2"
              alt="jasamedika-logo"
            />
            <h5 className="text-gray-700">Log in</h5>
          </div>
          <div className="username mb-4">
            <label className="relative block">
              <span className="sr-only">Username</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MdOutlineAccountCircle className="h-5 w-5 text-gray-700" />
              </span>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#04ac49] focus:ring-[#04ac49] focus:ring-1 sm:text-sm"
                type="text"
                text={username}
                name="username"
                placeholder="username"
                value={username}
                onKeyDown={handleKeyPress}
              />
            </label>
          </div>
          <div className="password mb-4">
            <label className="relative block">
              <span className="sr-only">Password</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <RiLockPasswordLine className="h-5 w-5 text-gray-700" />
              </span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#04ac49] focus:ring-[#04ac49] focus:ring-1 sm:text-sm"
                type="password"
                text={password}
                name="password"
                placeholder="password"
                value={password}
                onKeyDown={handleKeyPress}
              />
            </label>
          </div>
          <div className="flex item-start mb-4 ">
            <div className="flex item-center h5">
              <input
                id="remember"
                type="checkbox"
                className="w-5 h-5 rounded accent-green-700"
              />
            </div>
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Remember Me
            </label>
          </div>
          {isMessage ?
          <div className="statusLogin pb-2 text-sm text-red-700">
            {message}
          </div>
          :
          <div className="pb-7"></div>
          }
            <div className="submit h-8 mb-3 rounded w-full pt-1 text-white bg-[#04ac49] hover:bg-[#026e2e] text-md cursor-pointer" onClick={handleLogin}>
              <input className="cursor-pointer" type="submit" value="Login" />
            </div>
        </div>
        <span className="text-xs">© 2023, PT. Jasamedika Saranatama</span>
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

export default Login;
