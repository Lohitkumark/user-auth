import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";

const NotesForm = (props) =>{
    const {formSubmission} = props

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit=(e) =>{
        e.preventDefault()
        const notesData = {
            title:title,
            body:body
        }
        formSubmission(notesData);
        setTitle('')
        setBody('')
    }

    const handleChange = (e) =>{
        e.preventDefault()
        if(e.target.name === 'title') {setTitle(e.target.value)}
        else if(e.target.name === 'body'){setBody(e.target.value)}
    }

    return (
        <Form onSubmit={handleSubmit} className="container card text-light  bg-dark mb-2 mt-1">
            <Form.Label className ='mt-4'><b>Title</b></Form.Label>
            <Form.Control type='text' placeholder='Title' name = 'title' value={title} onChange={handleChange}/><br/>
            <Form.Label><b>Body</b></Form.Label>
            <Form.Control as='textarea' placeholder="Body" name='body' value={body} onChange={handleChange}/><br/>
            <Button className='mb-3' type='submit'>Save</Button>
        </Form>
    )
}
export default NotesForm