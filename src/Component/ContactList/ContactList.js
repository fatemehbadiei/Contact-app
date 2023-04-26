// import "./contactList.css"
// import userImage from "../../assets/images/images.jfif"
// import {Link} from "react-router-dom";
//
// const ContactList = ({contacts,onDelete}) => {
//     return (
//         <section className="contactList">
//             {contacts.map(contact => {
//                 return <div key={contact.id} className="item">
//                     <div className="itemDiv">
//                         <img src={userImage} alt="img"/>
//                         <div>
//                             <p>Name : {contact.name}</p>
//                             <p>Email : {contact.email}</p>
//                         </div>
//                     </div>
//                     <button onClick={()=>onDelete(contact.id)}>Delete</button>
//                 </div>
//             })}
//         </section>
//     )
// }
//
// export default ContactList;


//add react router dom to project


// import "./contactList.css";
// import {Link} from "react-router-dom";
// import Contact from "./Contact/Contact";
//
// const ContactList = ({contacts, onDelete}) => {
//     return (
//       <section className="contactWrapper">
//           <div className="contactList">
//               <div className="listHeader">
//                   <h2>Contact</h2>
//                   <Link to="/add">
//                       <button>Go To Page Add</button>
//                   </Link>
//               </div>
//               {contacts.map(contact => {
//                   return <Contact key={contact.id} contact={contact} onDelete={onDelete}/>
//               })}
//           </div>
//       </section>
//     )
// }
//
// export default ContactList;


//change the logic of project


// import "./contactList.css";
// import {Link} from "react-router-dom";
// import Contact from "./Contact/Contact";
// import {useEffect, useState} from "react";
// import getContacts from "../../Services/getContactServices";
// import deleteOneContact from "../../Services/deleteContactServices";
//
// const ContactList = (props) => {
//
//     const [contacts, setContacts] = useState(null);
//
//     useEffect(() => {
//         const fetchContacts = async () => {
//             const {data} = await getContacts();
//             setContacts(data);
//         }
//         try {
//             fetchContacts();
//         } catch (error) {
//         }
//     }, []);
//
//     const deleteContactHandler = async (id) => {
//         try {
//             await deleteOneContact(id);
//             const filteredContact = contacts.filter(c => c.id !== id);
//             setContacts(filteredContact);
//         } catch (err) {
//         }
//     }
//
//     return (
//         <section className="contactWrapper">
//             <div className="contactList">
//                 <div className="listHeader">
//                     <h2>Contact</h2>
//                     <Link to="/add">
//                         <button>Go To Page Add</button>
//                     </Link>
//                 </div>
//                 {contacts ? contacts.map(contact => {
//                     return <Contact key={contact.id} contact={contact} onDelete={deleteContactHandler}/>
//                 }): <p>Loading...</p>}
//             </div>
//         </section>
//     )
// }
//
// export default ContactList;


//add search to project


import "./contactList.css";
import {Link} from "react-router-dom";
import Contact from "./Contact/Contact";
import {useEffect, useState} from "react";
import getContacts from "../../Services/getContactServices";
import deleteOneContact from "../../Services/deleteContactServices";

const ContactList = (props) => {

    const [contacts, setContacts] = useState(null);
    const [allContacts, setAllContacts] = useState(null);
    const [searchTerm,setSearchTerm] = useState("");

    useEffect(() => {
        const fetchContacts = async () => {
            const {data} = await getContacts();
            setContacts(data);
            setAllContacts(data);
        }
        try {
            fetchContacts();
        } catch (error) {
        }
    }, []);

    const deleteContactHandler = async (id) => {
        try {
            await deleteOneContact(id);
            const filteredContact = contacts.filter(c => c.id !== id);
            setContacts(filteredContact);
        } catch (err) {
        }
    }

    const searchHandler = (e) => {
        setSearchTerm(e.target.value);

        const search = e.target.value;
        if(search !== ""){
            const filteredContacts = allContacts.filter((c)=>{
                return Object.values(c).join(" ").toLowerCase().includes(search.toLowerCase());
            });
            setContacts(filteredContacts);
        }else{
            setContacts(allContacts);
        }
    }

    return (
        <section className="contactWrapper">
            <div className="contactList">
                <div className="listHeader">
                    <h2>Contact</h2>
                    <Link to="/add">
                        <button>Go To Page Add</button>
                    </Link>
                </div>
                <div>
                    <input type="text" value={searchTerm} onChange={searchHandler}/>
                </div>
                {contacts ? contacts.map(contact => {
                    return <Contact key={contact.id} contact={contact} onDelete={deleteContactHandler}/>
                }): <p>Loading...</p>}
            </div>
        </section>
    )
}

export default ContactList;