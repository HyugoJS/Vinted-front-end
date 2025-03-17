import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";

import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Publish from "./pages/publish/Publish";
function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(Cookies.get("token") || null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--vinted-backend--fc7nwyvb2r4r.code.run/offers"
        );
        console.log(response.data);
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
      <Header userToken={userToken} setUserToken={setUserToken} />
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route
          path="/offers/:id"
          element={
            <Offer
              data={data}
              setData={setData}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/signup"
          element={<Signup userToken={userToken} setUserToken={setUserToken} />}
        />
        <Route
          path="/login"
          element={<Login userToken={userToken} setUserToken={setUserToken} />}
        />
        <Route path="/publish" element={<Publish />} />
      </Routes>
    </Router>
  );
}

export default App;
