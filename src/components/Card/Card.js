import React from "react";

const Card = (props) => {
  // console.log(props.handleDataClick);
  const { img, name, des, time } = props.data;
  // const { handleDataClick } = props.object;
  return (
    <div>
      <div className="card lg:w-56 md:w-60 bg-base-100 shadow-xl  bg-cyan-900				">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="font-bold	 card-title">{name}</h2>
          <p>{des}</p>
          <h4 className="text-xl font-semibold	 m-3">{time}</h4>
          <div className="card-actions">
            <button
              onClick={() => props.handleDataClick(props.data)}
              className="btn btn-primary "
            >
              Add To The Side
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
