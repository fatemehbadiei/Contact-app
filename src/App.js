import './App.css';
import AddContact from "./Component/AddContact/AddContact";
import {useState} from "react";

function App() {

  const [contacts,setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
  }

  return (
    <main className="App">
      <h1>Contact App</h1>
        <AddContact addContactHandler={addContactHandler}/>
        <section>Contact List</section>
    </main>
  );
}

export default App;
