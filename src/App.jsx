import React from "react";
import Header from "./componenrs/Header";
import Main from "./componenrs/Main";
import Navigation from "./componenrs/Navigation";
import AddToCart from "./componenrs/AddToCart";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Navigation />
      <AddToCart />
    </div>
  );
};

export default App;
