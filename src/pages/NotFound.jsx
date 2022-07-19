import React from "react";

const NotFound = () => {
  return (
    <div className="NotFound">
      <img
        src={process.env.PUBLIC_URL + "images/404.png"}
        alt="404"
        className="m-auto mt-36"
      />
      <p className="text-gray-700">Please check your URL</p>
    </div>
  );
};

export default NotFound;
