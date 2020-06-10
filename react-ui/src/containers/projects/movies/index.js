import axios from "axios"
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer'
// import UploaderMovies from '../../../components/uploader/uploaderMovies'
import '../../projects/style.css'


export default class ProjectsMovies extends React.Component {
    constructor(props) {
        super(props);
        this.getMoreMovies = this.getMoreMovies.bind(this);
        this.state = {
            movies:[],
            lastMovie: "",
            showButton: true
        };
    }
 
//  const imageList = useState(movies).map((image));
 
componentDidMount() {
    var me = this;
    axios.get("/images-movies")
    .then(function(response) {
        me.setState({
            movies:response.data
        })
    }).catch(err => console.log("err", err));
        me.setState({
            something: 'changed'});
}

getMoreMovies(e){
        var img = this.state.movies;
        var me= this
        let lastMovie = img[img.length - 1].id;
        axios.get("/moreImages-movies/" + lastMovie).then(function(res) {
                console.log("response get more movies: ", res);
                me.firstId = res.data.firstId[0].id;
                img = img.concat(res.data.image);
                me.lastImage = img[img.length - 1].id;
               var updatedList = img;
                if (me.lastImage === me.firstId) {
                    me.setState({
                        images: updatedList,
                        showButton:false
                    })
                }
            })
            .catch(err => console.log("error in post upload", err));
            me.setState({something: 'changed'});
}
checkImgId(e){
    console.log("image id number is",e)
}

render() {
    return(
      <div>
        <header>
            <nav className="navbar">
                <Link to="/contact">Services</Link>
                <a href="http://inter-audio.de/">InterAudio</a>
                <Link to="/projects">Projects</Link>
                <Link to="/">Home</Link>
            </nav>
      </header>
        <div className="contact-head">
            <div id="logo">
            <img src="interopa.png" alt=""/>
            </div>
            <nav className="navbar-projects">
            <Link to="/projects-cinema">Cinema</Link>
                <Link to ="/projects-movies"  id="projects-section">Movies</Link>
                <Link to ="/projects-series">Series</Link>
                <Link to ="/projects-animation-cinema">Animation/Cinema</Link>
                <Link to ="/projects-animation-tv">Animation/Tv</Link>
            </nav>
            {/* <UploaderMovies/> */}
        </div>

        {this.state.movies.length>0 &&               

              <div className="imageList">
              {
    this.state.movies.map((movie, i)=>{
 console.log('test');
 return <li key={i} data-id={movie.id} onClick={() => this.checkImgId(movie.id)}><img className="image-in-imageList"  src={movie.url} alt="" /></li>
      })
    }
      </div>
    }

      {this.state.showButton &&  
              <div className="show-more">
                <button id="show-more-button" onClick={this.getMoreImages}>
                        Show More
                </button>
              </div>
                }
    <Footer/>
  </div>
   );
 }
}
