import "./App.css";
// Importer Jobs components
import Jobs from "./components/Jobs";
// Import jobs data
import data from "./data.json";
// use state from react
import { useState } from "react";

function App() {
  // Add state to the index of the job initial to zéro, First item of jobs List
  const [index, setIndex] = useState(0);

  // On the change of index next or previous button
  const handleChange = (etat) => {
    if (etat === "-" && index !== 0) {
      setIndex(index - 1);
    }
    if (etat === "+" && index + 1 < data.length) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="App">
      <div className="bg-job"></div>

      {/* Afficher le premier job et faire de button pour parcourir les jobs */}
      <Jobs data={data[index]} />
      <div>
        <button onClick={() => handleChange("-")} className="previous">
          {" "}
          &#8249;{" "}
        </button>
        <button onClick={() => handleChange("+")} className="next">
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default App;
