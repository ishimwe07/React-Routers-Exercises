import { BrowserRouter, Routes, Route} from "react-router-dom";

function Home(){
  return (
    <h1 className="text-5xl bg-blue-500 px-5 py-2 font-extrabold h-screen flex justify-center items-center">Hello, react Routers!</h1>
  )
}

function About(){
  return (
    <h1 className="text-5xl bg-blue-500 px-5 py-2 font-extrabold h-screen flex justify-center items-center">It about to go down!</h1>
  )
}
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;