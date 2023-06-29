// import React hooks
import { useState } from "react";

// import css
import "./Contacts.css";

const Contacts = () => {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  return (
    <form className="Contacts">
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="" />
    </form>
  );
};

export default Contacts;
