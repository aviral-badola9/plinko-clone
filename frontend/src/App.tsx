import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Simulation } from "./pages/Simulation";
// import { PlayGame } from "./pages/PlayGame";
import { Navbar } from "./components";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulate" element={<Simulation />} />
        {/* <Route path="/play" element={<PlayGame />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
