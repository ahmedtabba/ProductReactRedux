import React from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import Navbar from "./components/Navbar";
import history from "./history";

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Navbar></Navbar>
          <div className="container">
            <Route path="/products" exact component={ProductList}></Route>
            <Route path="/products/new" component={CreateProduct}></Route>
            <Route path="/products/edit/:id" component={EditProduct}></Route>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
