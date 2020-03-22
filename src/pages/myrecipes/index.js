import React,{useState, useEffect} from 'react';
import Menu from '../../components/NavBar';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import profile from '../../assets/img/profile.jpg'
import pizza from '../../assets/img/pizza.jpg'
import {AiOutlinePlus } from 'react-icons/ai';
import { Nav,
        Container,
        NavItem,
        NavLink,
        CardBody,
        CardGroup,
        Card,
        CardTitle,
        CardImg,
        CardSubtitle,
        CardText,
        Button,
        Collapse,
        NavbarToggler
     } from 'reactstrap';
import { useSelector } from 'react-redux';
import Axios from 'axios';

const MyRecipes = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [recipes,setRecipes]=useState([]);

    const user = useSelector(state=>state.user.user);

    useEffect(()=>{
        Axios.get(`https://receitas.devari.com.br/api/v1/recipe?user=${user.id}`,{headers:{Authorization : `Token ${user.token}`}}).then(res=>{
            setRecipes(res.data);
        }).catch(e=>{
            console.log(e);
        })
        console.log('updated!');
    },[]);

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
                        <Link>
                        Sair
                        </Link>
                    </NavItem>
           
                </Nav>
                </Collapse>
            </Menu>
            <Container fluid>
                <Header title="Minhas Receitas"/>
                <div className="recipes">
                <CardGroup>
                    {recipes.map(recipe=>{
                        return(
                        <Card>
                            <CardImg top width="100%" src={pizza} />
                            <CardBody>
                            <CardTitle>{recipe.title}</CardTitle>
                            <CardText>{recipe.description}</CardText>
                            <Link className="edit-link" to={`/recipes/${recipe.id}`}>Editar</Link>
                            </CardBody>
                        </Card>
                        )
                    })}
                    <Card className="add-card">
                        <AiOutlinePlus className="plus-icon"/>
                        <Link to="/recipes/0">Adicionar Receita</Link>
                    </Card>
                    </CardGroup>
                </div>
            </Container>
            </>
       );
}

export default MyRecipes;