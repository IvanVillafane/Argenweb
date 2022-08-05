import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/log.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/Whatsapp.png';
import { BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
  
    return (
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand  clasname="logo"href="/">
            <img src={logo}/>
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inico</Nav.Link>
                <Nav.Link href="#servicios" className={activeLink === 'servicios' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('servicios')}>Servicios</Nav.Link>
                <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Proyectos</Nav.Link>
                <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contacto</Nav.Link>

              </Nav>

              <span className="navbar-text">
                <div className="social-icon"> 
                  <a href="https://api.whatsapp.com/send/?phone=%2B541164254384&text&type=phone_number&app_absent=0"><img src={navIcon3} alt="" /></a>
  
                </div>
                
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    )
  }
  