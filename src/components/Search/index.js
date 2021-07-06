//Css
import './Search.css'

const Search = ({ search, searchInput, textSearch }) => {
  
  
  return(
    <div className="searchContent">
      <form onSubmit={searchInput}>

        <input type='text' onChange={ textSearch } placeholder="Busca producto de moda..."/>
        <button>
          <img src={search} alt="Icono buscador" />
        </button>
      </form>
    </div>
  );
}

export default Search