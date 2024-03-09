import logo from './logo.svg';
import './App.css';
import Register from './Comps/Register';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Comps/Login';
import Profile from './Comps/Profile';
import EditDetails from './Comps/EditDetails';
import SystemAdmin from './Comps/SystemAdmin';


function App() {
  return (
    <div>
      <div>
      <Link to="/">login</Link> |
      <Link to="/register">register</Link>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/editdetails" element={<EditDetails />}/>
        <Route path="/systemadmin" element={<SystemAdmin />}/>
      </Routes> 
    </div>
  );
}

export default App;
