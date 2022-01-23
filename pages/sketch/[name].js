import { useRouter } from 'next/router'
import sketchData from '../../public/sketchData.json'


const Sketch = () => {
    const router = useRouter();
    const { name } = router.query;
    
    var currSketch;
    sketchData.forEach(obj => {
        if(obj.sketchName==name){
            currSketch = obj;
            return;
        }
    });

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