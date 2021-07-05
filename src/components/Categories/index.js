//CSS
import './Categories.css'

//Images
import FashionImg from '../../assets/backgrounds/bg-fashion.png';
import Protection from '../../assets/backgrounds/bg-protection.png';

const Categories = () => {
  return(
    <section className="categories">
      <div className="item-category">
        <img src={FashionImg} alt="Moda infantil"/>
        <h2>MODA INFANTIL</h2>
      </div>
      <div className="item-category">
        <img src={Protection} alt="Proteccion" />
        <h2>Protección</h2>
      </div>
    </section>
  );
}

export default Categories;