import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
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
          <div>
            <button>S'inscrire</button>
            <button>Se connecter</button>
          </div>
          <button>Vends tes articles</button>
        </div>
      </header>
      ;
    </>
  );
};
export default Header;
