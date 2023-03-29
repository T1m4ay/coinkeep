import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import storage from "./components/Icons/component";
import icod from "./components/Icons/building.svg";

function App() {
  const [income, setIncome] = useState(
    JSON.parse(localStorage.getItem("income")) || [
      {
        id: 1,
        title: "IITU",
        icon: icod,
      },
      {
        id: 2,
        title: "Salary",
        icon: 2,
      },
      {
        id: 3,
        title: "Other",
        icon: 3,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  return (
    <div>
      <Header />
      <Main income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
