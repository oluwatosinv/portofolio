import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const Nav2 = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return ( 
        <div>
      <Navbar dark expand="md">
        <NavbarBrand className='brandName' href="/">OLuwatosin Faboade</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://docs.google.com/document/d/1wllRNZx-X3itCDGK1bTw5_i4hBM18Qea-xfmBsASKEE/edit?usp=sharing" target="_blank">Resume</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
        
     );
}
 
export default Nav2;