import {useState} from "react";

const AddContact = ({addContactHandler}) => {

    const [contact, setContact] = useState({
        name: "",
        email: "",
    });

    const changeHandler = (e) => {
        setContact({...contact, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addContactHandler(contact);
        setContact({name: "", email: ""})
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="formControl">
                <label>Name</label>
                <input type="text" name="name" value={contact.name} onChange={changeHandler}/>
            </div>
            <div className="formControl">
                <label>Email</label>
                <input type="text" name="email" value={contact.email} onChange={changeHandler}/>
            </div>
            <button type="submit">Add Contact</button>
        </form>
    )
}

export default AddContact;