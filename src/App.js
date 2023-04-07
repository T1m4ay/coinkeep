import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import storage from "./components/Icons/component";

function App() {
  const [income, setIncome] = useState(
    JSON.parse(localStorage.getItem("income")) || [
      {
        id: 1,
        title: "IITU",
        sum: 100000,
        icon: storage.iconsForIncome[1],
        color: "rgb(0, 190, 238)",
      },
      {
        id: 2,
        title: "Salary",
        sum: 150000,
        icon: storage.iconsForIncome[4],
        color: "rgb(0, 190, 238)",
      },
      {
        id: 3,
        title: "Other",
        sum: 30000,
        icon: storage.iconsForIncome[2],
        color: "rgb(0, 190, 238)",
      },
      {
        id: 4,
        title: "Other",
        sum: 0,
        icon: storage.iconsForIncome[2],
        color: "rgb(0, 190, 238)",
      },
      {
        id: 5,
        title: "Other",
        sum: 0,
        icon: storage.iconsForIncome[2],
        color: "rgb(0, 190, 238)",
      },
      {
        id: 6,
        title: "Other",
        sum: 0,
        icon: storage.iconsForIncome[2],
        color: "rgb(0, 190, 238)",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  const [accounts, setAccounts] = useState(
    JSON.parse(localStorage.getItem("accounts")) || [
      {
        id: 1,
        title: "Kaspi",
        sum: 15000,
        finishSum: 25000,
        icon: storage.iconsForAccount[1],
        color: "rgb(255, 205, 0)",
        fill: "linear-gradient(to top, rgb(255, 205, 0) 100%, transparent 0%)",
      },
      {
        id: 2,
        title: "Halyk",
        sum: 80000,
        finishSum: 100000,
        icon: storage.iconsForAccount[3],
        color: "rgb(255, 205, 0)",
        fill: "linear-gradient(to top, rgb(255, 205, 0) 100%, transparent 0%)",
      },
      {
        id: 3,
        title: "Cash",
        sum: 0,
        finishSum: 180000,
        icon: storage.iconsForAccount[2],
        color: "rgb(255, 205, 0)",
        fill: "linear-gradient(to top, rgb(255, 205, 0) 100%, transparent 0%)",
      },
    ]
  );

  accounts.map((accounts) => {
    if (
      accounts.sum == accounts.finishSum ||
      accounts.maxSum > accounts.totalSum
    ) {
      accounts.color = "green";
      accounts.fill =
        "linear-gradient(to top, " +
        accounts.color +
        " " +
        Math.round((accounts.totalSum / accounts.maxSum) * 100) +
        "%, rgb(194, 198, 202) " +
        Math.round((accounts.totalSum / accounts.maxSum) * 100) +
        "%)";
      console.log(accounts.fill);
    } else {
      accounts.color = "red";
      accounts.fill = "linear-gradient(to top, red 100%, transparent 0%";
      console.log(accounts.fill);
    }
  });

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || [
      {
        id: 1,
        title: "Products",
        icon: storage.iconsForExpenses[1],
        maxSum: 30000,
        totalSum: 15000,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
      {
        id: 2,
        title: "Clothing",
        icon: storage.iconsForExpenses[2],
        maxSum: 70000,
        totalSum: 45000,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
      {
        id: 3,
        title: "Home",
        icon: storage.iconsForExpenses[3],
        maxSum: 30000,
        totalSum: 30000,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
      {
        id: 4,
        title: "Phone",
        icon: storage.iconsForExpenses[4],
        maxSum: 10000,
        totalSum: 0,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
      {
        id: 5,
        title: "Transport",
        icon: storage.iconsForExpenses[5],
        maxSum: 25000,
        totalSum: 1500,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
      {
        id: 6,
        title: "Entertain",
        icon: storage.iconsForExpenses[6],
        maxSum: 40000,
        totalSum: 47000,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
      {
        id: 7,
        title: "Services",
        icon: storage.iconsForExpenses[7],
        maxSum: 15000,
        totalSum: 12000,
        color: "rgb(194, 198, 202)",
        fill: "",
      },
    ]
  );

  expenses.map((expenses) => {
    if (
      expenses.maxSum == expenses.totalSum ||
      expenses.maxSum > expenses.totalSum
    ) {
      expenses.color = "green";
      expenses.fill =
        "linear-gradient(to top, " +
        expenses.color +
        " " +
        Math.round((expenses.totalSum / expenses.maxSum) * 100) +
        "%, rgb(194, 198, 202) " +
        Math.round((expenses.totalSum / expenses.maxSum) * 100) +
        "%)";
      console.log(expenses.fill);
    } else {
      expenses.color = "red";
      expenses.fill = "linear-gradient(to top, red 100%, transparent 0%";
      console.log(expenses.fill);
    }
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <Header />
      <Main
        income={income}
        setIncome={setIncome}
        accounts={accounts}
        setAccounts={setAccounts}
        expenses={expenses}
        setExpense={setExpenses}
      />
    </div>
  );
}

export default App;
