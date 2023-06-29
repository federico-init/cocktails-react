// import React hooks
import { useState } from "react";

// import components
import Navbar from "./components/navbar";
import ProductSection from "./components/productSection";
import ProductList from "./components/productList";

// import css
import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("");

  return (
    <div className="App">
      <Navbar setProductSection={setProductSection} />
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
