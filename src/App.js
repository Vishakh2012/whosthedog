import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Popup from './components/Popup';
import Home from './Home';
import Play from './Play';
import Settings from './Settings';

function App() {
  return (
    <Router>
    <div className="">
        <Nav/>
    </div>
    <div>
      <Routes>
        <Route exact path = "/" element = { <Home/> }></Route>
        <Route exact path = "/Play" element = { <Play/> }></Route>
        <Route exact path = "/Settings" element = { <Settings/> }></Route>
        <Route exact path = "/popup" element = { <Popup/> }></Route>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
