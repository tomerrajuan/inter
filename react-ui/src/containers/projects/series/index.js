import axios from "axios"
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer'
import Header from "../../../components/header"
// import UploaderSeries from '../../../components/uploader/uploaderSeries'
import '../../projects/style.css'

export default class ProjectsSeries extends React.Component {
    constructor(props) {
        super(props);
        this.getMoreSeries = this.getMoreSeries.bind(this);
        this.state = {
            series:[],
            lastSerie: "",
            showButton: false
        };
    }
 
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
        let lastSerie = img[img.length - 1].id;

        if(img<=11){
            me.setState({
                showButton:false
            })
        }

        axios.get("/moreImages-series/" + lastSerie).then(function(res) {
            
            if(img>=11){
                me.setState({
                    showButton:true
                })
            }
       
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
            <img id="logo-projects" src="interopa.png" alt=""/>

            </div>
            <nav className="navbar-projects">
            <Link to="/projects-cinema">Cinema</Link>
                <Link to ="/projects-movies">Movies</Link>
                <Link to ="/projects-series" id="projects-section">Series</Link>
                <Link to ="/projects-animation-cinema">Animation/Cinema</Link>
                <Link to ="/projects-animation-tv">Animation/Tv</Link>
            </nav>
            {/* <UploaderSeries/> */}
        </div>
        {this.state.series.length>0 &&               

              <div className="imageList">
              { this.state.series.map((serie, i)=>{
    console.log('test');
    return <li key={i} data-id={serie.id} onClick={() => this.checkImgId(serie.id)}><img className="image-in-imageList"  src={serie.url} alt="" /></li>
})
   }
      </div>
   }

      {this.state.showButton &&  
              <div className="show-more">
                <button id="show-more-button" onClick={this.getMoreSeries}>
                        Show More
                </button>
              </div>
                }
    <Footer/>
  </div>
   );
 }
}

