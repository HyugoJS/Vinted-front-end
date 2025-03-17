import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

const Header = ({ userToken, setUserToken }) => {
  const navigate = useNavigate();
  const existingToken = userToken;
  const token = Cookies.get("token");
  return (
    <>
      <header className="container">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div>
          <input type="text" placeholder="Recherche des articles" />
        </div>
        <div className="header-buttons">
          {existingToken ? (
            <button
              className="disconnect"
              onClick={() => {
                setUserToken(null);
                Cookies.remove("token");
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <>
              <button onClick={() => navigate("/signup")}>S'inscrire</button>
              <button onClick={() => navigate("/login")}>Se connecter</button>
            </>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              {
                token ? navigate("/publish") : navigate("/login");
              }
            }}
          >
            Vends tes articles
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
