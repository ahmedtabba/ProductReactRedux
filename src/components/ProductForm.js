import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class ProductForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="text-danger">{error}</div>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control" {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  //Submit
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <Field name="name" component={this.renderInput} label="Name" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Field name="price" component={this.renderInput} label="Price" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Field name="color" component={this.renderInput} label="Color" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "Name is required";
  }

  if (!formValues.price) {
    errors.price = "Price is required";
  }

  if (!formValues.color) {
    errors.color = "Color is required";
  }

  return errors;
};

export default reduxForm({
  form: "productForm",
  validate
})(ProductForm);
