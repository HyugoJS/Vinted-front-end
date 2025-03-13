import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import "./Home.css";

const Home = ({ data, setData }) => {
  return (
    <>
      <div>
        <p>This is the Home Page</p>
      </div>

      {/* {console.log(data)} */}
      {/* => contient un objet avec toutes les offres dedans. */}
      <div className="hero">
        <Hero />
      </div>
      <div className="container">
        <div className="offers-tab">
          {data.offers.map((offer, index) => {
            return (
              <Link to={`/offers/${offer._id}`} key={offer._id}>
                <div className="individual-offers">
                  <p>{offer.owner.account.username}</p>
                  <img
                    src={offer.product_image.secure_url}
                    alt="image du produit"
                  />
                  <span>{offer.product_price}€</span>
                  <p>{offer.product_details[0].MARQUE}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
