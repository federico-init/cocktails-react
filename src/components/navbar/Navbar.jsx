// import components
import SearchBar from "../searchBar";

//import css
import "./Navbar.css";

const Navbar = ({ setProductSection }) => {
  return (
    <div className="Navbar">
      <ul className="Navbar__list">
        <li onClick={() => setProductSection("")}>Home</li>
        <li>Contacts</li>
        <li>About Us</li>
      </ul>
      <SearchBar setProductSection={setProductSection} />
    </div>
  );
};

export default Navbar;
