import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchProduct, editProduct } from "../actions";
import ProductForm from "./ProductForm";

class EditProduct extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchProduct(this.props.match.params.id);
    }
  }

  //Submit
  onSubmit = formValues => {
    this.props.editProduct(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <h3>Edit Product</h3>
        <ProductForm
          onSubmit={this.onSubmit}
          //   initialValues={_.pick(this.props.product, "name", "price", "color")}
          initialValues={this.props.product}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.params.id)
    return { product: state.products[ownProps.match.params.id] };
  return {};
};

export default connect(
  mapStateToProps,
  {
    fetchProduct,
    editProduct
  }
)(EditProduct);
