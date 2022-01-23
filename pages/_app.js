import Navbar from '../src/Navbar'
import '../styles/globals.css'
import "../styles/Navbar.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className='mainBody'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
