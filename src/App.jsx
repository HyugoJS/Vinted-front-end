import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>En chargement</p>
  ) : (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route path="/offers" element={<Offer data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
