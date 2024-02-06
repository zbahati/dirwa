import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Healling from "./components/pages/Healling"
import Asset from "./components/pages/Asset"
import StandShip from './components/pages/StandshipDevelopment'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Healing" element={<Healling />} />
        <Route path="/Asset_base_community" element={<Asset />} />
        <Route path="/Active_by_standship" element={<StandShip />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
