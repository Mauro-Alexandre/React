import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home";
import Jogos from "./jogos";

function App() {
  return (
    <Router>
      <main>
        <div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/jogos" element={<Jogos />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
