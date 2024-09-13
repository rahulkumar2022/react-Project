import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const [val, setValue] = useState(0);
  const increaseval = () => {
    //count = count + 1;
    setValue((val) => val + 1);
    console.log(count);
  };

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Add value
        </button>
        <br />
        <br />
        <div>
          <button onClick={() => setCount((counter) => 0)}>reset</button>
        </div>
        <br />
        <br />
        <div>
          <button onClick={increaseval}> increase </button>
        </div>
      </div>
      <div>
        <p>
          count is {val} {count}
        </p>
      </div>
    </>
  );
}

export default App;
