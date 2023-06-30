// import React hooks
import { useState, useEffect } from "react";

// import utils
import { GET } from "../../utils/http";

// import asset
import LikeIcon from "../../assets/like-icon.png";

// import css
import "./ProductSection.css";

const ProductSection = ({ productSection, setProductSection }) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    GET(`search.php?s=${productSection}`).then((data) =>
      setProductData(data.drinks[0])
    );
  }, [productSection]);

  // definisco la gestione al click del pulsante 'back'
  const onHandleClick = () => setProductSection("");

  return (
    <div className="ProductSection">
      <img
        className="ProductSection__picture"
        src={productData.strDrinkThumb}
        alt={productData.strDrink}
      />
      <div className="ProductSection__text">
        <div className="ProductSection__text--heading">
          <h1>{productData.strDrink}</h1>
          <p>{productData.strAlcoholic}</p>
        </div>
        <img src={LikeIcon} alt="like icon" />
      </div>
      <ul className="ProductSection__ingredientsList">
        {/* TODO: implementare un map per gestire il numero di ingredienti */}
        <li className="ProductSection__ingredient">
          {productData.strIngredient1}
        </li>
        <li className="ProductSection__ingredient">
          {productData.strIngredient2}
        </li>
        <li className="ProductSection__ingredient">
          {productData.strIngredient3}
        </li>
        <li className="ProductSection__ingredient">
          {productData.strIngredient4}
        </li>
      </ul>
      <p className="ProductSection__instructions">
        {productData.strInstructions}
      </p>
      {/* TODO: modificare close/back button */}
      <button className="ProductSection__close" onClick={onHandleClick}>
        ✖
      </button>
    </div>
  );
};

export default ProductSection;
