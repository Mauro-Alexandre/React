import{ Link, Routes, Route} from "react-router";

import Home from "./home";
import Jogos from "../assets/jogos";

function app() 
{
  return (
    <main >
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jogos" element={<Jogos />} />
        </Routes>
      </div>
    </main>
  );
}

export default app;
