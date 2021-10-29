import React from "react"
import whatup from '../whatup.PNG'
import youtube from '../youtube.PNG'
import lucking from '../lucking.PNG'
import ega from '../ega.PNG'
function Myprojects() {
    return (
        <div id="projects" className="myproject">
            <h1>MY WEB PROJECTS</h1>



            <div className="portfolio-container">
                <div className="portfolio-image">
                <img src={whatup} />
                </div>
                <div className="portfolio-details">
                <h3>WHATUP CLONE</h3>
                <p>A Platform designer to Chat between friends and family , using Firebase to store Messages and also you can create your own group and access it with your Google account</p>
                <p>Design by <span>HAMDAOUI NOUR EDDINE</span> .</p>
                <div className="portfolio-buttons">
                    <a href="#" className="preview-button">Preview</a>
                    <a href="https://hamdaoui1988.github.io/whatup-clone/" target="_blank" className="visitsite-button">Visit Site</a>
                </div>
                </div>
            </div>

            <div className="portfolio-container">
                <div className="portfolio-image">
                <img src={youtube} />
                </div>
                <div className="portfolio-details">
                <h3>YOUTUBE CLONE</h3>
                <p>A Platform designed to watch videos . it's just a testing web app , but beautifully made , using React and other tools</p>
                <p>Design by <span>HAMDAOUI NOUR EDDINE</span> .</p>
                <div className="portfolio-buttons">
                    <a href="#" className="preview-button">Preview</a>
                    <a href="https://hamdaoui1988.github.io/youtube-clone/" target="_blank" className="visitsite-button">Visit Site</a>
                </div>
                </div>
            </div>

            

            <div className="portfolio-container">
                <div className="portfolio-image">
                <img src={ega} />
                </div>
                <div className="portfolio-details">
                <h3>EGA LEATHERCRAFT</h3>
                <p>inspired By STARBUCKS , Lucking Coffee is a well-known handcraft e-commerce shop . this website was build for AZZEDIN EL GMAIRI . check it out for pure leather goods </p>
                <p>Design by <span>HAMDAOUI NOUR EDDINE</span> .</p>
                <div className="portfolio-buttons">
                    <a href="#" className="preview-button">Preview</a>
                    <a href="https://hamdaoui1988.github.io/ega_leathercraft/" target="_blank" className="visitsite-button">Visit Site</a>
                </div>
                </div>
            </div>

            <div className="portfolio-container-last">
                <div className="portfolio-image">
                <img src={lucking} />
                </div>
                <div className="portfolio-details">
                <h3>Lucking Coffee CLONE</h3>
                <p>inspired By STARBUCKS , Lucking Coffee is a well-known chinese brand for coffee . this was my first website that i created and the website is made with HTML and CSS</p>
                <p>Design by <span>HAMDAOUI NOUR EDDINE</span> .</p>
                <div className="portfolio-buttons">
                    <a href="#" className="preview-button">Preview</a>
                    <a href="https://aznour.000webhostapp.com/lucking-coffee/" target="_blank" className="visitsite-button">Visit Site</a>
                </div>
                </div>
            </div>





        </div>
    )
}

export default Myprojects
