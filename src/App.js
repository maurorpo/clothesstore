import { useState } from 'react'
import React from 'react';

// Components
import Header from './components/Header'
import MainNav from './components/MainNav'
import BannerHome from './components/BannerHome'
import Categories from './components/Categories'
import Footer from './components/Footer'
import CardsProducts from './components/CardsProducts'
import SearchResults from './components/SearchResults'

//Images
import Logo from './assets/icons/logo.png';
import imgBanner from './assets/backgrounds/banner-principal-desktop.png';
import Cart from './assets/icons/ico-cart.svg';
import Profile from './assets/icons/Ico-user.svg';
import Facebook from './assets/icons/ico-facebook.svg';
import Twitter from './assets/icons/ico-twitter.svg';
import Instagram from './assets/icons/ico-instagram.svg';
import Youtube from './assets/icons/ico-youtube.svg';
import Search from './assets/icons/ico-search.svg';
import IcoBack from './assets/icons/arrow-back.svg';

//Css
import './index.css'

function App() {
  const [textSearch, setTextSearch] = useState('');
  const [search, setSearch] = useState('');

  const handleTextSearch = (e) => {
    setTextSearch(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(`https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&q=${textSearch}`);
  }

  const handleBack = () => {
    setSearch('')
  }

  
  return (
    <section className="App">
      <Header 
        logo={Logo}
        cart={Cart}
        profile={Profile}
        search={Search}
        searchInput={ handleSearch }
        textSearch={ handleTextSearch }/>
      <MainNav />
      {
        (search === '')
        ? 
        <section className="spaContent">
          <BannerHome imgBanner={imgBanner}/>
          <Categories />
          <CardsProducts />
        </section>
        :
        <section className="resultContent">
          <div className="goBack" onClick={ handleBack }><img src={IcoBack} alt="Volver"/>Volver</div>
          <SearchResults apiSearch={search} textSearch={ textSearch }/>
        </section>
      }
      <Footer facebook={Facebook} twitter={Twitter} instagram={Instagram} youtube={Youtube}/>
    </section>
  );
}

export default App;
