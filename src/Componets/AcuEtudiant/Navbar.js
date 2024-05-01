import React, {useRef} from 'react'
import {Container, container } from 'reactstrap';
import "remixicon/fonts/remixicon.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const navLinks=[
  {
    display:'Mes Cours',
    url:'http://localhost:3000/Cour'
  },
  
  {
    display:'profil',
    url:'http://localhost:3000'
  },
  {
    display:'Mes devoirs',
    url:'http://localhost:3000'

  },
 

]
 const Navbar = () => {
const menuRef=useRef()
const menuToggle=()=> menuRef .classList="current classList toggle"('active__menu')



  return (
    < Container>
        <header className='header'>
          <container>
            <div className="navigation d-flex align-items-center justify-content-between">
              <div className="logo">
                <h2 className='d-flex align-items-center'> 
                <i  class="ri-code-s-slash-line"></i>MyCode
                   </h2>
              </div>
              <div className="nav nav d-flex align-items-center gap-5"> 
            {/*  crée un conteneur de classe "nav" avec une mise en page flexible (flex)
             et des éléments alignés horizontalement avec un espacement de 5 unités.*/ }
                <div className="nav__menu" ref={menuRef} onClick={menuToggle} >
                 {/* représente un élément de menu de navigation qui réagit à un clic pour basculer l'affichage du menu.*/ } 
                  <ul className="nav__list">  
                  {/* crée une liste non ordonnée pour contenir les éléments de la barre de navigation */}
{
                    navLinks.map((item,index) => (
                   <li  key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                    </li> 
       
       ))
       }            
                  </ul>
                </div>
                <div className="nav__right">
                  <p className='mb-0 d-flex align-items-center gap-3'>
                  <i class="ri-phone-line"></i>+21675000900
                  </p>
                </div>
              </div>
              <div className="mobile__menu">
                <span>
                  <i class='ri-menu-line' onClick={menuToggle}></i>
                </span>
              </div>
            </div>
          </container>
        </header>

    </ Container>
  )
}
export default Navbar;