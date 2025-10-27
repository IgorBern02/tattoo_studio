import "./index.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ArtistPage } from "./pages/ArtistPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/artist/:id" element={<ArtistPage />} />
    </Routes>
  );
}

export default App;
