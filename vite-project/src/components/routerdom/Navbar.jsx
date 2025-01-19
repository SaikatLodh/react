
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
      </div>
    </div>
  );
};

export default Navbar;
