// Components
import Header from './components/Header'
import MainNav from './components/MainNav'
import BannerHome from './components/BannerHome'
import Categories from './components/Categories'
import Footer from './components/Footer'
import ProductsHome from './components/ProductsHome'

//Images
import Logo from './assets/icons/logo.png';
import Cart from './assets/icons/ico-cart.svg';
import Profile from './assets/icons/Ico-user.svg';
import Facebook from './assets/icons/ico-facebook.svg';
import Twitter from './assets/icons/ico-twitter.svg';
import Instagram from './assets/icons/ico-instagram.svg';
import Youtube from './assets/icons/ico-youtube.svg';

//Css
import './index.css'

function App() {
  return (
    <section className="App">
      <Header logo={Logo} cart={Cart} profile={Profile}/>
      <MainNav />
      <BannerHome />
      <Categories />
      <ProductsHome />
      <Footer facebook={Facebook} twitter={Twitter} instagram={Instagram} youtube={Youtube}/>
    </section>
  );
}

export default App;
