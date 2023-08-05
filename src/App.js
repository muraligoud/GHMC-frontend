import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Houseform from './components/Houseform';
import Driverform from './components/Driverform';
import Adminform from './components/Adminform'
import Adminlogin from './components/Adminlogin';
import Driverlogin from './components/Driverlogin';
import Houselogin from './components/Houselogin';
import Welcomehouse from './components/Welcomehouse';
import DashboardComponent from './components/dashboard';
function App() {
  return (
    // <Houseform />
    // <Driverform />
    // <Adminform/>
    <Router>
      <Routes>  
        <Route path='/' element={<Adminlogin/>}/>
        <Route path='/dashboard' element={<DashboardComponent/>}/>
        {/* <Route path="/admin"> */}
        <Route path="/admin/register" element={<Adminform/>}/>
        <Route path="/admin/login" element={<Adminlogin/>}/>
        {/* </Route> */}
        {/* <Route path="/driver"> */}
        <Route path="/driver/register" element={<Driverform />}/>
        <Route path="/driver/login" element={<Driverlogin />}/>
        {/* </Route> */}
        {/* <Route path="/user"> */}
        <Route path="/user/register" element={<Houseform/>}/>
        <Route path="/user/login" element={<Houselogin />}/>

        <Route path="/user/welcome" element={<Houselogin />}/>
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Houseform from './components/Houseform';
// import Driverform from './components/Driverform';
// import Adminform from './components/Adminform';
// import Adminlogin from './components/Adminlogin';
// import Driverlogin from './components/Driverlogin';
// import Houselogin from './components/Houselogin';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           {/* Home Page or default component */}
//         </Route>

//         {/* Admin Routes */}
//         <Route path="/admin">
//           <Route path="/register" element={<Adminform />} />
//           <Route path="/login" element={<Adminlogin />} />
//         </Route>

//         {/* Driver Routes */}
//         <Route path="/driver">
//           <Route path="/register" element={<Driverform />} />
//           <Route path="/login" element={<Driverlogin />} />
//         </Route>

//         {/* User (House) Routes */}
//         <Route path="/user">
//           <Route path="/register" element={<Houseform />} />
//           <Route path="/login" element={<Houselogin />} />
//         </Route>

//         {/* 404 Page or Not Found Page */}
//         <Route path="*">
//           {/* Component for handling 404 page */}
//           <div>404 - Not Found</div>
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;
