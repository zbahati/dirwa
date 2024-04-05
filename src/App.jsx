import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Healling from "./components/pages/Healling"
import Asset from "./components/pages/Asset"
import StandShip from './components/pages/StandshipDevelopment'
import WhereWeWork from "./components/pages/WhereWeWork"
import NewsAndStories from "./components/pages/NewsAndStories"
import Youth from "./components/pages/Youth"
import Women from "./components/pages/Women"
import Announcements from "./components/pages/Announcements"
import ConflictFamilies from "./components/pages/ConflictFamilies"
import Refugees from "./components/pages/Refugees"
import CommunityLeaders from "./components/pages/CommunityLeaders"
import '@fortawesome/fontawesome-free/css/all.css';
import Volunteer from "./components/pages/Volunteer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Healing" element={<Healling />} />
        <Route path="/Asset_base_community" element={<Asset />} />
        <Route path="/Active_by_standship" element={<StandShip />} />
        <Route path="/Where_we_work" element={<WhereWeWork />} />
        <Route path="/News_and_stories" element={<NewsAndStories />} />
        <Route path="/Youth" element={<Youth />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Conflict" element={<ConflictFamilies />} />
        <Route path="/Refugees" element={<Refugees/>} />
        <Route path="/Community" element={<CommunityLeaders/>} />
        <Route path="/Announcements" element={<Announcements />} />
        <Route path="/Volunteer" element={<Volunteer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
