import React from 'react';
import { Button, Form, FormGroup, Label, Input,Container } from 'reactstrap';
import Menu from '../../components/NavBar';
import Header from '../../components/Header';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {useDispatch} from 'react-redux';
import * as Action from '../../redux/actions/constants';
import history from '../../history/history';

const Login = (props) => {

    const dispatch=useDispatch();

    const SignInSchema = Yup.object().shape({
        username: Yup.string()
          .email('email inválido')
          .required('Campo Obrigatório!'),
        password: Yup.string()
          .required('Campo Obrigatório!'),
    });

  return (
    <>
            <Menu/>
            <Container fluid>
                <Header title="Entre em sua Conta"/>
                    <div className="login-wrapper">
                    <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={values => {
                            console.log(values)
                        dispatch({type:Action.USER_LOGIN_REQUEST,payload:{values}});
                        props.history.push("/recipes");
                        // same shape as initial values
                        toast.success("Login Success!", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }}
                    >
                    {({ errors, touched,handleSubmit,handleChange }) => (
                        <Form className="login-form" onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="username" id="exampleEmail" placeholder="email" onChange={handleChange} />
                                {errors.username && touched.username ? (
                                    <div className="error-message">{errors.username}</div>
                                ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={handleChange}/>
                                {errors.password && touched.password ? (
                                    <div className="error-message">{errors.password}</div>
                                ) : null}
                            </FormGroup>
                            <Button color="primary" type="submit">Entrar</Button>
                        </Form> 
                    )}
                    </Formik>
                    </div>
            </Container>
            </>
       );
}

export default Login;