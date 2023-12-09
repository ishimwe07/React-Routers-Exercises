import {Route,RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Vans, {loader as vansLoader} from "./vans";
import VanDetails from "./vanDetails";
import Dashboard from "./host/dashboard";
import Income from "./host/income";
import Reviews from "./host/reviews";
import HostVans from "./host/hostVans";
import HostVanDetail from "./host/hostVanDetail";
import HostVanInfo from "./host/hostVanInfo";
import HostVanPhotos from "./host/hostVanPhotos";
import HostVanPrice from "./host/hostVanPrices";
import NotFoundComponent from "./notFound";
import ErrorComponent from "./errorComponent";
import Layout from "./layout";
import { HostLayout } from "./host/hostLayout";

const routers = createBrowserRouter(createRoutesFromElements(
                <Route element={<Layout />} errorElement={<ErrorComponent />}>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="vans" element={<Vans />} loader={vansLoader} />
                  <Route path="vans/:id" element={<VanDetails />} />

                  <Route path="host" element={<HostLayout />}>
                    <Route path="dashboard" element={<Dashboard />}/>
                    <Route path="income" element={<Income />}/>
                    <Route path="reviews" element={<Reviews />}/>
                    <Route index element={<HostVans />}/>

                    <Route path="vans/:id" element={<HostVanDetail />}>
                      <Route index element={<HostVanInfo />}/>
                      <Route path="pricing" element={<HostVanPrice />}/>
                      <Route path="photos" element={<HostVanPhotos />}/>
                    </Route>
                  </Route>

                  <Route path="*" element={<NotFoundComponent />} />
                </Route>
  
))

function App(){


  return (
    <RouterProvider router={routers} />
  )
}

export default App;