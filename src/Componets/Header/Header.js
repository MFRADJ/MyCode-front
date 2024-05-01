
import React, { useRef, useState } from 'react';
import { Container } from 'reactstrap';
import './Header.css';

const navLinks = [
  {
    display: 'Inscription',
    url: 'http://localhost:3000/Inscription'
  },
  {
    display: 'Connexion',
    url: 'http://localhost:3000/connexion'
  },
  {
    display: 'Catégorie',
    sublinks: [
      { display: "Langage De Développement D'interface ", url: 'http://localhost:3000/Cour' },
      { display: 'Langage De Script', url: 'http://localhost:3000/Cour' },
      { display: 'langage de programation generaliste', url: 'http://localhost:3000/Cour' }
    ]
  },
];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Container>
      <header className='header'>
        <Container>
          <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo">
              <h2 className='d-flex align-items-center'> 
              <i class="ri-code-s-slash-line"></i>MyCode
              </h2>
            </div>
            <div className="nav nav d-flex align-items-center gap-5">
              <div className="nav__menu" ref={menuRef} onClick={toggleDropdown}>
                <ul className="nav__list">
                  {navLinks.map((item, index) => (
                    <li key={index} className="nav__item">
                      {item.sublinks ? (
                        <div className="dropdown">
                          <a href="#" className="dropdown-toggle" role="button" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
                            {item.display}
                          </a>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            {item.sublinks.map((sublink, subIndex) => (
                              <a key={subIndex} className="dropdown-item" href={sublink.url}>{sublink.display}</a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a href={item.url}>{item.display}</a>
                      )}
                    </li> 
                  ))}
                </ul>
              </div>
              <div className="nav__right">
                
              </div>
            </div>
            <div className="mobile__menu">
              <span>
                <i className='ri-menu-line' onClick={toggleDropdown}></i>
              </span>
            </div>
          </div>
        </Container>
      </header>
    </Container>
  );
}

export default Header;
