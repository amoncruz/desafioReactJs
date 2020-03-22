import React,{useState, useEffect} from 'react';
import {
        Container,
        Collapse,
        NavbarToggler,
        NavItem,
        NavLink,
        Nav,
        } from 'reactstrap';
import Menu from '../../components/NavBar';
import Header from '../../components/Header';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import * as Action from '../../redux/actions/constants';


const DetailsRecipe = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    let { id } = useParams();

    const [recipe,setRecipe]=useState({});

    const user = useSelector(state=>state.user.user);

    const dispatch = useDispatch();

    useEffect(()=>{
        
        if(parseInt(id)!==0){
            Axios.get(`https://receitas.devari.com.br/api/v1/recipe/${id}`,{headers:{Authorization : `Token ${user.token}`}}).then(res=>{
                setRecipe(res.data);
            }).catch(e=>{
                console.log(e);
            })
        }
        //
    },[])

    const handleLogout=()=>{
        dispatch({type:Action.USER_LOGOUT})
        props.history.push("/");
    }

  return (
    <>
            <Menu>
            <NavbarToggler onClick={toggle}/>   
            <Collapse isOpen={isOpen} navbar> 
                <Nav className="mx-auto" navbar>
                    <NavItem>
                        <NavLink href="/recipes">Receitas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/myrecipes">Minhas Receitas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/recipes/0">Adicionar Receitas</NavLink>
                    </NavItem>

                    <NavItem className="sign-out">
                        <h6>{user.name}</h6>
                        <img src={user.image} className="img-profile-menu"/>
                        <Link onClick={()=>handleLogout()}>
                        Sair
                        </Link>
                    </NavItem>
           
                </Nav>
                </Collapse>
            </Menu>
            <Container fluid>

                <Header title={recipe.category?recipe.category.name:""} back history={props.history}/>
                    <div className="recipe-detail-wrapper">
                        <div class="img">
                            <img src={recipe.category?recipe.category.image:""} width="100%"/>
                        </div> 
                        <div className="detail-body">
                            <h4>Descrição</h4>
                            <p>{recipe.description}</p>
                        </div>   
                    </div>
            </Container>
            </>
       );
}

export default DetailsRecipe;