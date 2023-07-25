import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainApp.css";
import { MdSpaceDashboard, MdOutlineFingerprint } from "react-icons/md";
import { CgProfile, CgGirl } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

function MainNavbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="main-navba">
        <div className="main-navba-head">
          <h1>Tailoring</h1>
        </div>
        <div className="main-navba-anch">
          <a className="anch" onClick={() => navigate("/")}>
            <MdSpaceDashboard size={28} className="shape" /> Dashboard
          </a>

          <a className="anch" onClick={() => navigate("/login/main-signup")}>
            {" "}
            <CgProfile size={28} className="shape" />
            Register
          </a>
          <a className="anch" onClick={() => navigate("/login/main-login")}>
            {" "}
            <MdOutlineFingerprint size={28} className="shape" />
            Login
          </a>
          <a className="anch" onClick={() => navigate("/login/main-profile")}>
            {" "}
            <FaUser size={28} className="shape" />
            Profile
          </a>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
