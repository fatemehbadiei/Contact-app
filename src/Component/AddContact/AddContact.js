// import {useState} from "react";
// import "./addContact.css"
//
// const AddContact = ({addContactHandler}) => {
//
//     const [contact, setContact] = useState({
//         name: "",
//         email: "",
//     });
//
//     const changeHandler = (e) => {
//         setContact({...contact, [e.target.name]: e.target.value})
//     }
//
//     const submitHandler = (e) => {
//         e.preventDefault();
//         if(!contact.name || !contact.email){
//             alert("All fields are mandatory");
//             return;
//         }
//         addContactHandler(contact);
//         setContact({name: "", email: ""})
//     }
//
//     return (
//         <form onSubmit={submitHandler}>
//             <div className="formControl">
//                 <label>Name</label>
//                 <input type="text" name="name" value={contact.name} onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Email</label>
//                 <input type="text" name="email" value={contact.email} onChange={changeHandler}/>
//             </div>
//             <button type="submit">Add Contact</button>
//         </form>
//     )
// }
//
// export default AddContact;


//add react router dom to project


// import {useState} from "react";
// import "./addContact.css";
// import { useNavigate } from 'react-router-dom';
//
// const AddContact = ({addContactHandler}) => {
//
//     let navigate = useNavigate();
//
//     const [contact, setContact] = useState({
//         name: "",
//         email: "",
//     });
//
//     const changeHandler = (e) => {
//         setContact({...contact, [e.target.name]: e.target.value})
//     }
//
//     const submitHandler = (e) => {
//         e.preventDefault();
//         if(!contact.name || !contact.email){
//             alert("All fields are mandatory");
//             return;
//         }
//         addContactHandler(contact);
//         setContact({name: "", email: ""});
//         navigate("/");
//     }
//
//     return (
//         <form onSubmit={submitHandler}>
//             <div className="formControl">
//                 <label>Name</label>
//                 <input type="text" name="name" value={contact.name} onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Email</label>
//                 <input type="text" name="email" value={contact.email} onChange={changeHandler}/>
//             </div>
//             <button type="submit">Add Contact</button>
//         </form>
//     )
// }
//
// export default AddContact;


//change the logic of project


import {useState} from "react";
import "./addContact.css";
import { useNavigate } from 'react-router-dom';
import addOneContact from "../../Services/addContactServices";

const AddContact = () => {

    let navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        email: "",
    });

    const changeHandler = (e) => {
        setContact({...contact, [e.target.name]: e.target.value})
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!contact.name || !contact.email){
            alert("All fields are mandatory");
            return;
        }
        try {
            await addOneContact(contact);
            navigate("/");
        } catch (err) {
        }
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