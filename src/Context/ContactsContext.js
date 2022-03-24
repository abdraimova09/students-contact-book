import axios from "axios"
import React, { useReducer } from "react"

export const contactContext = React.createContext()

const API = "http://localhost:8000/contacts"

const INIT_STATE = {
    contacts: [],
    editContact: null,
    pages: 0
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CONTACT":
            return {
                ...state,
                contacts: action.payload.data,
                pages: Math.ceil(action.payload.headers['x-total-count'] / 1)


            }
        case "GET_EDIT_CONTACT":
            return {
                ...state,
                editContact: action.payload
            }
        default:
            return state
    }
}

const ContactContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const getAllContacts = async () => {
        const result = await axios(API + window.location.search)
        console.log(result)
        dispatch({
            type: "GET_CONTACT",
            payload: result,

        })

    }

    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:8000/contacts/${id}`)
        getAllContacts()
    }

    const getEditContact = async (id) => {
        let { data } = await axios(`${API}/${id}`)
        dispatch({
            type: "GET_EDIT_CONTACT",
            payload: data
        })
    }

    const editedContact = async (id, edited) => {
        await axios.patch(`http://localhost:8000/contacts/${id}`, edited)
        getAllContacts()
    }


    async function handleAddContact(newContact) {
        await axios.post(API, newContact)
        getAllContacts()

    }


    return (
        <contactContext.Provider value={{
            contacts: state.contacts,
            editContact: state.editContact,
            pages: state.pages,
            getAllContacts,
            handleAddContact,
            deleteContact,
            getEditContact,
            editedContact,

        }}>
            {children}
        </contactContext.Provider>
    )
}
export default ContactContext