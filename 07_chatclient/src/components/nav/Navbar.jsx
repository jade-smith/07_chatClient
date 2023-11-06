import { Link } from "react-router-dom";

const Navbar = ({ token, clearToken }) => {
  return (
    <nav>
      <header style={{ padding: 20 }}>Brand</header>
      {!token ? null : (
        <Link
          onClick={clearToken}
          style={{ justifyContent: "right" }}
          to="/auth"
        >
          Logout
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
