import { useState } from "react";
import Tes from "./pages/Tes";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-customGray-1">
      <Tes />
    </div>
  );
}

export default App;
