import { useState } from "react";

const CurrencyComponent = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");

  const convertToEuro = () => {
    if (currency.toLowerCase() === "euro") {
      alert(`Converting to Euro: ${amount * 0.0099}`);
    }
  };

  return (
    <>
      <h2 style={{ color: "green" }}>Currency Convertor</h2>
      <div>
        <p style={{ display: "inline" }}>Amount </p>
        <input type="number" onChange={(e) => setAmount(e.target.value)} />
      </div>

      <div>
        <p style={{ display: "inline" }}>Currency </p>
        <input type="text" onChange={(e) => setCurrency(e.target.value)} />
      </div>

      <button onClick={convertToEuro}>Submit</button>
    </>
  );
};

export default CurrencyComponent;
