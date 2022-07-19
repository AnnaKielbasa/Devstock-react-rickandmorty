import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div>Error!Page not found</div>
      <Link to="/aboutme">Back home</Link>
    </div>
  );
};

export default Error;
