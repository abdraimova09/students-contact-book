import axios from "axios"
import React, { useReducer } from "react"

export const contactContext = React.createContext()

const API = "http://localhost:8000/contacts"

const INIT_STATE = {
    contacts: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CONTACT":
            return {
                ...state,
                contacts: action.payload
            }
        default:
            return state
    }
}

const ContactContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const getAllContacts = async () => {
        const { data } = await axios(API)
        dispatch({
            type: "GET_CONTACT",
            payload: data
        })
    }
    return (
        <contactContext.Provider value={{
            contacts: state.contacts,
            getAllContacts
        }}>
            {children}
        </contactContext.Provider>
    )
}
export default ContactContext