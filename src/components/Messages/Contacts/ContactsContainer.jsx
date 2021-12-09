import { connect } from "react-redux";
import Contacts from "./Contacts";

// const ContactsContainer = (props) => {
  
 
//   return (
//     <Contacts contact ={store.getState().dialogs.contactsArray} />
//   );
// };

const mapStateToProps = (state)=> {
  return {
    contact : state.dialogs.contactsArray
  }
}

const ContactsContainer = connect (mapStateToProps) (Contacts)

export default ContactsContainer;
