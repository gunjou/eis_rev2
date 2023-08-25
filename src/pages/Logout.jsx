import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../App';

const Logout = () => {
    const navigate = useNavigate();
  
    function handleLogout(event) {
        localStorage.clear();
        navigate("/login");
        // event.preventDefault();
        // axios({
        //   method: "GET",
        //   url: BASE_URL + "/users/logout",
        // })
        //   .then((response) => {
        //     localStorage.clear();
        //     navigate("/login");
        //   })
        //   .catch((error) => {
        //     if (error.response) {
        //       console.log(error.response);
        //       console.log(error.response.status);
        //       console.log(error.response.headers);
        //     }
        //   });
      }
  return (
    <li className='submit p-1 cursor-pointer' onClick={handleLogout}>Logout</li>
  )
}

export default Logout