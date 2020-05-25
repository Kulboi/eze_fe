import React from 'react';
import Product from './Product';

const Products = (props)=> {
  const totalPages = Math.ceil(props.totalProducts/24);
  const currentPage = props.currPage;

  const fetchData = (page)=> {
    props.setCurrPage(page)
    props.fetchProducts()
  }

  const pageData = (position)=> {
    const current = position === "prev" ? currentPage - 1 : currentPage + 1;

    if(current > 0) {
      props.setCurrPage(current)
      props.fetchProducts()
    }
  }

  return (
    <section className="products row">
      {
        props.productList.map(product => (
          <div className="col-md-3" key={product._id}>
            <Product productDetails={product} />
          </div>
        ))
      }

      {
        totalPages > 0 && (
          <div className="container btn-toolbar paging-btns">
            <div className="btn-group mr-2">
              <button type="button" className="btn mr-2" onClick={e => pageData("prev")}>
                <i className="lni lni-chevron-left"></i>
              </button>
              {
                [...Array(totalPages)].map((num, idx) => (
                  <button 
                    type="button" 
                    onClick={e => fetchData(idx+1)}
                    className={`btn mr-2 ${currentPage === idx+1 ? 'active': '' }`} 
                    key={idx}>
                    {idx + 1}
                  </button>
                ))
              }
              <button type="button" className="btn" onClick={e => pageData("next")}>
                <i className="lni lni-chevron-right"></i>
              </button>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Products;