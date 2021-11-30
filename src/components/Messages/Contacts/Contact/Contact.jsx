import { NavLink } from "react-router-dom";

const Contact = (props) => {
    let path = `/contact/ ${props.id}`;

  return (
    <div className="contact">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Contact;