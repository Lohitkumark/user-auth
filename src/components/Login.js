import React,{useState} from "react";  
import axios from '../config/axios'
import swal from 'sweetalert'
import { Container, Card, Button, Form } from "react-bootstrap";

const Login=(props)=>{
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const handleChange=(e)=>{
        if(e.target.name==='email'){setEmail(e.target.value)}
        else if(e.target.name==='password'){setPassword(e.target.value)}
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            email:email,
            password:password
        }
        axios.post('/users/login', formData)
            .then((response)=>{
                const result= response.data
                if(result.hasOwnProperty('errors')){
                    swal(result.errors)
                }else{
                    swal('successfully logged in')
                    localStorage.setItem('token', result.token)
                    props.history.push('/')
                    props.handleAuth()
                }
            })
    }

    return (
        <Container className='col-md-4 mt-4'>
            <Card style={{ width: '25rem'}} className='bg-dark text-light mb-3'>
                <Card.Body>
                    <h2>Login</h2>
                </Card.Body>
            </Card>
            <Card style={{ width: '25rem'}} className='bg-dark text-light mb-3'>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control type='email' placeholder='Enter email' value={email} onChange={handleChange} name='email'/><br/>
                        <Form.Control type='password' placeholder='Enter password' value={password} onChange={handleChange} name='password'/><br/>
                        <Button type="submit">Login</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Login