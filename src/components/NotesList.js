import React from "react";
import NoteItem from "./NoteItem";


const NotesList =(props)=>{
   const {notes, removeItem, editItem} = props

    
    return (
        <div>
            {
                notes.length === 0 ? (
                    <div display='2'>
                        <h1>No Notes Found</h1>
                        <b> Add Your First Note</b>
                        
                    </div>
                ) : (
                    <div display='3'>
                        <h1>  My Notes - {notes.length}</h1>
                        <div >
                            {notes.map((note) =>{
                                return (
                                    <div className="container card text-warning  bg-dark mb-2" key={note._id}>
                                        <NoteItem  {...note} removeItem={removeItem} editItem={editItem}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
        </div>
    )
}

export default NotesList