// import css
import "./ProductItem.css";

const ProductItem = ({ data, setProductSection }) => {
  // definisco una funzione per gestire il rendering della product section al click su un item della lista
  const onHandleClick = () => setProductSection(data.strDrink);

  return (
    <div className="ProductItem" onClick={onHandleClick}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <p>{data.strDrink}</p>
    </div>
  );
};

export default ProductItem;
