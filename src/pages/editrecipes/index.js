import React,{useState} from 'react';
import { Button,
        Form, 
        FormGroup,
        Label,
        Input,
        Container,
        Collapse,
        NavbarToggler,
        NavItem,
        NavLink,
        Nav,
        } from 'reactstrap';
import Menu from '../../components/NavBar';
import Header from '../../components/Header';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import profile from '../../assets/img/profile.jpg'
import {IoIosArrowBack} from 'react-icons/io'

const EditRecipe = (props) => {

    const RecipeSchema = Yup.object().shape({
        email: Yup.string()
          .email('email inválido')
          .required('Campo Obrigatório!'),
        password: Yup.string()
          .required('Campo Obrigatório!'),
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
                        <h6>Nome do Fulano</h6>
                        <img src={profile} className="img-profile-menu"/>
                        <Link>
                        Sair
                        </Link>
                    </NavItem>
           
                </Nav>
                </Collapse>
            </Menu>
            <Container fluid>
                <Header title="Adicionar Receita" back/>
                    <div className="recipe-wrapper">
                    <Formik
                    initialValues={{
                        nome: '',
                        categoria: '',
                        descricao:'',
                    }}
                    validationSchema={RecipeSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        toast.success("Login Success!", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }}
                    >
                    {({ errors, touched,handleSubmit,handleChange }) => (
                        <Form className="recipe-form" onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="nome">Nome</Label>
                                <Input type="text" name="nome" id="exampleEmail" placeholder="Nome da Receita" onChange={handleChange} />
                                {errors.nome && touched.nome ? (
                                    <div className="error-message">{errors.nome}</div>
                                ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label for="categoria">Categoria</Label>
                                <Input type="select" name="categoria" onChange={handleChange}>
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Input>
                                {errors.categoria && touched.categoria ? (
                                    <div className="error-message">{errors.categoria}</div>
                                ) : null}
                            </FormGroup>

                            <FormGroup>
                                <Label for="descricao">Decrição</Label>
                                <Input type="textarea" name="descricao" onChange={handleChange} row="3" />
                                {errors.descricao && touched.descricao 
                                ? (
                                    <div className="error-message">{errors.descricao}</div>
                                ) : null}
                            </FormGroup>
                            <Button color="primary" type="submit" className="recipe-btn">Criar Receita</Button>
                        </Form> 
                    )}
                    </Formik>
                    </div>
            </Container>
            </>
       );
}

export default EditRecipe;