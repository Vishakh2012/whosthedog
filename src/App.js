import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
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
        <Route exact path = "/" element = { <Play/> }></Route>
        <Route exact path = "/" element = { <Settings/> }></Route>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
