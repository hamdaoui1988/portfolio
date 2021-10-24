import React from "react"
import devphoto from "../developing-person.jpg"
function Aboutme() {
    return (
        <div id="aboutme" className="aboutme">
           <div className="aboutme-left">
             <img src={devphoto} />
           </div>
          <div className="aboutme-right">
            <h1>About me</h1>
            <p>Hello, My name is Hamdaoui Nour Eddine , I'm a FrontEnd Developer , the Technologies i'am using are :
                HTML,CSS as well as Javascript Libraries , to be more specific , REACT JS  which i used to create this Portfolio
                i have backend background such as Firestore databases, Rest API, as well as Nosql databases, and i have several projects that are FrontEnd and Backend at the same time
                i create responsive designes that are suitable for all devices , such as phones and tablets , all i need is a ready-made
                project layout (sketch) , i can help you deploy your website , depending on your budget , advertising your website , and products
                and services that you provide for your clients </p>
         </div>
        </div>
    )
}

export default Aboutme
