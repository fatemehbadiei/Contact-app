// import {useEffect, useState} from "react";
// import {useNavigate, useParams} from 'react-router-dom';
// import getOneContact from "../../Services/getOneContact";
//
// const EditContact = ({editContactHandler}) => {
//
//     let navigate = useNavigate();
//     let params = useParams();
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
//         editContactHandler(contact,params.id);
//         setContact({name: "", email: ""});
//         navigate("/");
//     }
//
//     useEffect(()=>{
//         const localFetch = async ()=>{
//             try{
//                const {data} =await getOneContact(params.id);
//                 setContact({name:data.name,email:data.email});
//             }catch (e) {
//
//             }
//         }
//         localFetch();
//     },[])
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
//             <button type="submit">Edit Contact</button>
//         </form>
//     )
// }
//
// export default EditContact;


//change the logic of project


import {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import getOneContact from "../../Services/getOneContact";
import updateContact from "../../Services/updateContact";

const EditContact = () => {

    let navigate = useNavigate();
    let params = useParams();

    const [contact, setContact] = useState({
        name: "",
        email: "",
    });

    const changeHandler = (e) => {
        setContact({...contact, [e.target.name]: e.target.value})
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!contact.name || !contact.email) {
            alert("All fields are mandatory");
            return;
        }
        try {
            await updateContact(params.id, contact);
            navigate("/");
        } catch (e) {
        }
    }

    useEffect(() => {
        const localFetch = async () => {
            try {
                const {data} = await getOneContact(params.id);
                setContact({name: data.name, email: data.email});
            } catch (e) {

            }
        }
        localFetch();
    }, [])


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
            <button type="submit">Edit Contact</button>
        </form>
    )
}

export default EditContact;