// import React hooks
import { useState } from "react";

// import components
import ProductSection from "./components/productSection";
import ProductList from "./components/productList";

// import css
import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("");

  return (
    <div className="App">
      {productSection ? (
        <ProductSection
          productSection={productSection}
          setProductSection={setProductSection}
        />
      ) : (
        <>
          <ProductList name="Espresso" setProductSection={setProductSection} />
          <ProductList name="Vermouth" setProductSection={setProductSection} />
          <ProductList name="Gin" setProductSection={setProductSection} />
        </>
      )}
    </div>
  );
}

export default App;
