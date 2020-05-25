import React, { useState, useEffect } from 'react';
import './App.scss';

// Components
import MainHeader from './components/MainHeader';
import Hero from './components/Hero';
import Filter from './components/Filter';
import Products from './components/Products';

const App = ()=> {
  const apiBaseUrl = 'https://eze-be.herokuapp.com/';
  const [productType, setProductType] = useState('');
  const [currPage, setCurrPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(null);

  const fetchProducts = async ()=> {
    const response = await fetch(`${apiBaseUrl}products?type=${productType}&page=${currPage}&limit=24`, { mode: 'cors' });
    const result = await response.json();
    setTotalProducts(result.total)
    setProducts(result.data);
  };

  const searchProducts = async (keyword)=> {
    const keywords = keyword.split(","); // search keywords
    const filteredKeywords = keywords.map(keyword => keyword.trim().replace(/ /g, '_'));

    // Get all products for current type
    const response = await fetch(`${apiBaseUrl}products?type=${productType}&page=${currPage}&limit=${totalProducts}`, { mode: 'cors' });
    const result = await response.json();
    
    const searchResult = result.data.filter(item => {
      return filteredKeywords.includes(item.product.replace(/ /g, '_'));
    })

    if(!searchResult.length) {
      alert("No result found for your search");
    }

    setProducts(searchResult);
  }

  const sortByPrice = (minPrice, maxPrice)=> {
    const result = products.filter(item => {
      console.log(parseInt(item.price))
      return item.price >= minPrice
    })
    console.log(result)
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
