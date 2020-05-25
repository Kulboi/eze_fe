import React, { useEffect, useRef } from 'react';

const Filter = (props)=> {
  const requestType = props.productType;
  const uploadRef = useRef(null);
  const minPriceEl = useRef(null);
  const maxPriceEl = useRef(null);

  useEffect(()=> {
    props.setProductType('buy');
  })

  const toggleRequestType = (type)=> {
    props.setProductType(type);
    console.log(props.productType)
    props.setCurrPage(1);
    props.fetchProducts();
  }

  const toggleMinMax = (e)=> {
    console.log(e.target.value)
  }

  const getMinMax = ()=> {
    const minPrice = minPriceEl.current.value || 0;
    const maxPrice = maxPriceEl.current.value || 2000;
    props.sortByPrice(minPrice, maxPrice);
  }

  const clickUpload = ()=> {
    uploadRef.current.click();
  }

  const uploadProductsData = async (e)=> {
    let formData = new FormData();
    formData.append('file', e.target.files[0]);

    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}upload`, {
      method: 'POST',
      body: formData
    });
    
    const response = await res.json(); 
    
    if(response.status === "success") {
      alert('Upload was successful');
    }
  }

  return (
    <div className="filter py-4">
      <div className="container">
        <div className="request mb-5">
          <h5 className="heading">Request Type</h5>

          <div className="btn-group" role="group" aria-label="Basic example">
            <button 
              type="button" 
              className={`btn btn-sm ${requestType === 'buy' ? 'btn-primary' : 'btn-light'}`}
              onClick={e => toggleRequestType('buy')}>
                Buy Request
            </button>

            <button 
              type="button" 
              className={`btn btn-sm ${requestType === 'buy' ? 'btn-light' : 'btn-primary'}`}
              onClick={e => toggleRequestType('sell')}>
              Sell Request
            </button>
          </div>
        </div>
        <div className="categories mb-5">
          <h5 className="heading">Categories</h5>

          <ul className="list-unstyled container pt-2">
            <li className="list-item mb-2">
              <a href="#!" className="text-white">All</a>
            </li>
            <li className="list-item mb-2">
              <a href="#!">Iphone</a>
            </li>
            <li className="list-item mb-2">
              <a href="#!" className="text-white">Samsung</a>
            </li>
            <li className="list-item mb-2">
              <a href="#!" className="text-white">Macbook</a>
            </li>
            <li className="list-item">
              <a href="#!" className="text-white">Airpods</a>
            </li>
          </ul>
        </div>

        <div className="price mb-5">
          <h5 className="heading">Price Filter</h5>

          <form className="container">
            <div className="form-group">
              <input 
                type="range" 
                className="form-control-range" 
                id="priceSlider"
                onChange={e => toggleMinMax(e)} />
            </div>

            <div className="form-group col-md-6 px-0">
              <input 
                type="number" 
                className="form-control" 
                id="minPrice" 
                ref={minPriceEl}
                onChange={e => getMinMax(e)} />
            </div>

            <div className="form-group col-md-6 px-0">
              <input 
                type="number" 
                className="form-control" 
                id="maxPrice" 
                ref={maxPriceEl}
                onChange={e => getMinMax(e)} />
            </div>
          </form>
        </div>

        <div className="storage mb-5">
          <h5 className="heading">Storage</h5>

          <form className="container">
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                16GB
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                32GB
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                128GB
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                256GB
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                512GB
              </label>
            </div>
          </form>
        </div>

        <div className="grade mb-5">
          <h5 className="heading">Grade</h5>

          <form className="container">
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                NEW
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                A1
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                A2
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                B1
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                B2
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                C
              </label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                C/B
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label">
                C/D
              </label>
            </div>
          </form>
        </div>

        <div className="sort mb-5">
          <h5 className="heading">Sort</h5>

          <form className="container">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label className="form-check-label">
                Lowest Price
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label className="form-check-label">
                Highest Price
              </label>
            </div>
          </form>
        </div>

        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-sm btn-primary">RESET</button>

          <input 
            type="file" 
            style={ {display: 'none'} }
            ref={uploadRef}
            accept=".xlsx, .csv"
            onChange={e => uploadProductsData(e)} />
          <button type="button" className="btn btn-sm btn-primary" onClick={e => clickUpload()}>LOAD IPHONES</button>
        </div>
      </div>
    </div>
  )
}

export default Filter;