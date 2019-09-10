import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchProducts, deleteProduct } from "../actions";

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handelDelete = id => {
    this.props.deleteProduct(id);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h1>Products</h1>
          </div>
          <div className="col-md-6 text-right">
            {this.renderCreateNewProduct()}
          </div>
        </div>
        {this.renderProductList()}
      </div>
    );
  }

  renderCreateNewProduct() {
    return (
      <Link
        to="/products/new"
        className="btn btn-primary"
        style={{ marginTop: 13 }}
      >
        New Product
      </Link>
    );
  }

  renderProductList() {
    return (
      <div className="container">
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Color</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product, index) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.color}</td>
                  <td>
                    <div className="text-center">
                      <Link
                        to={`/products/edit/${product.id}`}
                        className="btn btn-info mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handelDelete(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { products: Object.values(state.products) };
};

export default connect(
  mapStateToProps,
  { fetchProducts, deleteProduct }
)(ProductList);
