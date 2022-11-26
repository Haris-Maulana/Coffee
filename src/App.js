// Dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Component
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Branches from "./pages/Branches.jsx";
import Jobs from "./pages/Jobs.jsx";
import Menu from "./pages/Menu.jsx";

// Style
import './App.scss'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/branches" element={<Branches/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
