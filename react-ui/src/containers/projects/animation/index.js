import axios from "axios"
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer'
// import UploaderAnimation from '../../../components/uploader/uploaderCinema'
import '../../projects/style.css'



export default class ProjectsCinema extends React.Component {
    constructor(props) {
        super(props);
        this.getMoreAnimation = this.getMoreAnimation.bind(this);
        this.state = {
            animation:[],
            lastAnimation: "",
            showButton: true
        };
    }
 
//  const imageList = useState(images).map((image));
 
componentDidMount() {
    var me = this;
    axios.get("/images-animation")
    .then(function(response) {
        console.log("response from animation is: ", response.data);
        me.setState({
            animation:response.data
        }, console.log("state is updated"));
    })
    .catch(err => console.log("err", err));
}

getMoreAnimation(e){
        var img = this.state.animation;
        var me= this
        // console.log("state is: ",me);
        let lastAnimation = img[img.length - 1].id;
        axios.get("/moreImages-animation/" + lastAnimation).then(function(res) {
                console.log("response get more animation: ", res);
                me.firstId = res.data.firstId[0].id;
                img = img.concat(res.data.image);
                me.lastAnimation = img[img.length - 1].id;

               var updatedList = img;
                if (me.lastAnimation === me.firstId) {
                    me.setState({
                        animation: updatedList,
                        showButton:false
                    })
                }
               
                console.log("me.lastAnimation ", me.lastAnimation,me.firstId, img, me.state.showButton)

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
            <Link to="/">Home</Link>
                <a href="http://inter-audio.de/">InterAudio</a>
                <Link to="/contact">Contact</Link>

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
            {/* <UploaderAnimation/> */}
        </div>
        {this.state.animation.length>0 &&               
              <div className="imageList">
              {
    this.state.animation.map((anima, i)=>{
 console.log('test');
 return <li key={i} data-id={anima.id} onClick={() => this.checkImgId(anima.id)}><img className="image-in-imageList"  src={anima.url} alt="" /></li>
      })
    }
      </div>
    }

      {this.state.showButton &&  
              <div className="show-more">
                <button id="show-more-button" onClick={this.getMoreAnimation}>
                        Show More
                </button>
              </div>

                }
    <Footer/>
  </div>
   );
 }
}

