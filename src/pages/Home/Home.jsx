import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import "./Home.css";

const Home = ({ data, setData }) => {
  const params = useParams();
  const id = params.id;
  return (
    <>
      <div>
        <p>This is the Home Page</p>
        <Link to={"/offers"}>go page offers</Link>
      </div>
      <Link to={`/offers/${id}`}></Link>
      {console.log(data)}
      {/* => contient un objet avec toutes les offres dedans. */}
      <div className="hero">
        <Hero />
      </div>
      <div className="container">
        <Link to={`/offers/${id}`}>
          <div className="offers-tab">
            {data.offers.map((offer, index) => {
              return (
                <div key={index} id={offer._id} className="individual-offers">
                  <p>{offer.owner.account.username}</p>
                  <img
                    src={offer.product_image.secure_url}
                    alt="image du produit"
                  />
                  <span>{offer.product_price}€</span>
                  <p>{offer.product_details[0].MARQUE}</p>
                </div>
              );
            })}
          </div>
        </Link>
      </div>
    </>
  );
};
export default Home;
