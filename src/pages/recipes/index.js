import React,{useState, useEffect} from 'react';
import {
        Container,
        CardBody,
        CardGroup,
        Card,
        CardTitle,
        CardImg,
        CardText,
     } from 'reactstrap';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import pizza from '../../assets/img/pizza.jpg'
import { useSelector, useDispatch } from 'react-redux';
import {Api} from '../../services/api';
import * as Action from '../../redux/actions/constants';
import { decryptToken } from '../../auth/auth';

const Recipes = (props) => {

    const user = useSelector(state=>state.user.user);
    const [recipes,setRecipes] = useState([]);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch({type:Action.TOGGLE_LOADING});
        console.log(decryptToken(user.token));
        Api.get('/recipe',{headers:{Authorization : `Token ${decryptToken(user.token)}`}}).then(res=>{
            setRecipes(res.data);
            dispatch({type:Action.TOGGLE_LOADING})
        }).catch(e=>{
            console.log(e);
        })

    },[user])

  return (
    <>
            <Container fluid>
                <Header title="Receitas"/>
                <div className="recipes">
                <CardGroup>
                    {recipes.map(recipe=>{
                        return(
                        <Card>
                            <CardImg top width="100%" src={recipe.category?recipe.category.image:pizza} />
                            <CardBody>
                            <CardTitle>{recipe.title}</CardTitle>
                            <CardText>{recipe.description}</CardText>
                                <Link className="edit-link" to={`/recipes/detail/${recipe.id}`}>Ver Receita</Link>
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