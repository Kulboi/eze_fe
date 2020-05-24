import React from 'react';
import Macbook from './../assets/macbook.png';

const Search = ()=> {
  return (
    <div className="hero row">
      <div className="col-md-7 text-white search pt-4">
        <h2>SHOP OUR LATEST AVAILABLE STOCK HERE</h2>

        <form class="d-flex mt-3">
          <div class="form-group col-md-9 pl-0">
            <input type="text" class="form-control" id="search-input" placeholder="Enter Search Term (e.g. iPhone x, 128GB or A1)" />
          </div>

          <button type="button" class="btn btn-primary mb-2">
            Search <i class="lni lni-arrow-right"></i>
          </button>
        </form>
      </div>

      <div className="col-md-5 product">
        <img src={Macbook} alt="macbook" />
      </div>
    </div>
  )
}

export default Search;