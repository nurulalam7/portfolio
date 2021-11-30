import React from 'react'
import { Container, Nav, Navbar,NavLink } from 'react-bootstrap'

import './Topbar.css'

const Topbar = () => {
    return (
        <div className="topbar">
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand className="logo" href="#home">NURUL <span>ALALM</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/link">Link</NavLink>
        <a href="https://drive.google.com/file/d/1eXxhAHcZAD03-0_GI8RCMoGQVUsG_Yam/view?usp=sharing"><button>download resume</button></a>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

















            {/* <div className="wrapper">
                <div className="left">
                   <a href="#portfolio" className="logo">portfo<span>lio</span></a>
                   <div className="itemcontainer">
                       <span>01853037540</span>
                   </div>
                   <div className="itemcontainer">
                       <span>nurulalam7540@gmail.com</span>
                   </div>
                </div>
                   
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Topbar
