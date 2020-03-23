import React,{useState, useEffect} from 'react';
import {Container,
        } from 'reactstrap';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import * as Action from '../../redux/actions/constants';

const DetailsRecipe = (props) => {

    let { id } = useParams();
    const [recipe,setRecipe]=useState({});
    const user = useSelector(state=>state.user.user);
    const dispatch= useDispatch();

    useEffect(()=>{
        
        dispatch({type:Action.TOGGLE_LOADING});
        if(parseInt(id)!==0){
            Axios.get(`https://receitas.devari.com.br/api/v1/recipe/${id}`,{headers:{Authorization : `Token ${user.token}`}}).then(res=>{
                setRecipe(res.data);

                dispatch({type:Action.TOGGLE_LOADING});

            }).catch(e=>{
                console.log(e);
            })
        }
        //
    },[])

  return (
        <>
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