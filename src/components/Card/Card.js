import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div className="card w-72 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">100 Meter Running</h2>
          <p></p>
          <div className="card-actions">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
