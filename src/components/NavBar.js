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
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/"><h2>USER AUTHENTICATION</h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav className="justify-content-end" href="/home">
                            <Nav.Item>
                                <Nav.Link href ="/">Home</Nav.Link>
                            </Nav.Item>
                            {userLoggedIn ? (
                                <>
                                <Nav.Item>
                                    <Nav.Link href="/Account">Account</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='/Notes'>Notes</Nav.Link>
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
                                    <Nav.Link href="/Register">Register</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='/Login'>Login</Nav.Link>
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