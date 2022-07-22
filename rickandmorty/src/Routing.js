import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import CharactersList from "./Components/CharactersList/CharactersList";
import ToDoList from "./Components/ToDoList/ToDoList";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error";
import Nav from "./Components/Nav/Nav";
function Routing({ logo, setLogo, logoText, setLogoText, personDetails }) {
  return (
    <Router>
      <Nav logo={logo} />
      <Routes>
        <Route
          path="/"
          element={
            <AboutMe
              personDetails={personDetails}
              logo={logo}
              setLogo={setLogo}
              logoText={logoText}
              setLogoText={setLogoText}
            />
          }
        />
        <Route path="characterslist" element={<CharactersList />} />
        <Route
          path="todolist"
          element={<ToDoList logo={logo} setLogo={setLogo} />}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default Routing;
