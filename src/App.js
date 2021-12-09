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
        <Route
          exact
          path="/"
          element={
            <Profile store={props.store} />
          }
        />
        <Route
          path="/contact/"
          element={<Messages store={props.store} />}
        />
      </Routes>
    </div>
  );
}

export default App;
