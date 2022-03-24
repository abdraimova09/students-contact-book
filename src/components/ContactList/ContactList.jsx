import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contactContext } from '../../Context/ContactsContext';

const ContactList = () => {
    const { contacts, getAllContacts, deleteContact } = useContext(contactContext)
    useEffect(() => {
        getAllContacts()
    }, [])
    return (
        <div>
            {contacts.map((item) => (
                <div key={item.id}>
                    <img src={item.image} alt="Mamed" width={"200px"} />
                    <h3>{item.name}</h3>
                    <h4>{item.email}</h4>
                    <h4>{item.phone}</h4>
                    <button onClick={() => deleteContact(item.id)}>Удалить</button>
                    <Link to={`/edit/${item.id}`}>
                        <button>Edit</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ContactList;