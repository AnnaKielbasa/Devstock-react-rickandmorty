import { Link, Outlet } from "react-router-dom";
import "./Nav.css";

function Nav({ logo }) {
  return (
    <div>
      <nav className="Nav">
        <div>{logo}</div>
        <Link to="/"></Link>
        <Link to="/aboutme">About me</Link>
        <Link to="/characterslist">Characters List</Link>
        <Link to="/todolist">Todo List</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default Nav;
