import React, { useState, useEffect } from 'react';
import { 
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    NavItem,
    Nav,
    } from 'reactstrap';
import { Link,NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Action from '../redux/actions/constants';

const NavBarNoAthenticated = (props) => {

  return (
    <div>
        <Navbar color="primary" light expand="md">
            <NavbarBrand href="/">DEV<span>food</span></NavbarBrand>
        </Navbar>
    </div>
  );
}

const NavBarAuthenticated=(props)=>{

  const [isOpen, setIsOpen] = useState(false);
  const dispatch=useDispatch();

  const toggle = () => setIsOpen(!isOpen);3
  const handleLogout=()=>{
    dispatch({type:Action.USER_LOGOUT})
    props.history.push("/");
  }

  return(
  <Navbar color="primary" light expand="md">
  <NavbarBrand href="/">DEV<span>food</span></NavbarBrand>
  <NavbarToggler onClick={toggle}/>   
  <Collapse isOpen={isOpen} navbar> 
      <Nav className="mx-auto" navbar>
          <NavItem>
              <NavLink  to="/recipes">Receitas</NavLink>
          </NavItem>
          <NavItem>
              <NavLink exact to="/myrecipes">Minhas Receitas</NavLink>
          </NavItem>
          <NavItem>
              <NavLink  to="/myrecipes/create">Adicionar Receitas</NavLink>
          </NavItem>

          <NavItem className="sign-out">
              <h6>{props.user.name}</h6>
              <img src={props.user.image} className="img-profile-menu"/>
              <Link onClick={()=>handleLogout()}>Sair</Link>
          </NavItem>
      </Nav>
      </Collapse>
      </Navbar>
  );
}

const Menu=()=>{

  const user = useSelector(state=>state.user.user);

  if(user.token!==undefined){
    return(
      <NavBarAuthenticated user={user}/>
    );
  }else{
    return(
        <NavBarNoAthenticated/>
      );
  }

}

export default Menu;