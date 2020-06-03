import axios from "axios"
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer'
import UploaderSeries from '../../../components/uploader/uploaderSeries'
import '../../projects/style.css'

export default class ProjectsSeries extends React.Component {
    constructor(props) {
        super(props);
        this.getMoreSeries = this.getMoreSeries.bind(this);
        this.state = {
            series:[],
            lastSerie: "",
            showButton: true
        };
    }
 
//  const imageList = useState(series).map((image));
 
componentDidMount() {
    var me = this;

    axios.get("/images-series")
    .then(function(response) {
        console.log("response from series is: ", response.data);
        
        me.setState({
            series:response.data
        })
        
    }).catch(err => console.log("err", err));
        me.setState({
            something: 'changed'});
}

getMoreSeries(e){
        var img = this.state.series;
        var me= this
        // console.log("state is: ",me);
        let lastSerie = img[img.length - 1].id;
        axios.get("/moreImages-series/" + lastSerie).then(function(res) {
                console.log("response get more series: ", res);
                me.firstId = res.data.firstId[0].id;
                img = img.concat(res.data.image);
                me.lastImage = img[img.length - 1].id;

               var updatedList = img;
                if (me.lastSerie === me.firstId) {
                    me.setState({
                        images: updatedList,
                        showButton:false
                    })
                }
               
                console.log("me.lastSerie ", me.lastSerie,me.firstId, img, me.state.showButton)

            })
            .catch(err => console.log("error in post upload", err));
            me.setState({something: 'changed'});
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
            <p>Here are some of the many projects we have worked on</p>
            <nav className="navbar-projects">
            <Link to="/projects-cinema">Cinema</Link>
                <Link to ="/projects-movies">Movies</Link>
                <Link to ="/projects-series" id="projects-section">Series</Link>
                <Link to ="/projects-animation-cinema">Animation/Cinema</Link>
                <Link to ="/projects-animation-tv">Animation/Tv</Link>
            </nav>
            <UploaderSeries/>
        </div>
              <div className="imageList">
              { this.state.series.map((serie, i)=>{
             console.log('test');
            return <li ><img className="image-in-imageList" src={serie.url}/></li>
             })
            }
      </div>
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

