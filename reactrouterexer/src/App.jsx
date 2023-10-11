import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Vans from "./vans";
import VanDetails from "./vanDetails";
import Dashboard from "./host/dashboard";
import Income from "./host/income";
import Reviews from "./host/reviews";
import HostVans from "./host/hostVans";
import HostVanDetail from "./host/hostVanDetail";
import HostVanInfo from "./host/hostVanInfo";
import HostVanPhotos from "./host/hostVanPhotos";
import HostVanPrice from "./host/hostVanPrices";
import Layout from "./layout";
import { HostLayout } from "./host/hostLayout";

function App(){


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<Income />}/>
            <Route path="reviews" element={<Reviews />}/>
            <Route path="vans" element={<HostVans />}/>

            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />}/>
              <Route path="pricing" element={<HostVanPrice />}/>
              <Route path="photos" element={<HostVanPhotos />}/>
            </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;