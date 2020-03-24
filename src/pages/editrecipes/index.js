import React,{useState, useEffect} from 'react';
import { Button,
        Form, 
        FormGroup,
        Label,
        Input,
        Container,
        } from 'reactstrap';
import Header from '../../components/Header';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import {Api} from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import {FaRegTrashAlt} from 'react-icons/fa'
import Swal from 'sweetalert2'
import * as Action from '../../redux/actions/constants' 
import { decryptToken } from '../../auth/auth';

const EditRecipe = (props) => {

    const RecipeSchema = Yup.object().shape({
        nome: Yup.string()
          .min(3,'Nome precisa ter no minímo 3 caracteres!')
          .required('Campo Obrigatório!'),
        categoria: Yup.string()
          .required('Campo Obrigatório!'),
        descricao: Yup.string()
        .min(20,'Descrição precisa ter no minímo 20 caracters!')
        .required('Campo Obrigatório!')
    });

    let { id } = useParams();

    const [recipe,setRecipe]=useState({});

    const user = useSelector(state=>state.user.user);

    const [categories,setCategories]=useState([]);
    
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch({type:Action.TOGGLE_LOADING});
        Api.get(`/category`,{headers:{Authorization : `Token ${decryptToken(user.token)}`}}).then(res=>{
            setCategories(res.data);

            if(id===undefined){
                dispatch({type:Action.TOGGLE_LOADING});
            }

        }).catch(e=>{
            console.log(e)
        })

        if((id)!==undefined){
            Api.get(`/recipe/${id}`,{headers:{Authorization : `Token ${decryptToken(user.token)}`}}).then(res=>{
                setRecipe(res.data);
                dispatch({type:Action.TOGGLE_LOADING});
            }).catch(e=>{
                console.log(e);
            })
        }
        //
    },[])

    const handleDelete=()=>{
        Swal.fire({
            title: 'Tem certeza que deseja excluir essa receita',
            text: "Você não vai poder recuperar esse registro!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, Excluir!'

          }).then((result) => {
            if (result.value) {
                
                Api.delete(`/recipe/${id}`,{headers:{Authorization : `Token ${decryptToken(user.token)}`}}).then(res=>{
                    Swal.fire(
                        'Deleted!',
                        'Receita excluída!',
                        'success'
                    )
                    props.history.push('/myrecipes');
                })
            }
          })

    }

  return (
    <>
            <Container fluid>
                <Header title="Adicionar Receita" back history={props.history}/>
                    <div className="recipe-wrapper">
                        {parseInt(id)!==0 &&(
                            <FaRegTrashAlt className="trash-icon" onClick={()=>handleDelete()}/>
                        )}
                    <Formik
                    enableReinitialize
                    initialValues={{
                        nome: recipe.title?recipe.title:"",
                        categoria: recipe.category?recipe.category.id:"",
                        descricao:recipe.description?recipe.description:"",
                    }}
                    validationSchema={RecipeSchema}
                    onSubmit={values => {

                        let newRecipe={
                            title:values.nome,
                            description:values.descricao,
                            category:values.categoria,
                            user:user.id
                        };

                        if(id===undefined){
                            Api.post(`/recipe/`,newRecipe,{headers:{Authorization:`Token ${decryptToken(user.token)}`}}).then(res=>{
                               if(res.status===201){
                                toast.success("Receita Criada com Sucesso", {
                                    position: toast.POSITION.TOP_RIGHT
                                });

                                props.history.push('/myrecipes');
                                }
                            });
                        }else{
                            Api.put(`/recipe/${id}/`,newRecipe,{headers:{Authorization:`Token ${decryptToken(user.token)}`}}).then(res=>{
                                if(res.status===200){
                                    toast.success("Receita Atulizada com Sucesso", {
                                        position: toast.POSITION.TOP_RIGHT
                                    });
                                    props.history.push('/myrecipes');
                                }
                            })
                        }
                    }}
                    >
                    {({ errors, touched,handleSubmit,handleChange,values }) => (
                        <Form className="recipe-form" onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="nome">Nome</Label>
                                <Input type="text" name="nome" value={values.nome} id="exampleEmail" placeholder="Nome da Receita" onChange={handleChange} />
                                {errors.nome && touched.nome ? (
                                    <div className="error-message">{errors.nome}</div>
                                ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label for="categoria">Categoria</Label>
                                <Input type="select" name="categoria" value={values.categoria} onChange={handleChange}>
                                <option value="">Escolha a categoria da receita</option>
                                   {categories.map(category=>{
                                       return(
                                            <option value={category.id}>{category.name}</option>
                                       );
                                   })}
                                </Input>
                                {errors.categoria && touched.categoria ? (
                                    <div className="error-message">{errors.categoria}</div>
                                ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label for="descricao">Decrição</Label>
                                <Input type="textarea" name="descricao" onChange={handleChange} row="3" value={values.descricao}  />
                                {errors.descricao && touched.descricao 
                                ? (
                                    <div className="error-message">{errors.descricao}</div>
                                ) : null}
                            </FormGroup>
                            <Button color="primary" type="submit" className="recipe-btn">{parseInt(id)!==0? "Atualizar Receita" : "Criar Receita"}</Button>
                        </Form> 
                    )}
                    </Formik>
                    </div>
            </Container>
            </>
       );
}

export default EditRecipe;