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

  return (
    <div>
        <Navbar color="primary" light expand="md">
            <NavbarBrand href="/">DEV<span>food</span></NavbarBrand>
                {props.children}
        </Navbar>
    </div>
  );
}

export default Menu;