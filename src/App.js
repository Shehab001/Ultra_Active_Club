import "./App.css";
import Calculation from "./components/Calculation/Calculation";

import Main from "./components/Main/Main";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="grid  grid-cols-4 font-sans pb-10">
      <div className="left col-span-3">
        <Title></Title>
        <Main></Main>
      </div>
      <div className="right border-2">
        <Calculation></Calculation>
      </div>
    </div>
  );
}

export default App;
