
import "./Contacts.css";
import Contact from "./Contact/Contact";


const Contacts = (props) => {
  let mapContact = props.state.map(contact => <Contact name={contact.name }id={contact.id}/>)

  
  return (
    <div className="contacts">
      <div id="parent">Contacts </div>
      {mapContact}
    </div>
  );
};

export default Contacts;
