import axios from "axios";
import cors from "cors";
import { useState } from "react";
import "./Publish.css";
import Cookies from "js-cookie";
// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());

const Publish = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("picture", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("brand", brand);
        formData.append("size", size);
        formData.append("color", color);
        formData.append("condition", condition);
        formData.append("location", location);
        formData.append("price", price);

        try {
          const response = await axios.post(
            "https://site--vinted-backend--fc7nwyvb2r4r.code.run/offer/publish",
            formData,
            {
              headers: {
                authorization: "Bearer " + Cookies.get("token"), // récupéré grâce aux cookies ou au state userToken
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response.data);
        } catch (error) {
          console.log(error.response);
        }
      }}
    >
      <div className="container-form">
        <div className="files-div">
          <input
            type="file"
            onChange={async (event) => {
              setFile(event.target.files[0]);
            }}
          />
        </div>
        <div className="title-div">
          <label htmlFor={title}>Titre :</label>
          <input
            type="text"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
            id={title}
            placeholder="Titre de l'annonce"
          />
          <label htmlFor="text">Description :</label>
          <textarea
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
            id={description}
            placeholder="Description de l'annonce"
          />
        </div>
        <div className="details-div">
          <label htmlFor="text">Marque :</label>
          <input
            type="text"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
            value={brand}
            id={brand}
            placeholder="ex :Zara"
          />
          <label htmlFor="text">Taille :</label>
          <input
            type="text"
            onChange={(event) => {
              setSize(event.target.value);
            }}
            value={size}
            id={size}
            placeholder="ex : S"
          />
          <label htmlFor="text">Couleur :</label>
          <input
            type="text"
            onChange={(event) => {
              setColor(event.target.value);
            }}
            value={color}
            id={color}
            placeholder="ex : bleu"
          />
          <label htmlFor="text">État :</label>
          <input
            type="text"
            onChange={(event) => {
              setCondition(event.target.value);
            }}
            value={condition}
            id={condition}
            placeholder="ex : neuf"
          />
          <label htmlFor="text">Lieu :</label>
          <input
            type="text"
            onChange={(event) => {
              setCity(event.target.value);
            }}
            value={city}
            id={city}
            placeholder="ex : Paris"
          />
        </div>
        <div>
          <label htmlFor="text">Prix :</label>
          <input
            type="text"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            value={price}
            id={price}
            placeholder="0,00€"
          />
        </div>
      </div>
      <button>Publier</button>
    </form>
  );
};
export default Publish;
