import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import MainBackground from './components/MainBackground';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <MainBackground/>
        <SideNav/>
        <TopNav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/creations" element={<Work/>}/>
          </Routes>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
