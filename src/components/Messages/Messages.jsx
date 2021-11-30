import Contacts from './Contacts/Contacts';
import Dialogs from './Dialogs/Dialogs';
import styles from './Messages.module.css'

const Messages =(props)=>{
//   debugger;
    return (
        <div className={styles.messages}>
            <Contacts state={props.state.contactsArray} />
            <Dialogs state={props.state.dialogsArray}/>
        </div>
    )
}

export default Messages;