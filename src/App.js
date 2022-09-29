import "./App.css";
import Calculation from "./components/Calculation/Calculation";

import Main from "./components/Main/Main";
import Title from "./components/Title/Title";

function App() {
  const handleDataClick = (data) => {
    console.log(data);
  };
  return (
    <div className="grid  md:grid-cols-3 lg:grid-cols-3 grid-cols-2 font-sans pb-10">
      <div className="left md:col-span-2  lg:cols-span-3 cols-span-1">
        <Title></Title>
        <Main handleDataClick={handleDataClick}></Main>
      </div>
      <div className="right col-span-1">
        <Calculation></Calculation>
      </div>
    </div>
  );
}

export default App;
