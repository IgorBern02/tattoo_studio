import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<h1 className="text-red-500">Hello, World!</h1>}
      />
    </Routes>
  );
}

export default App;
