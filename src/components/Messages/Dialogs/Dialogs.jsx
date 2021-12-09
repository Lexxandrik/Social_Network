import "./Dialogs.css";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
  let addDialog = () => {
    props.addDialog();
  };

  let updateNewDialogText = (e) => {
    let text = e.target.value;
    props.updateNewDialogText(text);
  };

  let mapDialog = props.dialogs.map((el) => (
    <Dialog message={el.message} key={el.id} />
  ));
  return (
    <div className="dialogs">
      <div id="parent">Dialogs</div>
      <div>{mapDialog}</div>
      <div>
        <div>
          <textarea
            placeholder="Enter message..."
            onChange={updateNewDialogText}
            value={props.newDialogText}
            name=""
            id=""
            cols="30"
            rows="3"
          ></textarea>
        </div>
        <div>
          <button onClick={addDialog}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
