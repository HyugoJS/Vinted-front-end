import { Link } from "react-router-dom";
import "./Offer.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--vinted-backend--fc7nwyvb2r4r.code.run/offers/" +
            params.id //remplacer le :id par l'id qu'on choppe en params
        );
        // console.log("ici=>" + response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [params.id]);
  return isLoading ? (
    <p>En chargement</p>
  ) : data ? (
    <div>
      {/* {console.log(data)} */}
      <div className="selected-item">
        {data && (
          <>
            <div>
              <img src={data.product_image.secure_url} alt="image du produit" />
            </div>
            <div className="item-description">
              <h2>{data.product_price}€</h2>
              <ul>
                <li>MARQUE : {data.product_details[0].MARQUE}</li>
                <li>TAILLE : {data.product_details[1].TAILLE}</li>
                <li>ÉTAT : {data.product_details[2].ÉTAT}</li>
                <li>COULEUR : {data.product_details[3].COULEUR}</li>
                <li>EMPLACEMENT : {data.product_details[4].EMPLACEMENT}</li>
                <li>MODE DE PAIEMENT : Carte, virement</li>
              </ul>
              <div className="user-part">
                <span>{data.product_name}</span>
                <p>{data.product_description}</p>
                <div className="user-profile">
                  {/* <img
                    src={data.owner.account.avatar.secure_url}
                    alt="avatar"
                  /> */}
                  <p>{data.owner.account.username}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  {
                    token
                      ? navigate("/payment", {
                          state: {
                            title: data.product_name,
                            price: data.product_price,
                          },
                        })
                      : navigate("/login");
                  }
                }}
              >
                Acheter
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  ) : (
    "pas encore chargé"
  );
};
export default Offer;
