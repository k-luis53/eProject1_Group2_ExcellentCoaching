import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './Home';
import './App.css';
import './components/Courses/App1.css';
import './components/Courses/SmallCourses/App2.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import NavBar from './components/NavBar/Nav';
import Footer from './components/Footer/Footer';
import ContactUs from './ContactUs';
import FE from './components/Courses/FrontEnd';
import BE from './components/Courses/BackEnd';
import FT from './components/Courses/FullStack';
import Html from './components/Courses/SmallCourses/Html';
import Javascript from './components/Courses/SmallCourses/Javascript';
import ReactJS from './components/Courses/SmallCourses/ReactJS';
import NodeJS from './components/Courses/SmallCourses/NodeJS';
import Php from './components/Courses/SmallCourses/Php';
import Register from './components/NavBar/Login/Register';
import Python from './components/Courses/SmallCourses/Python';
import Sass from './components/Courses/SmallCourses/Sass';
import UserList from './UserList';
import UserDetail from './UserDetail';
import Login from './components/NavBar/Login/Login';
import AboutUs from './AboutUs';


function App() {
  return (
    <div className="App">

      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User"  element={<UserList/>} />
        <Route path="/User/:id"  element={<UserDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/frontend" element={<FE />} />
        <Route path="/backend" element={<BE />} />
        <Route path="/fullstack" element={<FT />} />  
        <Route path="/html" element={<Html />} />  
        <Route path="/javascript" element={<Javascript />} />  
        <Route path="/reactjs" element={<ReactJS />} />  
        <Route path="/nodejs" element={<NodeJS />} />  
        <Route path="/php" element={<Php />} />
        <Route path="/python" element={<Python />} />
        <Route path="/sass" element={<Sass />} />
        {/* <Route path="/login" element={<Login />} />  
        <Route path="/register" element={<Register />} />   */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    <Footer />

    </div>
  );
}

export default App;