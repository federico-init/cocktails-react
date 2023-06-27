// import React hooks
import { useState, useEffect } from "react";

// import component
import ProductItem from "../productItem";

// import utils
import { GET } from "../../utils/http";

// import css
import "./ProductList.css";

const ProductList = ({ name, setProductSection }) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    GET(`filter.php?i=${name}`).then((data) => setListData(data.drinks));
  }, []);

  return (
    <div className="ProductList">
      <h2>{name}</h2>
      <div className="ProductList__list">
        {listData.map((drink) => (
          <ProductItem
            data={drink}
            setProductSection={setProductSection}
            key={drink.idDrink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
