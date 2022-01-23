const About = () => {
    return ( 
        <div className="container">
            <h1>Showcase for p5 sketches</h1>

            <p>
                This website was made to show the sketches with a preview image, this is much more impressive than the stock p5js<a href="https://editor.p5js.org/mcpe071202/sketches" target="_blank" rel="noreferrer"> sketch list.</a>
                <br/><br/>
                To add new sketches, you only need to edit the sketchData.json file in the root folder. 
                This static file could be replaced with a request to any database. The code for this website is available on my
                <a href="https://github.com/Jaydeep-P/p5-Showcase" target="_blank" rel="noreferrer"> Github</a> 
                <br/><br/>
                I made this website as a successor to my old website that was made using plain HTML and CSS. I have used NextJs for this website, primary reason for doing so was to automate the page generation (Which I had to do by hand on the older version).
                <br/>
                This is also my first ever project using NextJs, please forgive me for any bad practices.
            </p>
            
            <style jsx>{`
                .container{
                }
                h1{
                    color: #dfdfdf;
                    text-align:center;
                    font-size:4vh;
                    margin:2vw;
                }
                p{
                    color: #dfdfdf;
                    width:70%;
                    margin: 5% 15%;
                    text-align:left;
                    font-size:2.7vh;
                }
                p a {
                    color: #4078c0
                }

                @media only screen and (max-width: 600px) {
                    h1{
                        font-size: 5vw;
                    }
                    p{
                        font-size:3.5vw;
                    }
                }
            `}</style>
        </div>
     );
}
 
export default About;