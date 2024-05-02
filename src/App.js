import React, { Fragment }  from 'react';
import './App.css';
import Conx from './Componets/Authentification/Conx';
import Inscription from './Componets/Authentification/Inscription';
import {Routes, Route, BrowserRouter, Router} from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import HeroSection from './Componets/Hero_Section/HeroSection';
import CompanySection from './Componets/Company-section/Company'; 
import AboutUs from './Componets/About-Us/AboutUs';
import Courses from './Componets/Courses-section/Courses';
import ChooseUs from './Componets/Choose-us/ChooseUs';
import Features from './Componets/Feature-section/features';
import FreeCourse from './Componets/Free-course-section/FreeCourse';
import Testimonial from './Componets/Testimonial/Testimonial';
import Newsletter from './Componets/Newsletter/Newsletter';
import Footer from './Componets/Footer/Footer';
import Home from './Componets/Home';
import Verifier from './Componets/Authentification/Verifier';
import Home2 from './Home2';
import Homeadmin from './Componets/Home/Homeadmin';

import Cour from './Componets/AcuEtudiant/Cour';
import LangageInterface from './Componets/AcuEtudiant/LangageInterface';
import Profile from './Componets/AcuEtudiant/Profile';
import NavbarProf from './Componets/HomeProf/Navbarprof';
import HomeProf from './Componets/HomeProf';
import ProfilProf from './Componets/HomeProf'
import Admin from './Componets/Home/Admin';
import Connexion from './Componets/Authentification/Connexion';
import {Dashboard} from "@mui/icons-material";
function  App () {


  return (
 <>

   

<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/> 
  <Route path='/Conx' element={<Conx/>}/> 
  <Route path='/Inscription' element={<Inscription/>}/> 
  <Route path='/Verifier' element={<Verifier/>}/> 
  <Route path='/Home2' element={<Home2/>}/> 
  <Route path='/Homeadmin' element={<Homeadmin/>}/> 
  <Route path='/Admin' element={<Admin/>}/>
  <Route path='/Cour' element={<Cour/>}/> 
  <Route path='/LangageInterface' element={<LangageInterface/>}/>
  <Route path='/ChooseUs' element={<ChooseUs/>}/>
  <Route path='/NavbarProf' element={<NavbarProf/>}/>
  <Route path='/HomeProf' element={<HomeProf/>}/>
  <Route path='/ProfilProf' element={<ProfilProf/>}/>
  <Route path='/Connexion' element={<Connexion/>}/>
  <Route path = '/DhasboardStudent' element = {<Dashboard/>}/>

</Routes>
</ BrowserRouter>
    <Footer/></>
  );
}

export default App;
