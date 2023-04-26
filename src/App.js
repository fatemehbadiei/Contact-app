// import './App.css';
// import AddContact from "./Component/AddContact/AddContact";
// import {useEffect, useState} from "react";
// import ContactList from "./Component/ContactList/ContactList";
//
// function App() {
//
//     const [contacts, setContacts] = useState([]);
//
//     const addContactHandler = (contact) => {
//         setContacts([...contacts, {id: Math.ceil(Math.random() * 100), ...contact}]);
//         //way2
//
//         // const newContact = {
//         //   id:Math.ceil(Math.random()*100),
//         //   name:contact.name,
//         //   email:contact.email
//         // }
//         // setContacts([...contacts,newContact]);
//     }
//
//     const deleteContactHandler = (id) => {
//         const filteredContact = contacts.filter(c => c.id !== id);
//         setContacts(filteredContact);
//     }
//
//     //save contacts in localstorage
//
//     //get item from dom
//     useEffect(() => {
//         const savedContacts = JSON.parse(localStorage.getItem('contacts'));
//         if (savedContacts) {
//             setContacts(savedContacts);
//         }
//     }, []);
//
//     //set item in dom
//     useEffect(() => {
//         localStorage.setItem('contacts', JSON.stringify(contacts));
//     }, [contacts]);
//
//     return (
//         <main className="App">
//             <h1>Contact App</h1>
//             <AddContact addContactHandler={addContactHandler}/>
//             <ContactList contacts={contacts} onDelete={deleteContactHandler}/>
//         </main>
//     );
// }
//
// export default App;


// import './App.css';
// import AddContact from "./Component/AddContact/AddContact";
// import {useEffect, useState} from "react";
// import ContactList from "./Component/ContactList/ContactList";
//
// function App() {
//
//     const [contacts, setContacts] = useState(()=>{
//         return JSON.parse(localStorage.getItem('contacts')) || []
//     });
//
//     const addContactHandler = (contact) => {
//         setContacts([...contacts, {id: Math.ceil(Math.random() * 100), ...contact}]);
//         //way2
//
//         // const newContact = {
//         //   id:Math.ceil(Math.random()*100),
//         //   name:contact.name,
//         //   email:contact.email
//         // }
//         // setContacts([...contacts,newContact]);
//     }
//
//     const deleteContactHandler = (id) => {
//         const filteredContact = contacts.filter(c => c.id !== id);
//         setContacts(filteredContact);
//     }
//
//     //save contacts in localstorage
//
//     //set item in dom
//     useEffect(() => {
//         localStorage.setItem('contacts', JSON.stringify(contacts));
//     }, [contacts]);
//
//     return (
//         <main className="App">
//             <h1>Contact App</h1>
//             <AddContact addContactHandler={addContactHandler}/>
//             <ContactList contacts={contacts} onDelete={deleteContactHandler}/>
//         </main>
//     );
// }
//
// export default App;


//add react router dom to project


// import './App.css';
// import AddContact from "./Component/AddContact/AddContact";
// import {useEffect, useState} from "react";
// import ContactList from "./Component/ContactList/ContactList";
// import {BrowserRouter , Routes , Route} from "react-router-dom";
// import ContactDetail from "./Component/ContactDetail/ContactDetail";
//
// function App() {
//
//     const [contacts, setContacts] = useState(()=>{
//         return JSON.parse(localStorage.getItem('contacts')) || []
//     });
//
//     const addContactHandler = (contact) => {
//         setContacts([...contacts, {id: Math.ceil(Math.random() * 100), ...contact}]);
//         //way2
//
//         // const newContact = {
//         //   id:Math.ceil(Math.random()*100),
//         //   name:contact.name,
//         //   email:contact.email
//         // }
//         // setContacts([...contacts,newContact]);
//     }
//
//     const deleteContactHandler = (id) => {
//         const filteredContact = contacts.filter(c => c.id !== id);
//         setContacts(filteredContact);
//     }
//
//     //save contacts in localstorage
//
//     //set item in dom
//     useEffect(() => {
//         localStorage.setItem('contacts', JSON.stringify(contacts));
//     }, [contacts]);
//
//     return (
//         <main className="App">
//             <h1>Contact App</h1>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/user/:id" element={<ContactDetail/>}/>
//                     <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
//                     <Route path="/" element={<ContactList contacts={contacts} onDelete={deleteContactHandler}/>}/>
//                 </Routes>
//             </BrowserRouter>
//         </main>
//     );
// }
//
// export default App;


//use json-server

// import './App.css';
// import AddContact from "./Component/AddContact/AddContact";
// import {useEffect, useState} from "react";
// import ContactList from "./Component/ContactList/ContactList";
// import {BrowserRouter , Routes , Route} from "react-router-dom";
// import ContactDetail from "./Component/ContactDetail/ContactDetail";
// import axios from "axios";
//
// function App() {
//
//     const [contacts, setContacts] = useState([])
//
//     const addContactHandler = (contact) => {
//         setContacts([...contacts, {id: Math.ceil(Math.random() * 100), ...contact}]);
//         //way2
//
//         // const newContact = {
//         //   id:Math.ceil(Math.random()*100),
//         //   name:contact.name,
//         //   email:contact.email
//         // }
//         // setContacts([...contacts,newContact]);
//     }
//
//     const deleteContactHandler = (id) => {
//         const filteredContact = contacts.filter(c => c.id !== id);
//         setContacts(filteredContact);
//     }
//
//
//     useEffect(() => {
//         const getContacts = async()=>{
//             const {data} = await axios.get("http://localhost:3001/contacts");
//             setContacts(data);
//         }
//         getContacts();
//     },[]);
//
//     return (
//         <main className="App">
//             <h1>Contact App</h1>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/user/:id" element={<ContactDetail/>}/>
//                     <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
//                     <Route path="/" element={<ContactList contacts={contacts} onDelete={deleteContactHandler}/>}/>
//                 </Routes>
//             </BrowserRouter>
//         </main>
//     );
// }
//
// export default App;


//use http in project

// import './App.css';
// import AddContact from "./Component/AddContact/AddContact";
// import {useEffect, useState} from "react";
// import ContactList from "./Component/ContactList/ContactList";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import ContactDetail from "./Component/ContactDetail/ContactDetail";
// import getContacts from "./Services/getContactServices";
// import deleteOneContact from "./Services/deleteContactServices";
// import addOneContact from "./Services/addContactServices";
// import EditContact from "./Component/EditContact/EditContact";
// import updateContact from "./Services/updateContact";
//
// function App() {
//
//     const [contacts, setContacts] = useState([])
//
//     const addContactHandler = async (contact) => {
//         try {
//             const {data} = await addOneContact(contact);
//             setContacts([...contacts, data]);
//         } catch (err) {
//         }
//     }
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
//     const editContactHandler = async (contact, id) => {
//         try {
//             await updateContact(id, contact);
//             const {data} = await getContacts();
//             setContacts(data);
//         } catch (e) {
//         }
//     }
//
//     return (
//         <main className="App">
//             <h1>Contact App</h1>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/edit/:id" element={<EditContact editContactHandler={editContactHandler}/>}/>
//                     <Route path="/user/:id" element={<ContactDetail/>}/>
//                     <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
//                     <Route path="/" element={<ContactList contacts={contacts} onDelete={deleteContactHandler}/>}/>
//                 </Routes>
//             </BrowserRouter>
//         </main>
//     );
// }
//
// export default App;


//change the logic of project


import './App.css';
import AddContact from "./Component/AddContact/AddContact";
import ContactList from "./Component/ContactList/ContactList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ContactDetail from "./Component/ContactDetail/ContactDetail";
import EditContact from "./Component/EditContact/EditContact";


function App() {
    return (
        <main className="App">
            <h1>Contact App</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/edit/:id" element={<EditContact/>}/>
                    <Route path="/user/:id" element={<ContactDetail/>}/>
                    <Route path="/add" element={<AddContact/>}/>
                    <Route path="/" element={<ContactList/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;