import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Cats from "./pages/Cats";
import Dogs from "./pages/Dogs";
import Mission from "./pages/Mission";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Contribute from "./pages/Contribute";
import Charlie from "./individual-cats/Charlie";
import Marley from "./individual-cats/Marley";
import Grisou from "./individual-cats/Grisou";
import Angel from "./individual-cats/Angel";
import Lili from "./individual-cats/Lili";
import Mochi from "./individual-cats/Mochi";
import Donuts from "./individual-dogs/Donuts";
import Nala from "./individual-dogs/Nala";
import Snoop from "./individual-dogs/Snoop";
import Oscar from "./individual-dogs/Oscar";
import Loki from "./individual-dogs/Loki";
import Pearl from "./individual-dogs/Pearl";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/charlie" element={<Charlie />} />
        <Route path="/lili" element={<Lili />} />
        <Route path="/marley" element={<Marley />} />
        <Route path="/grisou" element={<Grisou />} />
        <Route path="/angel" element={<Angel />} />
        <Route path="/mochi" element={<Mochi />} />
        <Route path="/donuts" element={<Donuts />} />
        <Route path="/nala" element={<Nala />} />
        <Route path="/snoop" element={<Snoop />} />
        <Route path="/oscar" element={<Oscar />} />
        <Route path="/loki" element={<Loki />} />
        <Route path="/pearl" element={<Pearl />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
