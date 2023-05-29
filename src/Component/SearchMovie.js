import ReactStars from "react-rating-stars-component";
const SearchMovie = ({setName, setRate, setDate}) => {
    const ratingChanged = (newRating) =>{
        setRate(newRating);
    };
    return (
        <div>
            <input onChange={(event) => setName(event.target.value)}/>
            <ReactStars
             count={5}
             onChange={ratingChanged}
             size={24}
             color2={"#ffd700"}
           />
         </div>
        
    )
}
export default SearchMovie