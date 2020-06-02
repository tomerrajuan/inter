import { default as React, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Contact from "./containers/contact";
import Homepage from "./containers/homepage";
import Projects from "./containers/projects";

function App() {
  const [apiResults, setApiResults] = useState("");


// function callAPI() {
//     fetch("http://localhost:9000/testAPI")
//         .then(res => res.text())
//         .then(res => setApiResults(res));
// }

//    callAPI();
   
  return (   
     <BrowserRouter>
    <div className="App">
    <Route path="/" exact component={Homepage} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/contact" exact component={Contact} />
    </div>
      </BrowserRouter>
  );
}

export default App;
