import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import MainBackground from './components/MainBackground';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <MainBackground/>
        <SideNav/>
        <TopNav/>
        {/*<Home/>*/}
        <div className="m-auto w-11/12 h-screen bg-zinc-900 lg:w-10/12">
          <About/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
