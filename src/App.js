import './App.css';
import TemLogo from './components/TemLogo';
import HomeLogo from "./HomeLogo";
import TemNavbar from './components/TemNavbar';
import TemFooter from './components/TemFooter';
import Home from './components/Home';
import Blog from './components/Blog';
import Authors from './components/Authors';
import Contact from './components/Contact';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <TemLogo />
      <HomeLogo />
      <TemNavbar />
      <Home />
      <Blog />
      <Authors />
      <Contact />
      <Login />
      <TemFooter />
    </div>
  );
}

export default App;
