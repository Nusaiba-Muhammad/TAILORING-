import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navba">
        <a className="anch" onClick={() => navigate("/")}>
          Home{" "}
        </a>
        <a className="anch" onClick={() => navigate("/contact-us")}>
          Contact
        </a>
        <a className="anch" onClick={() => navigate("/faqs")}>
          FAQs
        </a>
        <a className="anch" onClick={() => navigate("/about-us")}>
          About
        </a>
        <button  className=''onClick={() => navigate("/login")}>Login</button>
      </nav>
    </div>
  );
}

export default Navbar;
