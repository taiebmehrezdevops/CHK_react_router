import ReactStars from "react-rating-stars-component";
const SearchDate = ({ setDate }) => {
    const dateChanged = (newdate) =>{
        setDate(newdate);
    };
    return (
        <div>
            <input onChange={(event) => setDate(event.target.value)}/>
            
         </div>
        
    )
}
export default SearchDate