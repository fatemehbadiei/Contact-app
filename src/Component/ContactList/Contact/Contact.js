import userImage from "../../../assets/images/images.jfif";
import {Link} from "react-router-dom";

const Contact = ({contact,onDelete}) => {
    const {id ,name ,email} = contact ;
  return(
      <div className="item">
        <div className="itemDiv">
          <img src={userImage} alt="img"/>
          <Link to={`user/${id}`} state={{contact:contact}}>
              <div>
                  <p>Name : {name}</p>
                  <p>Email : {email}</p>
              </div>
          </Link>
        </div>
        <div>
            <Link to={`/edit/${id}`}>
                <button className="btnEdit">Edit</button>
            </Link>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
  )
}

export default Contact;