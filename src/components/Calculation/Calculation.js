import React from "react";

const Calculation = () => {
  return (
    <div className="py-20 bg-slate-600 my-10 mx-5 rounded-lg">
      <div className="header flex p-5 ">
        <div className="img">
          <img
            className="rounded-full w-12"
            src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1660582196/avatars/srkitqfqmgzwvffo9kvj.png"
            alt="pic"
          />
        </div>
        <div className="ml-5 content ">
          <h4 className="">Md. Shehab Chowdhury </h4>
          <h6>Dhaka,Bangladesh</h6>
        </div>
      </div>

      <div className="details  bg-teal-300 text-black 	p-5	mx-auto w-4/5 my-5 grid grid-cols-3 gap-5 rounded-lg text-center">
        <div className="div">
          <p>60Kg</p>
          <p>Weight</p>
        </div>
        <div className="div">
          <p>5.4Ft</p>
          <p>Height</p>
        </div>
        <div className="div">
          <p>23Years</p>
          <p>Age</p>
        </div>
      </div>

      <p className="ml-3">Add a Break : </p>

      <div className="details p-5 mx-auto w-4/5 my-5 grid grid-cols-5 bg-cyan-400 content-center gap-5 text-center rounded-lg">
        <div className="div w-10 h-10 text-white bg-black rounded-full	 ">
          <p className="pt-2 cursor-pointer">10s</p>
        </div>
        <div className=" w-10 h-10 text-white bg-black rounded-full div">
          <p className="pt-2 cursor-pointer">20s</p>
        </div>
        <div className="div w-10 h-10 text-white bg-black rounded-full">
          <p className="pt-2 cursor-pointer">30s</p>
        </div>
        <div className="div w-10 h-10 text-white bg-black rounded-full">
          <p className="pt-2 cursor-pointer">40s</p>
        </div>
        <div className="div w-10 h-10 text-white bg-black rounded-full">
          <p className="pt-2 ">50s</p>
        </div>
      </div>

      <p className="ml-3">Sports Details : </p>

      <div className="details p-5 mx-auto w-4/5 my-5 flex  bg-cyan-400 content-center gap-5 text-center text-black rounded-lg justify-between">
        <span>Sports Time : </span>
        <span>0Sec</span>
      </div>
      <div className="details p-5 mx-auto w-4/5 my-5 flex  bg-cyan-400 content-center gap-5 text-center text-black rounded-lg justify-between">
        <span>Break Time : </span>
        <span>0Sec</span>
      </div>
    </div>
  );
};

export default Calculation;
