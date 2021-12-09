
import ContactsContainer from './Contacts/ContactsContainer';

import DialogsContainer from './Dialogs/DialogsContainer';
import styles from './Messages.module.css'

const Messages =(props)=>{
    return (
        <div className={styles.messages}>
            <ContactsContainer store = {props.store} />
            <DialogsContainer store = {props.store}/>
        </div>
    )
}

export default Messages;