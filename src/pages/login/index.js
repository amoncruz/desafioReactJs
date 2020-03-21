import React from 'react';
import { Button, Form, FormGroup, Label, Input,Container } from 'reactstrap';
import Menu from '../../components/NavBar';
import Header from '../../components/Header';

const Login = (props) => {
  return (
    <>
            <Menu/>
            <Container fluid>
                <Header title="Entre em sua Conta"/>
                    <div className="login-wrapper">
                        <Form className="login-form">
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                            </FormGroup>
                            <Button color="primary">Entrar</Button>
                        </Form> 
                    </div>
            </Container>
            </>
       );
}

export default Login;