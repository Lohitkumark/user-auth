import React from "react";
import {Link, Route, withRouter} from 'react-router-dom'
import PrivateRoute from '../helper/privateRoute'
import Home from './Home';
import Register from './Register';  
import Login from './Login';
import Account from "./Account";
import NotesContainer from "./NotesContainer";
import swal from 'sweetalert'
import {Nav, Navbar, Container} from 'react-bootstrap'

const NavBar =(props)=>{
    const {userLoggedIn, handleAuth} = props
    return(
            <div>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/"><h2>USER AUTHENTICATION</h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                            <Nav.Item>
                                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            </Nav.Item>
                            {userLoggedIn ? (
                                <>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={"/Account"}>Account</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={'/Notes'}>Notes</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='' onClick={()=>{
                                        localStorage.removeItem('token')
                                        swal('successfully logged out')
                                        props.history.push('/')
                                        handleAuth()
                                    }}>Logout</Nav.Link> 
                                </Nav.Item>  
                                </>
                            ):(
                                <>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={"/Register"}>Register</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={'/Login'}>Login</Nav.Link>
                                </Nav.Item>
                                </>
                            )}
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
                <Route path='/' component={Home} exact={true}/>
                <Route path='/Register' component={Register}/>
                <Route path='/Login' render={(props)=>{
                    return (
                        <Login {...props}  handleAuth={handleAuth}/>
                    )
                }}/>
                <PrivateRoute path='/Account' component={Account}/>
                <PrivateRoute path ='/Notes' component={NotesContainer}/>
            </div>
        )
    }

export default withRouter(NavBar)