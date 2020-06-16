import axios from "axios"
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer'
import Header from "../../../components/header"
// import Uploader from '../../../components/uploader/uploaderCinema'
import '../../projects/style.css'



export default class ProjectsCinema extends React.Component {
    constructor(props) {
        super(props);
        this.getMoreImages = this.getMoreImages.bind(this);

        this.state = {
            images:[],
            lastImage: "",
            showButton: true
        };
    }
    
componentDidMount() {
    var me = this;
    axios.get("/images-cinema")
    .then(function(response) {
        console.log("response from images is: ", response.data);
        me.setState({
            images:response.data
        }, console.log("state is updated"));
    })
    .catch(err => console.log("err", err));
}




getMoreImages(e){
        var img = this.state.images;
        var me= this
        let lastImage = img[img.length - 1].id;
        axios.get("/moreImages-cinema/" + lastImage).then(function(res) {
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
  <Header/>
        <div className="contact-head">
            <div id="logo">
            <img src="interopa.png" alt=""/>
        </div>
            <nav className="navbar-projects">
                <Link to="/projects-cinema" id="projects-section">Cinema</Link>
                <Link to ="/projects-movies">Movies</Link>
                <Link to ="/projects-series">Series</Link>
                <Link to ="/projects-animation-cinema">Animation/Cinema</Link>
                <Link to ="/projects-animation-tv">Animation/Tv</Link>
            </nav>
            {/* <Uploader/>/ */}
        </div>

            {this.state.images.length>0 &&               
            <div className="imageList">
              {
    this.state.images.map((image, i)=>{
 return <li key={i} data-id={image.id} onClick={() => this.checkImgId(image.id)}><img className="image-in-imageList"  src={image.url} alt="" /></li>
      })
    }
    </div>}


      {this.state.showButton &&  
              <div className="show-more">
                <button id="show-more-button" onClick={this.getMoreImages}>
                        Show More
                </button>
              </div>}
        <Footer/>
  </div>
   );
 }
}
