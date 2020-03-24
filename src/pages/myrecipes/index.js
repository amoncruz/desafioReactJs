import React,{useState, useEffect} from 'react';
import Menu from '../../components/NavBar';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import pizza from '../../assets/img/pizza.jpg'
import {AiOutlinePlus } from 'react-icons/ai';
import {
        Container,
        CardBody,
        CardGroup,
        Card,
        CardTitle,
        CardImg,
        CardText,
     } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import {Api} from '../../services/api'
import * as Action from '../../redux/actions/constants'
import { decryptToken } from '../../auth/auth';

const MyRecipes = (props) => {

    const [recipes,setRecipes]=useState([]);

    const user = useSelector(state=>state.user.user);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({type:Action.TOGGLE_LOADING});
        Api.get(`/recipe?user=${user.id}`,{headers:{Authorization : `Token ${decryptToken(user.token)}`}}).then(res=>{
            setRecipes(res.data);
            dispatch({type:Action.TOGGLE_LOADING});
        }).catch(e=>{
            console.log(e); 
        })
    },[]);

  return (
    <>
            <Container fluid>
                <Header title="Minhas Receitas"/>
                <div className="recipes">
                <CardGroup>
                    {recipes.map(recipe=>{
                        return(
                        <Card>
                            <CardImg top width="100%"  src={recipe.category?recipe.category.image:pizza} />
                            <CardBody>
                            <CardTitle>{recipe.title}</CardTitle>
                            <CardText>{recipe.description}</CardText>
                            <Link className="edit-link" to={`/myrecipes/update/${recipe.id}`}>Editar</Link>
                            </CardBody>
                        </Card>
                        )
                    })}
                    <Card className="add-card">
                        <AiOutlinePlus className="plus-icon"/>
                        <Link to="/myrecipes/create">Adicionar Receita</Link>
                    </Card>
                    </CardGroup>
                </div>
            </Container>
            </>
       );
}

export default MyRecipes;