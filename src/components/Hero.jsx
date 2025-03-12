import heroImg from "../assets/hero.jpg";
const Hero = () => {
  return (
    <>
      <div>
        <div className="in-img">
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button>Commencer à vendre</button>
        </div>
        <img src={heroImg} alt="image déchirée" />
      </div>
    </>
  );
};
export default Hero;
