import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./Content/NavBar";
import Home from "./Content/Home";
import Games from "./Content/Games";
import Profile from "./Content/Profile";
import Premium from "./Content/Premium";
import Footer from "./Content/Footer";
import Popular from "./Content/Browse/Most-popular/Poplar-anime"
import New from "./Content/Browse/Most-popular/New-anime"
import Simulcast from "./Content/Browse/Most-popular/Simulcast-season"

function App() {
  return (
    <div className="OverAllLook">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Games" element={<Games/>}/>
          <Route path="/Premium" element={<Premium/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Browse/Most-popular/Popular-anime" element={<Popular/>}/>
          <Route path="/Browse/Most-popular/New-anime" element={<New/>}/>
          <Route path="/Browse/Most-popular/Simulcast-season" element={<Simulcast/>}/>

        </Routes>
      </Router>

      <footer id="Footer">
        <Footer />
      </footer>
    </div>
  );
}
 
export default App;
