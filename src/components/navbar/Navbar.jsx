// import components
import SearchBar from "../searchBar";

//import css
import "./Navbar.css";

const Navbar = ({ setProductSection }) => {
  return (
    <div className="Navbar">
      <div className="Navbar__elements">
        <i class="fa-solid fa-bars"></i>
        <ul className="Navbar__list">
          <li onClick={() => setProductSection("")}>Home</li>
          <li>Contacts</li>
          <li>About Us</li>
        </ul>
      </div>
      <SearchBar setProductSection={setProductSection} />
    </div>
  );
};

export default Navbar;
