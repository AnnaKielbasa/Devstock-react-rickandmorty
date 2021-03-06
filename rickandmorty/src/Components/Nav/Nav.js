import { Link, Outlet } from "react-router-dom";
import "./Nav.css";

const Nav = ({ logo }) => {
  return (
    <div>
      <nav className="Nav">
        <div className="Logo">{logo}</div>
        <div className="Links">
          <Link to="/">About me</Link>
          <Link to="/characterslist">Characters List</Link>
          <Link to="/todolist">Todo</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Nav;
