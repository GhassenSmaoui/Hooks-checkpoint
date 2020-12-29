import {React, useState} from "react"
import './App.css';
import {Card }from "react-bootstrap";
import AddMovie from './Components/AddMovie';
import MovieList from "./Components/MovieList";
import {moviesList} from './assets/Data';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [movieList, setMovieList] = useState(moviesList)
  const addMovie=(title,posterUrl,description,rate)=>{
    setMovieList([...movieList,{title:title,posterUrl:posterUrl,description:description,rate:rate}])
  }
  return (
    <div className="container-fluid">
      <MovieList movieList = {movieList}/>
      <AddMovie addMovie = {addMovie}/>
    </div>
  );
}

export default App;
