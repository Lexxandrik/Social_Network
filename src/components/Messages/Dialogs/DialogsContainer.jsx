import "./Dialogs.css";
import Dialogs from "../Dialogs/Dialogs";
import {
  addDialogCreator,
  updateNewDialogTextCreator,
} from "../../../redux/dialogs-reducer";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
//   let addDialog = () => {
//     props.store.dispatch(addDialogCreator());
//   };

//   let updateNewDialogText = (text) => {
//     props.store.dispatch(updateNewDialogTextCreator(text));
//   };

//   return (
//     <Dialogs
//       dialogs = {props.store.getState().dialogs.dialogsArray}
//       addDialog={addDialog}
//       updateNewDialogText={updateNewDialogText}
//       newDialogText={props.store.getState().dialogs.newDialogText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogsArray,
    newDialogText: state.dialogs.newDialogText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {

    updateNewDialogText : (text) => {

      dispatch(updateNewDialogTextCreator(text))
    },

    addDialog : ()=> {

      dispatch(addDialogCreator())

    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
