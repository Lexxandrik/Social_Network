import "./Dialogs.css";
import Dialog from "./Dialog/Dialog";



const Dialogs = (props) => {
  let mapDialog = props.state.map(el=> <Dialog message = {el} />)

  return (
    <div className="dialogs">
      <div id="parent">Dialogs</div>
      {mapDialog}
    </div>
  );
};

export default Dialogs;
