import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm";
import "./Payment.css";

const stripePromise = loadStripe(
  "pk_test_51R3zcxFtugHd3CfBK0Z3inerDtmtAaE5qJ6hlM3ijMUhXQtjGr6A8XZpEu2fsiPHB4H998KuR6ICH7JjM1UtY5Zt00nD8sZ88y"
);
const Payment = () => {
  const location = useLocation();
  const { title } = location.state;
  const { price } = location.state;
  const buyerFees = 0.4;
  const travelFees = 0.8;

  //   console.log({ title });
  //   console.log({ price });

  //   return <span>{title}</span>;

  const options = {
    // Type de transaction
    mode: "payment",
    // Montant de la transaction
    amount: price,
    // Devise de la transaction
    currency: "usd",
    // On peut customiser l'apparence ici
    appearance: {
      /*...*/
    },
  };
  //   console.log("ici=>", options.amount);
  return (
    // Le composant Elements doit contenir toute notre logique de paiement
    // On lui donner la preuve que nous sommes connectés et les options de paiement
    <>
      <div className="recap">
        <h1>{title}</h1>
        <div className="command-resume">
          <p>Résumé de la commande</p>
          <div>
            <div className="command-text">
              <p>Commande</p>
              <p>{options.amount}€</p>
            </div>
            <div className="command-text">
              <p>Frais protection acheteurs</p>
              <p>{buyerFees}€</p>
            </div>
            <div className="command-text">
              <p>Frais de port</p>
              <p>{travelFees}€</p>
            </div>
          </div>
          <div className="total-div">
            <p>Total</p>
            <p>{options.amount + buyerFees + travelFees} €</p>
          </div>
          <p className="recap-p">
            Il ne vous reste plus qu'une étape pour vous offrir{" "}
            <span>{title}</span>. Vous allez payer{" "}
            <span>{options.amount + buyerFees + travelFees} €</span>(frais de
            protection et frais de port inclus).
          </p>
        </div>
      </div>

      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm title={title} price={price + buyerFees + travelFees} />
      </Elements>
    </>
  );
};
export default Payment;
