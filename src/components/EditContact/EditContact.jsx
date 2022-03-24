import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { contactContext } from '../../Context/ContactsContext';

const EditContact = () => {
    const params = useParams();
    const { getEditContact, editContact } = useContext(contactContext)
    console.log(editContact);
    useEffect(() => {
        getEditContact(params.id)
    }, [])
    return (
        <div>
            input*4
        </div>
    );
};

export default EditContact;