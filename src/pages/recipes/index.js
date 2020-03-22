import React,{useState, useEffect} from 'react';
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
import Menu from '../../components/NavBar';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import profile from '../../assets/img/profile.jpg'
import pizza from '../../assets/img/pizza.jpg'
import Axios from 'axios';
import { useSelector } from 'react-redux';

const Recipes = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const user = useSelector(state=>state.user.user);
    const [recipes,setRecipes] = useState([]);

    useEffect(()=>{
        Axios.get("https://receitas.devari.com.br/api/v1/recipe",{headers:{Authorization : `Token ${user.token}`}}).then(res=>{
            setRecipes(res.data);
            console.log(res);
        }).catch(e=>{
            console.log(e);
        })
        console.log(user);
    },[user])

  return (
    <>
            <Menu>
            <NavbarToggler onClick={toggle}/>   
            <Collapse isOpen={isOpen} navbar> 
                <Nav className="mx-auto" navbar>
                    <NavItem>
                        <NavLink href="/receitas">Receitas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/minhasreceitas">Minhas Receitas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/receitas/add">Adicionar Receitas</NavLink>
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
                <Header title="Receitas"/>
                <div className="recipes">
                <CardGroup>
                    {recipes.map(recipe=>{
                        return(
                        <Card>
                            <CardImg top width="100%" src={pizza} />
                            <CardBody>
                            <CardTitle>{recipe.title}</CardTitle>
                            <CardText>{recipe.description}</CardText>
                            <Button color="primary">Button</Button>
                            </CardBody>
                        </Card>

                        );
                    })}
                    </CardGroup>
                </div>
            </Container>
            </>
       );
}

export default Recipes;