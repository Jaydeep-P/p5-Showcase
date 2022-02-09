import { useRouter } from 'next/router'
// import { getStaticProps } from '..';
import sketchData from '../../public/sketchData.json'


export function getStaticProps(context){
    var currSketch = null;
    sketchData.forEach(obj => {
        if(obj.sketchName==context.params.name){
            currSketch = obj;
            return;
        }
    });
    return {
        props:{
            currSketch
        },   
    };
}
export async function getStaticPaths() {
    var paths = []
    for(var i=0;i<sketchData.length;i++){
        paths.push(
            {
                params:{
                    name:sketchData[i].sketchName,
                }
            }
        )
    }
    return {
      paths,
      fallback: false // See the "fallback" section below
    };
  }
  

const Sketch = ({currSketch}) => {

    if(currSketch==null) currSketch = {code:(process.env.ghpages?process.env.ghpath:"")+'/sketchCode/dela.js'}

    return ( 
        <div className="sketch">
            <iframe className="p5frame"frameBorder="0" srcDoc= {`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>
                <style>
                    html, body {
                        margin: 0;
                        padding: 0;
                        height: 100vh;
                        width: 100vw;
                        display:flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    canvas {
                        display: block;
                    }
                </style>                      
                <meta charset="utf-8" />
            
                </head>
                <body>
                <script src=${(process.env.ghpages?process.env.ghpath:"")+currSketch.code}></script>
                </body>
            </html> `}></iframe>
        </div>
     );
}
 
export default Sketch;