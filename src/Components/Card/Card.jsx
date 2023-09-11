import React from "react";

const Card = ({ userName, usn, dob }) => {
  return (
    <div className="   ">
      <div className=" h-80 w-60 bg-white rounded-lg flex  flex-col m-5 items-center  ">
        <img
          src="./public/images/yuvraj.jpg"
          alt=" kudi"
          className="h-[70%] w-[85%] pt-1"
        />
        <div className=" flex justify-start flex-col ">
          <h1 className=" text-black  text-xl  ">Name: {userName}</h1>
          <h1 className=" text-black  text-lg ">USN: {usn}</h1>
          <h1 className=" text-black  text-lg ">DOB: {dob}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
