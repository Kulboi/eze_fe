import React from 'react';
import Logo from './../assets/logo.png';

const MainHeader = ()=> {
  return (
    <header className="main-header py-3">
      <div className="container-fluid d-flex justify-content-between">
        <div className="brand">
          <img src={Logo} alt="Brand logo" />
        </div>

        <div className="menu">
        <a href="#!" className="btn btn-primary px-3">Upload Data</a>
        </div>
      </div>
    </header>
  )
}

export default MainHeader;