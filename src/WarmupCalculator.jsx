import { useState } from "react";

export default function WarmupCalculator() {
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("5");
  const [results, setResults] = useState([]);

  const roundToNearest2_5 = (num) => Math.round(num / 2.5) * 2.5;

  const calculateSets = () => {
    if (!weight) return;
    const w = parseFloat(weight);
    let reps = [{ label: "Set 0", weight: "Bar (20 kg)", reps: "5-15" }];

    if (sets === "3") {
      reps.push(
        { label: "Set 1", weight: `${roundToNearest2_5(w * 0.5)} kg`, reps: "5-10" },
        { label: "Set 2", weight: `${roundToNearest2_5(w * 0.7)} kg`, reps: "3-5" },
        { label: "Set 3", weight: `${roundToNearest2_5(w * 0.85)} kg`, reps: "1-3" }
      );
    } else if (sets === "4") {
      reps.push(
        { label: "Set 1", weight: `${roundToNearest2_5(w * 0.45)} kg`, reps: "5-10" },
        { label: "Set 2", weight: `${roundToNearest2_5(w * 0.65)} kg`, reps: "3-6" },
        { label: "Set 3", weight: `${roundToNearest2_5(w * 0.8)} kg`, reps: "2-4" },
        { label: "Set 4", weight: `${roundToNearest2_5(w * 0.9)} kg`, reps: "1-2" }
      );
    } else {
      reps.push(
        { label: "Set 1", weight: `${roundToNearest2_5(w * 0.45)} kg`, reps: "4-8" },
        { label: "Set 2", weight: `${roundToNearest2_5(w * 0.65)} kg`, reps: "2-5" },
        { label: "Set 3", weight: `${roundToNearest2_5(w * 0.75)} kg`, reps: "1-3" },
        { label: "Set 4", weight: `${roundToNearest2_5(w * 0.85)} kg`, reps: "1-2" },
        { label: "Set 5", weight: `${roundToNearest2_5(w * 0.925)} kg`, reps: "1" }
      );
    }

    setResults(reps);
  };

  const reset = () => {
    setWeight("");
    setSets("5");
    setResults([]);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
      <h1 className="text-2xl font-bold mb-6">Warm-up Calculator</h1>

      <label htmlFor="weight" className="block mb-2 font-medium">
        Enter working weight (kg):
      </label>
      <input
        id="weight"
        name="weight"
        type="text"
        inputMode="numeric"
        aria-describedby="weight-help"
        pattern="[0-9]*"
        value={weight}
        onChange={(e) => {
          if (/^\d*(\.\d*)?$/.test(e.target.value)) setWeight(e.target.value);
        }}
        className="w-full p-3 border border-gray-400 dark:border-gray-500 rounded-lg mb-2 text-center text-black
                   focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
      <p id="weight-help" className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Numbers only. Example: 100 or 102.5
      </p>

      <label htmlFor="sets" className="block mb-2 font-medium">
        Number of warm-up sets:
      </label>
      <select
        id="sets"
        name="sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        className="w-full p-3 border border-gray-400 dark:border-gray-500 rounded-lg mb-6 text-black
                   focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      >
        <option value="3">3 Sets</option>
        <option value="4">4 Sets</option>
        <option value="5">5 Sets</option>
      </select>

      <div className="flex flex-col gap-4">
        <button
          onClick={calculateSets}
          className="bg-blue-600 hover:bg-blue-700 text-white py-6 text-xl rounded-2xl transition
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600
                     dark:focus:ring-offset-gray-900"
        >
          Calculate
        </button>
        <button
          onClick={reset}
          className="bg-gray-300 hover:bg-gray-400 text-black py-6 text-xl rounded-2xl transition
                     dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600
                     dark:focus:ring-offset-gray-900"
        >
          Reset
        </button>
      </div>

      <div className="mt-8" aria-live="polite" role="status">
        {results.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-3">Results:</h2>
            <ul className="space-y-2">
              {results.map((set, index) => (
                <li
                  key={index}
                  className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600
                             text-black dark:text-white"
                >
                  <strong>{set.label}</strong>: {set.weight}, {set.reps} reps
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
