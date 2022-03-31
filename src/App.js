
import './App.css';
import Logo from './components/LogoHeader'
import Head from './components/Header'
import Honest from './components/Honesty'
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Head/>
      <Logo/>
      <Honest/>
    </Router>
  );
}

export default App;
