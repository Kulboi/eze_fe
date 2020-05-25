import React, { useRef } from 'react';
import Macbook from './../assets/macbook.png';

const Search = (props)=> {
  const searchInput = useRef(null);

  const search = (e)=> {
    const query = searchInput.current.value;
    props.searchProducts(query);
  }

  return (
    <div className="hero row">
      <div className="col-md-6 text-white search pt-4">
        <h2>SHOP OUR LATEST AVAILABLE STOCK HERE</h2>

        <form className="d-flex mt-3">
          <div className="form-group col-md-9 pl-0">
            <input 
              type="text" 
              className="form-control" 
              id="search-input" 
              placeholder="Enter Search Term (e.g. iPhone x, 128GB or A1)"
              ref={searchInput} />
          </div>

          <button type="button" className="btn btn-primary mb-2" onClick={e => search()}>
            Search <i className="lni lni-arrow-right"></i>
          </button>
        </form>
      </div>

      <div className="col-md-6 hero-img">
        <img src={Macbook} alt="macbook" />
      </div>
    </div>
  )
}

export default Search;