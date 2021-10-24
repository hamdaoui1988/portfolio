import React, { useEffect } from "react";
import TvIcon from '@material-ui/icons/Tv';
import CodeIcon from '@material-ui/icons/Code';
import FacebookIcon from '@material-ui/icons/Facebook';
import Aos from 'aos';
import "aos/dist/aos.css";

function Services() {
    useEffect(() => {
       Aos.init({ duration: 2000 });
    }, []);
    return (
        <div id="services" className="services">
            <h3>My SERVICES</h3>





            <div className="services-wrapper">

                 <div  data-aos="fade-up" data-aos-duration="750" data-aos-delay="0"  className="services-details">
                    <div className="services-details-icon">
                       <TvIcon />
                    </div>
                
            <h5>WEB DESIGN</h5>
            <span>I create websites from scratch and adjust it to you needs, all in a short period of time</span>
                 </div>
            <div  data-aos="fade-up" data-aos-duration="750" data-aos-delay="350" className="services-details">
            <div className="services-details-icon">
            <CodeIcon />
                </div>
            
            <h5>WEB DEVELOPEMENT</h5>
            <span>I use React JS , HTML , CSS as well as other tools to make you website look perfect</span>
            </div>
            <div  data-aos="fade-up" data-aos-duration="750" data-aos-delay="700" className="services-details">
            <div className="services-details-icon">
            <FacebookIcon />  
            </div>
            
            <h5>ADVERTISING YOUR WEBSITE</h5>
            <span>I can help you archiving your website on google , More views means More income</span>
            </div>


            </div>
           

        </div>
    )
}

export default Services
