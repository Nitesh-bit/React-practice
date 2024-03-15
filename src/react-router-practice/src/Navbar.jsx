import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{}}>
      <ul
        style={{
          display: "flex",
          justifyContent: "start",
          listStyle: "none",
          paddingLeft: "10px",
        }}
      >
        <li style={{ fontSize: "30px" }}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li style={{ paddingLeft: "10px", fontSize: "30px" }}>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li style={{ paddingLeft: "10px", fontSize: "30px" }}>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li style={{ paddingLeft: "10px", fontSize: "30px" }}>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li style={{ paddingLeft: "10px", fontSize: "30px" }}>
          <NavLink to="/gibberish">Something-went-wrong</NavLink>
        </li>
      </ul>
    </nav>
  );
}
