import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { moviesData } from './Component/MoviesData';
import MovieList from './Component/MovieList';
import AddMovies from './Component/AddMovies';
import SearchMovie from './Component/SearchMovie';
import SearchDate from './Component/SearchDate';
import Trailer from './Component/Trailer';


function App() {
  const [movie, setMovie] = useState(moviesData)
  const [name, setName] = useState('')
  const [rate, setRate] = useState('')
  const [date, setDate] = useState('')
  const add = (newmovie) => {
    setMovie([...movie,newmovie])
  }

  return (
    <Router>
    <div className="App">
      
       <AddMovies add={add}/>
     <SearchMovie
        setName ={setName}
        setRate = {setRate}
        setDate = {setDate} />
   
     <Routes>
          <Route path="/Trailer/:e" element={<Trailer />} />
          <Route path="/" element={  <MovieList movie={movie} setMovie={setMovie} name={name} rate={rate} date={date}/>}  />       
        </Routes>
       
    </div>
    </Router>
  );
}

export default App;
