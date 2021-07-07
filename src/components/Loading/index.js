//Components
import CircularProgress from '@material-ui/core/CircularProgress';

//Css
import './Loading.css'

const Loading = () => {
  return(
    <div className="loading">
      <h3>Cargando contenido</h3>
      <CircularProgress />
    </div>
  )
}

export default Loading