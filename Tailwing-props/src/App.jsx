import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "rahul",
    age: 21,
  };
  let arrArr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card test="abc" />
      <Card test={myObj} name="Rahul" newArr={arrArr} />
    </>
  );
}

export default App;
