import Hero from "./components/Hero";
import Navbar from "./components/Navigation/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Founder from "./components/Pages/Founder";
import About from "./components/Pages/About";
import Prices from "./components/Pages/Prices";

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/address"></Route> */}
          <Route path="/founder" element={<Founder />}></Route>
          <Route path="/prices" element={<Prices />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
