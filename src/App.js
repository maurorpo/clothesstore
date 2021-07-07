import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react'

import Header from './components/Header'
import MainNav from './components/MainNav'
import BannerHome from './components/BannerHome'
import Categories from './components/Categories'
import Footer from './components/Footer'
import CardsProducts from './components/CardsProducts'
import SearchResults from './components/SearchResults'
import Cart from './components/Cart'

import Logo from './assets/icons/logo.png';
import imgBanner from './assets/backgrounds/banner-principal-desktop.png';
import CartIco from './assets/icons/ico-cart.svg';
import Profile from './assets/icons/Ico-user.svg';
import Facebook from './assets/icons/ico-facebook.svg';
import Twitter from './assets/icons/ico-twitter.svg';
import Instagram from './assets/icons/ico-instagram.svg';
import Youtube from './assets/icons/ico-youtube.svg';
import Search from './assets/icons/ico-search.svg';
import IcoBack from './assets/icons/arrow-back.svg';

import './index.css'

function App() {

  const [textSearch, setTextSearch] = useState('');
  const [search, setSearch] = useState('');
  const [countCart, setCountCart] = useState('')

  const handleTextSearch = ({target:{ value }}) => setTextSearch(value)

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(`https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&q=${textSearch}`);
  }

  const handleBack = () => setSearch('')

  const handleCart = (cartContent) => {
    const productsCart = [cartContent || []].concat( JSON.parse(localStorage.getItem('car')) || [])
    localStorage.setItem('car', JSON.stringify(productsCart))
    const idsProducst = JSON.parse(localStorage.getItem('car'));
    setCountCart(idsProducst.length);

  }
  
  return (
    <section className="App">
      <Router>
        <Header 
          logo={Logo}
          cart={CartIco}
          profile={Profile}
          search={Search}
          countCart={countCart}
          searchInput={ handleSearch }
          textSearch={ handleTextSearch }/>
        <MainNav />
        <Switch>

          <Route path="/cart">
            {
                (!search)
                ? 
                <Cart />
                :
                <section className="resultContent">
                  <div className="goBack" onClick={ handleBack }><img src={IcoBack} alt="Volver"/>Volver</div>
                  <SearchResults apiSearch={search} textSearch={ textSearch } handleCart={handleCart} />
                </section>
              }
          </Route>

          <Route exact path="/">
            {
              (!search)
              ? 
              <section className="spaContent">
                <BannerHome imgBanner={imgBanner}/>
                <Categories />
                <CardsProducts handleCart={handleCart} />
              </section>
              :
              <section className="resultContent">
                <div className="goBack" onClick={ handleBack }><img src={IcoBack} alt="Volver"/>Volver</div>
                <SearchResults apiSearch={search} textSearch={ textSearch } handleCart={handleCart} />
              </section>
            }
          </Route>          
        </Switch>
        <Footer facebook={Facebook} twitter={Twitter} instagram={Instagram} youtube={Youtube}/>
      </Router>
    </section>
  );
}

export default App;
