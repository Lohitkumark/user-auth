import React,{useState} from "react";  
import { Container, Form, Button, Card } from "react-bootstrap";
import axios from "../config/axios";  
import swal  from "sweetalert";

const Register=(props)=>{
    const [userName, setUserName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const handleChange=(e)=>{
        if(e.target.name==='userName'){setUserName(e.target.value)}
        else if(e.target.name==='email'){setEmail(e.target.value)}
        else if(e.target.name==='password'){setPassword(e.target.value)}
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            username: userName,
            email:email,
            password:password
        }
        // console.log(formData);
        axios.post('/users/register', formData)
            .then((response)=>{
                const result=response.data
                if(result.hasOwnProperty('errors')){
                    swal(result.message)
                }else{
                   swal('successfully registered')
                    props.history.push('/Login')
                }
            })
            .catch((err)=>{
                swal(err);
            })
    }

    return (
        <div className='mt-4'>
            <Container className='col-md-4'>
                <Card  style={{ width: '25rem' }} className='bg-dark text-light mb-3'>
                    <Card.Body>
                        <h2>Register With Us</h2>
                    </Card.Body>
                </Card>
                <Card  style={{ width: '25rem'}} className='bg-dark text-light mb-3'>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control type='text' placeholder='Enter username' value={userName} onChange={handleChange} name='userName'/><br/>
                        <Form.Control type='email' placeholder='Enter email' value={email} onChange={handleChange} name='email'/><br/>
                        <Form.Control type='password' placeholder='Enter password' value={password} onChange={handleChange} name='password'/><br/>
                        <Button type="submit">Register</Button>
                    </Form>
                </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Register