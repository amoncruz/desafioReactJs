import React,{useState} from 'react';
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

const Home = (props) => {

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
                <Header title="Receitas"/>
                <div className="recipes">
                <CardGroup>
                    <Card>
                        <CardImg top width="100%" src={pizza} />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button color="primary">Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={pizza} />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button color="primary">Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={pizza} />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="primary">Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={pizza} />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="primary">Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={pizza} />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="primary">Button</Button>
                        </CardBody>
                    </Card>
                    </CardGroup>
                </div>
            </Container>
            </>
       );
}

export default Home;