import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <div className="Navbar" >
            <div className="Name">
                <img src= {(process.env.ghpages?process.env.ghpath:"")+'/images/p5js.svg'} />
            </div>
            <div className='rightSide'>
                <div className="Home">
                    <Link href='/'>
                        <a>
                            Home
                        </a>
                    </Link>
                </div>
                <div className="About">
                    <Link href={(process.env.ghpages?process.env.ghpath:"")+'/about'}>
                        <a>
                            About
                        </a>
                    </Link>
                </div>
            </div>
        </div> 
        
    );
}
 
export default Navbar;