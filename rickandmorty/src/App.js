import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import CharactersList from "./Components/CharactersList/CharactersList";
import ToDoList from "./Components/ToDoList/ToDoList";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error";
import Nav from "./Components/Nav/Nav";

const App=() =>{
  const personDetails = { name: "Anka", lastName: "Kiełbasa" };
  const [logo, setLogo] = useState("Logo");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav logo={logo} />}>
          <Route
            path="aboutme"
            element={
              <AboutMe
                {...personDetails}
                personDetails={personDetails}
                logo={logo}
                setLogo={setLogo}
              />
            }
          />
          <Route path="characterslist" element={<CharactersList />} />
          <Route path="todolist" element={<ToDoList logo={logo} setLogo={setLogo} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
