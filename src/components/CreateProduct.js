import React, { Component } from "react";
import { connect } from "react-redux";

import { createProduct } from "../actions";
import ProductForm from "./ProductForm";

class CraeteProduct extends Component {
  //Submit
  onSubmit = formValues => {
    this.props.createProduct(formValues);
  };

  render() {
    return (
      <div className="container">
        <h1>New Product</h1>
        <ProductForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  {
    createProduct
  }
)(CraeteProduct);
