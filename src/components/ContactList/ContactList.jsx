import React, { useContext, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { contactContext } from '../../Context/ContactsContext';

const ContactList = () => {
    const { contacts, getAllContacts, deleteContact, pages } = useContext(contactContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchValue, setSearchValue] = useState(
        searchParams.get("q") ? searchParams.get("q") : ""
    )
    const [page, setPage] = useState(1)
    useEffect(() => {
        getAllContacts()
    }, [])
    useEffect(() => {
        setSearchParams({
            q: searchValue,
            _limit: 1,
            _page: page
        })
    }, [searchValue, page])
    useEffect(() => {
        getAllContacts()
    }, [searchParams])
    return (
        <div>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Search...' />
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
            <button disabled={page == 1 ? true : false} onClick={() => setPage(page - 1)}>prev</button>
            <span>{page}</span>
            <button disabled={page == pages ? true : false} onClick={() => setPage(page + 1)}>next</button>
        </div>
    );
};

export default ContactList;