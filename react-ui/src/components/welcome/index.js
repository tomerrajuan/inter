import React from "react";
import Slider from "../carousel/Slider";
import "./style.css";
/**
 * @author
 * @function Welcome
 **/

const Welcome = (props) => {
  // const [header, setHeader] = useState(false);

  // useEffect(()=>{
  //     const moveHeader= setTimeout(() => {
  //         setHeader(true);
  //       }, 1000);
  // }, []);

  return (
    <section id="welcome">
      <div className="contact-head">
        <div id="logo">
          <img src="interopa.png" alt="" />
        </div>
        <div className="homepage-header">
          INTEROPA Film GmbH Synchronisationen
        </div>
      </div>
      <div>
        <h1 id="welcome-message">
          <strong>INTEROPA </strong>Film GmbH is a leading company in the world
          of <strong>Movies</strong> and <strong>TV</strong> dubbing
        </h1>
        <Slider autoPlay={6} />
      </div>
    </section>
  );
};

export default Welcome;
