
import './App.css';
import Logo from './components/LogoHeader'
import Head from './components/Header'
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Head/>
      <Logo/>
    </Router>
  );
}

export default App;
