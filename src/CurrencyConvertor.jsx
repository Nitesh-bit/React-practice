// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [fromCurr, setFromCurrency] = useState("USD");
  const [toCurr, setToCurrency] = useState("USD");
  const [value, setValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function convertAmount() {
      setIsLoading(true);
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${value}&from=${fromCurr}&to=${toCurr}`
      );
      const data = await response.json();
      setConvertedValue(data.rates[toCurr]);
      setIsLoading(false);
    }
    if (toCurr === fromCurr) {
      return setConvertedValue(value);
    }
    convertAmount();
  }, [value, fromCurr, toCurr]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCurr}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurr}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {convertedValue} {toCurr}
      </p>
    </div>
  );
}
