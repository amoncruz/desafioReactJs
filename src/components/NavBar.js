import React, { useState } from 'react';
import { 
    Navbar,
    NavbarBrand,
    } from 'reactstrap';

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