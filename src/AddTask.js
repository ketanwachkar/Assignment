import React, { useState } from "react"

const AddTask = ({ addTask, setShowModal }) => {
    const [title, setTitle] = useState("")
    
    const handleInputChange = (e) => {
        setTitle(e.target.value)
    }

    const add = () => {
        if(title !== ""){
            addTask(title)
        }else{
            alert("Title cannot be empty!")
        }
    }

    return (
        // <div>
        //     <h1>Add Task</h1>
        //     <button onClick={() => setShowModal()}>Close</button>
        //     <input type="text" value={title} onChange={handleInputChange} placeholder="Add Title" />
        //     <button >Add Task</button>
        // </div>
        <div className="modal1">
            <div className="modal1-content">
                <div className="modal1-header justify-">
                    <h4 className="modal1-title">Add Title</h4>
                    <button className="modal1-text" onClick={() => setShowModal()}><b>x</b></button>
                </div>
                <div className="modal1-body">
                <input type="text" className="modal1-text" value={title} onChange={handleInputChange} placeholder="Add Title" />
                </div>
                <div className="modal1-footer">
                    <button className="button modal1-button" onClick={() => add()} >Add Task</button>
                </div>
            </div>
        </div>
    )
}

export default AddTask