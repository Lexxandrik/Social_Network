const ADD_DIALOG = "ADD-DIALOG";
const UPDATE_NEW_DIALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT";

let initialState = {
  dialogsArray: [
    { id: 1, message: "Hren tam" },
    { id: 2, message: "mama" },
    { id: 3, message: "papa" },
  ],
  newDialogText: "",
  contactsArray: [
    { name: "Alex", id: 1 },
    { name: "Dima", id: 2 },
    { name: "Vanya", id: 3 },
    { name: "Viktor", id: 4 },
    { name: "Oleg", id: 5 },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG: {
      let dialog = {
        id: state.dialogsArray.length + 1,
        message: state.newDialogText,
      };
      let stateCopy = { ...state };
      stateCopy.dialogsArray = [...state.dialogsArray, dialog];
      // console.log(stateCopy.dialogsArray);
      stateCopy.newDialogText = "";
      // stateCopy.dialogsArray.push(dialog);
      return stateCopy;
    }
    case UPDATE_NEW_DIALOG_TEXT:
      let stateCopy = { ...state };
      stateCopy.newDialogText = action.text;
      return stateCopy;
    default:
      return state;
  }
};

export let addDialogCreator = () => ({ type: "ADD-DIALOG" });

export let updateNewDialogTextCreator = (text) => ({
  type: "UPDATE-NEW-DIALOG-TEXT",
  text: text,
});

export default dialogsReducer;
