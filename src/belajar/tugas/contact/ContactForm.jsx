import { useImmer } from "use-immer"

// import { useState } from "react";

const initialData = {
    name:"",
    message:""
}

export default function ContactForm(){
    const [contact, setContact] = useImmer({
        initialData
    })

    function handleNameChange(e) {
        // setContact({
        //     ...contact, // ini ambil semua data di initialData
        //     name: e.target.value // kalau yg name ambilnya dari target value
        // })
        setContact(draft => {
            draft.name = e.target.value
        })
    }

    
    function handleMessageChange(e) {
        // setContact({...contact, message: e.target.value})
        setContact(draft => {
            draft.message = e.target.value
        })
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="Nama" value={contact.name} onChange={handleNameChange}/>
                <br />
                <input type="text" placeholder="Pesan" value={contact.message} onChange={handleMessageChange}/>
            </form>
            <h1>Contact Detail</h1>
            <p>Name: {contact.name}</p>
            <p>Message: {contact.message}</p>
        </div>
    )
}