import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router";
import Messages from "./components/Messages/Messages";

function App(props) {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
        <Route path='/contact/' element={<Messages state={props.state.messages} />}/>
      </Routes>
    </div>
  );
}

export default App;
