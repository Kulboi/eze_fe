import React from 'react';

const Filter = ()=> {
  return (
    <div className="filter py-4">
      <div className="container">
        <div className="request mb-5">
          <h5 className="heading">Request Type</h5>

          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-sm btn-primary">Buy Request</button>
            <button type="button" class="btn btn-sm btn-light">Sell Request</button>
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
            <div class="form-group">
              <input type="range" class="form-control-range" id="formControlRange" />
            </div>

            <div class="form-group col-md-4 px-0">
              <input type="number" class="form-control" id="minPrice" value="0" />
            </div>

            <div class="form-group col-md-4 px-0">
              <input type="number" class="form-control" id="maxPrice" value="2000" />
            </div>
          </form>
        </div>

        <div className="storage mb-5">
          <h5 className="heading">Storage</h5>

          <form className="container">
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                16GB
              </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                32GB
              </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                128GB
              </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                256GB
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                512GB
              </label>
            </div>
          </form>
        </div>

        <div className="grade mb-5">
          <h5 className="heading">Grade</h5>

          <form className="container">
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                NEW
              </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                A1
              </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                A2
              </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                B1
              </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                B2
              </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                C
              </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                C/B
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                C/D
              </label>
            </div>
          </form>
        </div>

        <div className="sort mb-5">
          <h5 className="heading">Sort</h5>

          <form className="container">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
              <label class="form-check-label" for="exampleRadios1">
                Lowest Price
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label class="form-check-label" for="exampleRadios1">
                Highest Price
              </label>
            </div>
          </form>
        </div>

        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-sm btn-primary">RESET</button>

          <button type="button" className="btn btn-sm btn-primary">LOAD IPHONES</button>
        </div>
      </div>
    </div>
  )
}

export default Filter;