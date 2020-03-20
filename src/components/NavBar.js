import React, { useState } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownToggle,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    NavbarText } from 'reactstrap';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar color="primary" light expand="md">
            <NavbarBrand href="/">DEV<span>food</span></NavbarBrand> 
            <NavbarToggler onClick={toggle} />   

            <Collapse isOpen={isOpen} navbar> 
                {props.children}
            </Collapse>  
        </Navbar>
    </div>
  );
}

export default Menu;