import axios from "axios";
import React,{useState, useEffect} from "react";
import { Container, Card } from "react-bootstrap";

const Account = (props)=>{
    const [user, setUser] = useState({})

    useEffect(()=>{
        axios.get('http://dct-user-auth.herokuapp.com/users/account', {
            headers:{
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response)=>{
                const result= response.data
                setUser(result);
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    return (
        <Container className=' col-md-4 mt-4'>
            <Card style={{ width: '20rem' }} className='bg-dark text-light mb-3'>
            <Card.Body>
                <h2>User Account</h2>
            </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }} className='bg-dark text-light'>
                
                <Card.Body>
                    <p><b>Username</b> - {user.username}</p>
                    <p><b>Email</b> - {user.email}</p>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Account