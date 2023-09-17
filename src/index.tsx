import { createRoot } from 'react-dom/client';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';
import './css/input.css'

const App = () => {
    return (
        <div>
            <Nav />
            <Main />
            <About />
            <Services />
            <Tours />
            <Footer />
        </div>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)