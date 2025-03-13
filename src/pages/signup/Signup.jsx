// faire un state pour dire si on est connecté ou non (true false)
//faire une fonction handlesubmit que je met dans le on click, qui va faire la requete axios vers l'API (event.preventdefault)
// handleusername =(even)=>{setData(...data), username :event.target.value}
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Signup = () => {
  const [isConnected, setisConnected] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    newsletter: false,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        data
      );
      console.log(response.data);
      //   setisConnected(true)
      // crée un token en cookie
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleUsername = (event) => {
    setData({
      ...data,
      username: event.target.value,
    });
  };
  const handleEmail = (event) => {
    setData({
      ...data,
      email: event.target.value,
    });
  };
  const handlePassword = (event) => {
    setData({
      ...data,
      password: event.target.value,
    });
  };
  const handleNewsletter = (event) => {
    setData({
      ...data,
      newsletter: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>S'inscrire</h1>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          onChange={handleUsername}
          value={data.username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleEmail}
          value={data.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handlePassword}
          value={data.password}
        />
        <div className="checkbox-div">
          <input
            type="checkbox"
            onChange={handleNewsletter}
            value={data.newsletter}
          />
          <h2>S'inscrire a notre newsletter</h2>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <input type="submit" value="S'inscrire" className="submit-button" />
        <Link to={"/login"}>Connectez-vous</Link>
      </div>
    </form>
  );
};
export default Signup;
