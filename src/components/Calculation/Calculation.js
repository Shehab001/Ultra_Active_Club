import React, { useEffect, useState } from "react";

const Calculation = (props) => {
  //console.log(props.sports_time);
  let [break_time, setBreak_time] = useState(0);

  useEffect(() => {
    let quantity = parseInt(localStorage.getItem("breaking_time"));
    // console.log(quantity);
    if (quantity) {
      //alert("hi");
      setBreak_time(quantity);
    }
  }, []);

  const setValue = (data) => {
    //alert(typeof data);
    break_time += data;
    //console.log(break_time);
    setBreak_time(break_time);

    localStorage.setItem("breaking_time", break_time);
  };

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

      <div className="details py-3 mx-auto w-4/5 my-5 grid grid-cols-5 bg-cyan-400 content-center gap-5 text-center rounded-lg justify-center">
        <div className="div w-10 h-10 text-white bg-black rounded-full	 ">
          <p className="pt-2 cursor-pointer">
            <span onClick={() => setValue(10)}>10s</span>
          </p>
        </div>
        <div className=" w-10 h-10 text-white bg-black rounded-full div">
          <p onClick={() => setValue(20)} className="pt-2 cursor-pointer">
            20s
          </p>
        </div>
        <div className="div w-10 h-10 text-white bg-black rounded-full">
          <p onClick={() => setValue(30)} className="pt-2 cursor-pointer">
            30s
          </p>
        </div>
        <div className="div w-10 h-10 text-white bg-black rounded-full">
          <p onClick={() => setValue(40)} className="pt-2 cursor-pointer">
            40s
          </p>
        </div>
        <div className="div w-10 h-10 text-white bg-black rounded-full">
          <p onClick={() => setValue(50)} className="pt-2 cursor-pointer">
            50s
          </p>
        </div>
      </div>

      <p className="ml-3">Sports Details : </p>

      <div className="details p-5 mx-auto w-4/5 my-5 flex  bg-cyan-400 content-center gap-5 text-center text-black rounded-lg justify-between">
        <span>Sports Time : </span>
        <span>{props.sports_time}</span>
      </div>
      <div className="details p-5 mx-auto w-4/5 my-5 flex  bg-cyan-400 content-center gap-5 text-center text-black rounded-lg justify-between">
        <span>Break Time : </span>
        <span>{break_time}</span>
      </div>

      <div className="details p-5 mx-auto w-4/5 mt-10 cursor-pointer bg-cyan-400 content-center text-center text-black rounded-lg">
        <span>Activity Completed </span>
      </div>
    </div>
  );
};

export default Calculation;
