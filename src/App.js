import React from 'react';
import './App.scss';

// Components
import MainHeader from './components/MainHeader';
import Hero from './components/Hero';
import Filter from './components/Filter';

const App = ()=> {
  return (
    <div className="App">
      <MainHeader />

      <section className="container py-5">
        <Hero />
      </section>

      <section className="row content py-5">
        <aside className="col-md-2">
          <Filter />
        </aside>

        <div className="col-md-10">

        </div>
      </section>
    </div>
  );
}

export default App;
