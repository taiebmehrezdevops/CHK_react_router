import { useParams, useNavigate } from "react-router-dom";
import { moviesData } from "./MoviesData";
const Trailer = () => {
    const { e } = useParams();
    let navigate = useNavigate();
    const film = moviesData.find((el) => el.id === Number(e));
    console.log(film,'filmmm')
    console.log(e)
    const handleClick = () => {
      navigate("/");
    };
    return (
        <div>
          <h2>{film.name}</h2>
          <iframe width="560" height="315" src={film.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


          <button onClick={handleClick}>go to the Home</button>
        
        </div>
      );
    };
    export default Trailer;
