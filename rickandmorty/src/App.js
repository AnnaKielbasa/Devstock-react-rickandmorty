import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import CharactersList from "./Components/CharactersList/CharactersList";
import ToDoList from "./Components/ToDoList/ToDoList";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error";
import Nav from "./Components/Nav/Nav";

function App() {
  const [logo, setLogo] = useState("Logo");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav logo={logo} />}>
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="characterslist" element={<CharactersList />} />
          <Route path="todolist" element={<ToDoList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer></footer>
    </Router>
  );
}

export default App;
