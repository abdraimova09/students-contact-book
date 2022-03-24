import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { contactContext } from '../../Context/ContactsContext';

const EditContact = () => {
    const params = useParams();
    const { getEditContact, editContact, editedContact } = useContext(contactContext)
    const [edit, setEdit] = useState(null)
    // console.log(editContact);
    useEffect(() => {
        getEditContact(params.id)
    }, [])
    useEffect(() => {
        setEdit(editContact)
    }, [editContact])

    const navigate = useNavigate()
    const handleValue = (e) => {
        let edited = {
            ...edit,
            [e.target.name]: e.target.value
        }
        console.log(edited);
        setEdit(edited)
    }
    const save = () => {
        editedContact(params.id, edit)
        navigate("/list")
    }
    return edit ? (
        <div>
            <input type="text"
                value={edit.name} name='name' onChange={handleValue} />
            <input type="text"
                value={edit.email} name='email' onChange={handleValue} />
            <input type="text"
                value={edit.phone} name='phone' onChange={handleValue} />
            <input type="text"
                value={edit.image} name='image' onChange={handleValue} />
            <button onClick={save}>Save</button>
        </div>
    ) : <h1>Loading...</h1>
};

export default EditContact;