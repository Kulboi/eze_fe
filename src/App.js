import React, { useState, useEffect } from 'react';
import './App.scss';

// Components
import MainHeader from './components/MainHeader';
import Hero from './components/Hero';
import Filter from './components/Filter';
import Products from './components/Products';

const App = ()=> {
  const [productType, setProductType] = useState('BuyRequest');
  const [currPage, setCurrPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(null);

  const getAllProducts = async ()=> {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}products?type=${productType}&page=${currPage}&limit=${totalProducts}`, { mode: 'cors' });
    const result = await response.json();
    return result.data;
  }

  const fetchProducts = async ()=> {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}products?type=${productType}&page=${currPage}&limit=24`, { mode: 'cors' });
    const result = await response.json();
    setTotalProducts(result.total)
    setProducts(result.data);
  };

  const searchProducts = async (keyword)=> {
    const keywords = keyword.split(","); // search keywords
    const filteredKeywords = keywords.map(keyword => keyword.trim().replace(/ /g, '_'));
    const allProducts = await getAllProducts();
    const searchResult = allProducts.filter(item => {
      return filteredKeywords.includes(item.product.replace(/ /g, '_'));
    })

    if(!searchResult.length) {
      alert("No result found for your search");
    }

    setProducts(searchResult.slice(0, 24));
  }

  const sortByPrice = async (minPrice, maxPrice)=> {
    const allProducts = await getAllProducts();
    const result = allProducts.filter(item => {
      const priceStr = item.price.slice(1);
      return parseInt(priceStr) >= minPrice && parseInt(priceStr) <= maxPrice
    })

    if(result.length) {
      setProducts(result.slice(0, 24));
    }
  }

  useEffect(()=> {
    fetchProducts();
  }, [])

  return (
    <div className="App">
      <MainHeader />

      <section className="container py-5">
        <Hero searchProducts={searchProducts} />
      </section>

      <section className="container-fluid content pl-0 py-5">
        <div className="row">
          <aside className="col-md-2">
            <Filter 
              productType={productType}
              setProductType={setProductType}
              fetchProducts={fetchProducts}
              setCurrPage={setCurrPage}
              sortByPrice={sortByPrice} />
          </aside>

          <div className="col-md-10">
            <Products 
              productList={products} 
              totalProducts={totalProducts}
              currPage={currPage}
              setCurrPage={setCurrPage} 
              fetchProducts={fetchProducts} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
