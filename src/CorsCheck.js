import React from "react";

const CorsCheck = (props) => {
  const url = "https://www.youtube.com";
  const options = {
    method: ["GET", "POST", "PUT", "PATCH"],
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json",
    },
  };
  const fetchDataUsingLink = () => {
    const data = fetch(url, options);
  };
  if (props.name === "freak 3") {
    throw new Error("some thing went wrong");
  }
  fetchDataUsingLink();
  return <div>{props.name}</div>;
};

export default CorsCheck;
