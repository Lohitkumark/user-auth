import axios from "../config/axios";
import React,{useState, useEffect} from "react";
import AddNote from "./AddNote";
import NotesList from "./NotesList";
import swal from 'sweetalert'
import { Container, Row, Col } from "react-bootstrap";

const NotesContainer =(props) =>{
    const  [notes, setNotes] = useState([])

    const formSubmission = (notesData) =>{
        axios.post('/api/notes', notesData,{
            headers:{
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response)=>{
            //    console.log(response.data);
            })
            .catch((err)=>{
               swal(err.message)
            })
    }

    useEffect(()=>{
        axios.get('api/notes',{
            headers:{
                'x-auth': localStorage.getItem('token')
            }
        })
        .then((response) =>{
            const result=response.data
            setNotes(result)
        })
        .catch((err)=>{
            swal(err.message)
        })
    },[notes])
   
    const removeItem=(_id)=>{
       axios.delete(`api/notes/${_id}`,{
        headers:{
            'x-auth': localStorage.getItem('token')
        } 
       })
        .then((response) =>{
           
        })
        .catch((err)=>{
            swal(err.message)
        })
     }
    //  console.log(notes);

   
    return (
        <Container className="mt-4">
            <Row>
                <Col md={8}>
                    <NotesList notes={notes} removeItem={removeItem}/>
                </Col>
                <Col md={4}>
                    <AddNote formSubmission={formSubmission}/>
                </Col>
            </Row>
        </Container>
    )
}

export default NotesContainer