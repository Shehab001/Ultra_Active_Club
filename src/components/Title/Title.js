import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = () => {
  return (
    <div className="flex p-10">
      {/* <FontAwesomeIcon icon="fa-solid fa-user-secret" /> */}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <h1 className="text-4xl text-amber-100	font-bold">Ultra Sports Details</h1>
    </div>
  );
};

export default Title;
