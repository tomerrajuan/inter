import axios from "axios"
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer'
import UploaderAnimationTv from '../../../components/uploader/uploaderAnimationTv'
import '../../projects/style.css'



export default class ProjectsCinema extends React.Component {
    constructor(props) {
        super(props);
        this.getMoreAnimationTv = this.getMoreAnimationTv.bind(this);
        this.state = {
            animationTv:[],
            lastAnimationTv: "",
            showButton: true
        };
    }
 
//  const imageList = useState(images).map((image));
 
componentDidMount() {
    var me = this;
    axios.get("/images-animation-tv")
    .then(function(response) {
        console.log("response from animationTv is: ", response.data);
        me.setState({
            animationTv:response.data
        }, console.log("state is updated"));
    })
    .catch(err => console.log("err", err));
}

getMoreAnimationTv(e){
        var img = this.state.animationTv;
        var me= this
        // console.log("state is: ",me);
        let lastAnimationTv = img[img.length - 1].id;
        axios.get("/moreImages-animationTv/" + lastAnimationTv).then(function(res) {
                console.log("response get more animationTv: ", res);
                me.firstId = res.data.firstId[0].id;
                img = img.concat(res.data.image);
                me.lastAnimationTv = img[img.length - 1].id;

               var updatedList = img;
                if (me.lastAnimationTv === me.firstId) {
                    me.setState({
                        animation: updatedList,
                        showButton:false
                    })
                }
               
                console.log("me.lastAnimationTv ", me.lastAnimationTv,me.firstId, img, me.state.showButton)

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
                <Link to="/projects-cinema">Projects</Link>
                <Link to="/">Home</Link>
            </nav>
      </header>
        <div className="contact-head">
            <div id="logo">
            <img src="interopa.png" alt=""/>
            </div>
            <nav className="navbar-projects">
                <Link to="/projects-cinema" >Cinema</Link>
                <Link to ="/projects-movies">Movies</Link>
                <Link to ="/projects-series">Series</Link>
                <Link to ="/projects-animation-cinema" id="projects-section">Animation/Cinema</Link>
                <Link to ="/projects-animation-tv">Animation/Tv</Link>
            </nav>
            <UploaderAnimationTv/>
        </div>
              <div className="imageList">
              {
    this.state.animationTv.map((animat, i)=>{
 console.log('test');
 return <li key={i} data-id={animat.id} onClick={() => this.checkImgId(animat.id)}><img className="image-in-imageList"  src={animat.url} alt="" /></li>
      })
    }
                
      </div>
      {this.state.showButton &&  
              <div className="show-more">
                <button id="show-more-button" onClick={this.getMoreAnimationTv}>
                        Show More
                </button>
              </div>

                }
    <Footer/>
  </div>
   );
 }
}

