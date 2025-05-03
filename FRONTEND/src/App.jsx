import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex h-full justify-center items-center">
        <p className="font-bold">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
