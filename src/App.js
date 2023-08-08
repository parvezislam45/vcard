import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Signup from './Components/Authentication/Signup';
import Login from './Components/Authentication/Login';
import Home from './Components/Home';
import AllProduct from './Components/Product/AllProduct';
import RequireAuth from './RequireAuth/RequireAuth';
import Dashboard from './Dashboard/Dashboard';
import AllUser from './Dashboard/AllUser';
import AllCard from './Dashboard/Vcard';
import AdminBoard from './Components/Product/AdminBoard';
import Vcard from './Dashboard/Vcard';
import Appointment from './Dashboard/Appointment';
import Affiliations from './Dashboard/Affiliations';
import Setting from './Dashboard/Setting';
import Enquiries from './Dashboard/Enquiries';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<AllProduct/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       <Route path='/dashboard' element={<AdminBoard/>}></Route>
       <Route path='/vcard' element={<Vcard/>}></Route>
       <Route path='/enquiries' element={<Enquiries/>}></Route>
       <Route path='/appointment' element={<Appointment/>}></Route>
       <Route path='/affiliations' element={<Affiliations/>}></Route>
       <Route path='/setting' element={<Setting/>}></Route>
       
      
       
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
