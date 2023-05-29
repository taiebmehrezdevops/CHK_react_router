import Card from './Card'
const MovieList = ({movie, name, rate, date}) => {
    return(
        <div>
           {movie.filter((el) => (el.name.toLowerCase().includes(name.toLowerCase())  || el.date >= name) && el.rating >= rate).map((el) => (
               <Card e={el}/>  
           ))}
           </div>
    );
};
export default MovieList