import React from 'react'
import { Figure, Button, Tooltip } from 'react-bootstrap'
import swal from 'sweetalert'


const NoteItem =(props) =>{
    const {_id, title, body, removeItem} = props

    const handleRemove =()=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Note",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                removeItem(_id)
              swal("Poof! Your Note has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your Note is safe!");
            }
        });   
    }

    const showUser=()=>{
        swal(title, body);
        
    }

    return (
        <div className='mt-3'> 
            <Figure> 
                <block-quote>
                    <p onClick={showUser}>{body}</p>
                </block-quote> 
                    <Button size='sm' className='float-end' onClick={handleRemove}>Remove</Button> 
            </Figure> 
        </div>
    )
}

export default NoteItem