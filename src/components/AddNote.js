import React from "react";
import { Container } from "react-bootstrap";
import NotesForm from './NotesForm'


const AddNote = (props) =>{
    const {formSubmission} = props
   

    return(
        <div>
            <div className=" card bg-dark text-light">
                <Container>
                     <h1>Add Notes</h1>
                 </Container>
            </div>
            <NotesForm formSubmission={formSubmission}/>
        </div>
    )
}

export default AddNote