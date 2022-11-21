import './App.css';
import Home from './pages/Home';
import MainBackground from './components/MainBackground';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
        <MainBackground/>
        <SideNav/>
        <TopNav/>
    </div>
  );
}

export default App;
