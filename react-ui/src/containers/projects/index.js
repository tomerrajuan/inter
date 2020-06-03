import axios from "axios"
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer'
import Uploader from '../../components/uploader'
import './style.css'


export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.getMoreImages = this.getMoreImages.bind(this);
        this.state = {
            images:[],
            lastImage: "",
            showButton: true
        };
    }
 
//  const imageList = useState(images).map((image));
 
componentDidMount() {
    var me = this;
    axios.get("/images")
    .then(function(response) {
        console.log("response from images is: ", response.data);
        me.setState({
            images:response.data
        }, console.log("state is updated"));
    })
    .catch(err => console.log("err", err));
    window.addEventListener('scroll', me.scrollForMoreImages) 
}

getMoreImages(e){
        var img = this.state.images;
        var me= this
        // console.log("state is: ",me);
        let lastImage = img[img.length - 1].id;
        axios.get("/moreImages/" + lastImage).then(function(res) {
                console.log("response get more images: ", res);
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
               
                console.log("me.lastImage ", me.lastImage,me.firstId, img, me.state.showButton)

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
                <Link to="/projects">Cinema</Link>
                <a href="movies.html">Movies</a>
                <a href="series.html">Series</a>
                <a href="animation-theater.html">Animation/Theatrical</a>
                <a href="animation-tv.html">Animation/TV</a>
            </nav>
            <Uploader/>
        </div>
              <div className="imageList">
                {
                this.state.images.map((image, i)=>{
             console.log('test');
             return <li ><img className="image-in-imageList" src={image.url}/></li>
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