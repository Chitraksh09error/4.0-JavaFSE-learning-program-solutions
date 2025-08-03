import { useState } from "react";
import CurrencyComponent from "./components/CurrencyComponent";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevState) => prevState + 1);
    alert("Hello Members!");
  };

  const decrement = () => setCounter((prevState) => prevState - 1);

  const sayWelcome = () => alert("welcome");

  function ClickOnMeButton() {
    const OnPress = () => {
      alert("I was clicked");
    };

    return <button onClick={OnPress}>Click on me</button>;
  }

  return (
    <>
      <div>
        {counter}
        <br />
        <button onClick={increment}>Increment</button>
        <br />
        <button onClick={decrement}>Decrement</button>
        <br />
        <button onClick={sayWelcome}>Say welcome</button>
        <br />
        {ClickOnMeButton()}
      </div>

      <div>
        <CurrencyComponent />
      </div>
    </>
  );
};

export default App;
