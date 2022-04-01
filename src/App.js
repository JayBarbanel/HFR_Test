
import './App.css';
import Logo from './components/LogoHeader'
import Head from './components/Header'
import Honest from './components/Honesty'
import Attention from './components/Attention'
import About from './components/About'
import Transparent from './components/Transparent'
import Partners from './components/Partners'

import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Head/>
      <Logo/>
      <About/>
      <Honest/>
      <Attention/>
      <Transparent/>
      <Partners/>
    </Router>
  );
}

export default App;
