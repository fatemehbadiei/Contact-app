import {Link, useLocation} from "react-router-dom";

const ContactDetail = () => {
    const location = useLocation();
    const contact = location.state.contact;
  return(
      <div>
          <p>Name is : {contact.name}</p>
          <p>Email is : {contact.email}</p>
          <Link to="/">Go to ContactList</Link>
      </div>
  )
}

export default ContactDetail;