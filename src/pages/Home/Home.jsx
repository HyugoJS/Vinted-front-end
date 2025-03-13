import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import "./Home.css";

const Home = ({ data, setData }) => {
  return (
    <>
      <div className="hero">
        <Hero />
      </div>
      <div className="container">
        <div className="offers-tab">
          {data.offers.map((offer, index) => {
            return (
              <Link
                to={`/offers/${offer._id}`}
                key={offer._id}
                className="link-to-offers"
              >
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
