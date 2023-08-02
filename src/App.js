import './App.css';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
// import Houseform from './components/Houseform';
// import Driverform from './components/Driverform';
import Adminform from './components/Adminform'
function App() {
  return (
    // <Houseform />
    // <Driverform />
    // <Adminform/>
    <Router>
      <Routes>  
        <Route path='/' element={}>
        <Route path="/admin" element={}/>
        <Route path="/driver" element={}/>
        <Route path="/user" element={}/>
      </Routes>
    </Router>
  );
}

export default App;
