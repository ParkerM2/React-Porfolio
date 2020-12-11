import React from "react";


function Portfolio() {
    return(
           
        <html>
        <title>Portfolio</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <body>
        <div class="w3-top">
        <div class="w3-bar" id="myNavbar">
            <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu" />
            <i class="fa fa-bars"></i>
            <a href="#home" class="w3-bar-item w3-button">HOME</a>
            <a href="#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
            <a href="#portfolio" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> PORTFOLIO</a>
            <a href="#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
            <i class="fa fa-search"></i>
        </div>

        <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
            <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
            <a href="#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">PORTFOLIO</a>
            <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
        </div>
        </div>
        <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
        <div class="w3-display-middle" style="white-space:nowrap;">
            <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity"> <span class="w3-hide-small">Parker</span> Manning</span> <br></br> 
            <span class="w3-hide-small w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">Full-Stack Software Developer</span>
        </div>
        </div>
        <div class="w3-content w3-container w3-padding-64" id="about">
        <h3 class="w3-center w3-text-black">About Me</h3>
        <p class="w3-center"><em>"We are what we repeatedly do. Excellence, then, is not an act, but a habit" - Aristotle</em></p>
        <p>I'm a budding Full-Stack Software Developer. I enjoy challenging my self and seeking discomfort. Some of my interest out side of programming include: Hiking, Fitness, Tech/Computer Hardware, and advancements in all fields of science. </p>
        <div class="w3-row">
            <div class="w3-col m6 w3-center w3-padding-large">
            <p><b><i class="fa fa-user w3-margin-right"></i>Parker Manning</b></p><br />
            <img src="./assets/pic.jpg" class="w3-round w3-image w3-hover-opacity-off" alt="Photo of Me" width="500" height="333" />
            </div>
            <div class="w3-col m6 w3-hide-small w3-padding-large">
            <p>Welcome to my website. I'm Parker Manning from Greenville, Ms. I hold a Bachelor of Science Degree from Mississippi State University. I spent a year working in a physical therapy out-patient clinic. During this time I began studying the basics of front-end development and grew to enjoy it. The one thing I love most about programming is the ability to learn something new everyday. I am currently attending UTA for Full-Stack Software Development. Looking to explore front-end software dev job possibilities. </p>
            </div>
        </div>
        <p class="w3-large w3-center w3-padding-16">Im really good at:</p>
        <p class="w3-wide"><i class="fa fa-laptop"></i>Web Design</p>
        <div class="w3-light-grey">
            <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:55%">55%</div>
        </div>
        <p class="w3-wide"><i class="fa fa-photo"></i>Photoshop</p>
        <div class="w3-light-grey">
            <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:30%">30%</div>
        </div>
        </div>
        <div class="w3-row w3-center w3-dark-grey w3-padding-16">
        <div class="w3-section">
            <span class="w3-xlarge">3</span><br />
            Projects Done
        </div>
        </div>
        <div class="bgimg-2 w3-display-container w3-opacity-min">
        <div class="w3-display-middle">
            <span class="w3-xxlarge w3-text-black w3-wide">PORTFOLIO</span>
        </div>
        </div>
        <div class="w3-content w3-container w3-padding-64" id="portfolio">
        <h3 class="w3-center">Projects</h3>
        <p class="w3-center"><em>Here are some of my latest projects.<br /> Click on the images to make them bigger</em></p><br />
        <div class="w3-row-padding w3-center w3-show">
            <div class="w3-col m6">
            <img src="./assets/BMI-icon.PNG" style="width:100%" onclick="onClick(this)" class="w3-padding w3-center w3-hover-opacity" alt="A BMI Calculator and Recipe Generator" />
            <button class="w3-button w3-text-black w3-hover-black"><a target="_blank" href="https://parkerm2.github.io/Commit-To-Be-Fit/">BMI Calculator <br /> & <br /> Recipe Generator</a></button>
            </div>
            <div class="w3-col m6">
            <img src="./assets/Weather-Icon.PNG" style="width:100%" onclick="onClick(this)" class="w3-center w3-padding w3-hover-opacity" alt="Weather-Dashboard" />
            <button class="w3-button w3-text-black w3-hover-black"><a target="_blank" href="https://parkerm2.github.io/Weather-App/" >Weather Dashboard</a></button>
            </div>
            <div class="w3-col m6">
            <img src="./assets/scheduler-Icon.PNG" style="width:100%" onclick="onClick(this)" class="w3-center w3-padding w3-hover-opacity" alt="My Event Scheduler App" />
            <button class="w3-button w3-text-black w3-hover-black"><a target="_blank" href="https://parkerm2.github.io/Scheduler-Homework/" >Event Scheduler</a></button>
            </div>
        </div>
        </div>


        <div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
        <span class="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i class="fa fa-remove"></i></span>
        <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
            <img id="img01" class="w3-image" />
            <p id="caption" class="w3-opacity w3-large"></p>
        </div>
        </div>


        <div class="bgimg-3 w3-display-container w3-opacity-min">
        <div class="w3-display-middle">
            <span class="w3-xxlarge w3-text-black w3-wide">CONTACT</span>
        </div>
        </div>


        <div class="w3-content w3-container w3-padding-64" id="contact">
        <h3 class="w3-center">Parker Manning</h3>
        <p class="w3-center"><em>I'd love your feedback!</em></p>

        <div class="w3-row w3-padding-32 w3-section">
            <div class="w3-col m4 w3-container">
            <img src="./assets/Em.jpg" class="w3-image w3-round" style="width:75%" />
            </div>
            <div class="w3-col m8 w3-panel">
            <div class="w3-large w3-margin-bottom">
                <i target="_blank" class="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Austin, Texas<br />
                <i class="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: 1-662-820-5854<br />
                <i class="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: ParkerLManning.com<br />
            </div>
            <p>Swing by for a cup of <i class="fa fa-coffee"></i></p>  <div class="w3-xlarge w3-section">
            <a href="https://www.facebook.com/parker.manning.1/" target="_blank"class="w3-padding w3-cyan w3-jumbo w3-round fa fa-facebook-official w3-hover-opacity"></a>
            <a href="https://www.instagram.com/parker2m/?hl=en" target="_blank" class="w3-padding w3-cyan w3-jumbo w3-round fa fa-instagram w3-hover-opacity"></a>
            <a  href="https://www.linkedin.com/in/parker-manning-223a401a9/" target="_blank" class="w3-padding w3-cyan w3-round w3-jumbo fa fa-linkedin w3-hover-opacity"></a>
        </div>
            </div>
        </div>
        </div>


        <footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-text-green">
        <a href="#home" class="w3-button w3-light-grey w3-hover-text-green"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
        </footer>
        </body>
        </html>
);
}

export default Portfolio;