import heroImg from "../assets/hero.jpg";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="in-img">
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button
            onClick={() => {
              {
                token ? navigate("/publish") : navigate("/login");
              }
            }}
          >
            Commencer à vendre
          </button>
        </div>
        <img src={heroImg} alt="image déchirée" />
      </div>
    </>
  );
};
export default Hero;
