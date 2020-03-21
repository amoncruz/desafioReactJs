import React from 'react';
import { Button, Form, FormGroup, Label, Input,Container } from 'reactstrap';
import Menu from '../../components/NavBar';
import Header from '../../components/Header';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Login = (props) => {

    const SignInSchema = Yup.object().shape({
        email: Yup.string()
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
                        email: '',
                        password: '',
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                    >
                    {({ errors, touched,handleSubmit,handleChange }) => (
                        <Form className="login-form" onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange={handleChange} />
                                {errors.email && touched.email ? (
                                    <div className="error-message">{errors.email}</div>
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