import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Offer.css";

const Offer = ({ data, setData }) => {
  const params = useParams();
  return (
    <div>
      <p>This is the offer page</p>
      {console.log(data)}
      <div className="selected-item">
        {data.offers.map((offer, index) => {
          return (
            <div key={index} id={params} className="item-container">
              <div>
                <img
                  src={offer.product_image.secure_url}
                  alt="image du produit"
                />
              </div>
              <div className="item-description">
                <div>
                  <span>{offer.product_price}€</span>
                  <ul>
                    <li>MARQUE : {offer.product_details[0].MARQUE}</li>
                    <li>TAILLE :</li>
                    <li>ÉTAT : {offer.product_details[1].ÉTAT}</li>
                    <li>COULEUR : {offer.product_details[2].COULEUR}</li>
                    <li>
                      EMPLACEMENT : {offer.product_details[3].EMPLACEMENT}
                    </li>
                    <li>
                      MODE DE PAIEMENT : {offer.product_details[0].MARQUE}
                    </li>
                  </ul>
                </div>
                <div>
                  <span>{offer.product_name}</span>
                  <p>{offer.product_decription}</p>
                  <div>
                    <img src={offer.owner.account.avatar} alt="avatar" />
                    <p>{offer.owner.account.username}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Offer;
