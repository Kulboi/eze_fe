import React from 'react';

const Product = (props)=> {
  return (
    <div className="product card mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-end">
          <span className="badge badge-light">
            {props.productDetails.condition}
          </span>
        </div>

        <div className="d-flex justify-content-center">
          <img src={require(`../products/${props.productDetails.product.toLowerCase().replace(/ /g, '_')}.png`)} alt="Product" />
        </div>

        <div>
          <h6 className="text-white name mb-0">{props.productDetails.product}</h6>
          <span className="text-muted capacity">Unlocked | {props.productDetails.capacity}</span>

          <div className="price mb-4">
            <small className="text-muted">Unit Price</small>
            <h4 className="text-white mb-0">{props.productDetails.price}</h4>
            <small className="text-muted">1500 Available</small>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn btn-sm btn-primary">Buy</button>
        </div>
      </div>
    </div>
  )
}

export default Product;