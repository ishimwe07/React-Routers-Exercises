import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./nav";
import Home from "./home";
import About from "./about";
import Vans from "./vans";
import Footer from "./footer";
import VanDetails from "./vanDetails";

function App(){


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;