import { useEffect, useState } from "react";
import "./App.css";
import Calculation from "./components/Calculation/Calculation";

import Main from "./components/Main/Main";
import Title from "./components/Title/Title";

function App() {
  let [sports_time, setSports_time] = useState(0);

  useEffect(() => {
    let quantity = parseInt(localStorage.getItem("sports_time"));
    // console.log(typeof quantity);
    if (typeof quantity === "number") {
      setSports_time(quantity);
    }
  }, []);

  const handleDataClick = (data) => {
    //   //console.log(data);
    // //console.log(typeof data.time);
    sports_time += data.time;
    setSports_time(sports_time);
    // console.log(sports_time);

    //  break_time += data.time;
    //  setSports_time(sports_time);
    localStorage.setItem("sports_time", sports_time);
  };
  return (
    <div className="grid  md:grid-cols-3 lg:grid-cols-3 grid-cols-2 font-sans pb-10">
      <div className="left md:col-span-2  lg:cols-span-3 cols-span-1">
        <Title></Title>
        <Main handleDataClick={handleDataClick}></Main>
      </div>
      <div className="right col-span-1">
        <Calculation sports_time={sports_time}></Calculation>
      </div>
    </div>
  );
}

export default App;
