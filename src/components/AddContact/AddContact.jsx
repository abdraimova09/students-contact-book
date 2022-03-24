import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { contactContext } from '../../Context/ContactsContext';

const AddContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [image, setImage] = useState("")
    const { handleAddContact } = useContext(contactContext)

    function addContact() {
        if (!name || !email || !phone || !image) {
            alert("Заполните все поля!")
            return
        }
        let newContact = {
            name,
            email,
            phone,
            image
        }
        handleAddContact(newContact)

    }
    return (
        <div>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder='Image' value={image} onChange={(e) => setImage(e.target.value)} />
            <Link to="/list">
                <button onClick={addContact}
                >Добавить</button>
            </Link>
        </div>
    );
};

export default AddContact;