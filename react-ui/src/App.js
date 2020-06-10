import { default as React } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Contact from "./containers/contact";
import Homepage from "./containers/homepage";
import ProjectsAnimation from "./containers/projects/animation";
import ProjectsAnimationTv from "./containers/projects/animationTv";
import ProjectsCinema from "./containers/projects/cinema";
import ProjectsMovies from "./containers/projects/movies";
import ProjectsSeries from "./containers/projects/series";



function App() {

  return (   
     <BrowserRouter>
    <div className="App">
    <Route path="/" exact component={Homepage} />
    <Route path="/projects-cinema" exact component={ProjectsCinema} />
    <Route path="/projects-movies" exact component={ProjectsMovies} />
    <Route path="/projects-series" exact component={ProjectsSeries} />
    <Route path="/projects-animation" exact component={ProjectsAnimation} />
    <Route path="/projects-animation-tv" exact component={ProjectsAnimationTv} />



    <Route path="/contact" exact component={Contact} />
    </div>
      </BrowserRouter>
  );
}

export default App;
