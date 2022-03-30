import logo from './logo.svg';
import './App.css';
import Logo from './components/LogoHeader'
import { BrowserRouter as Router} from 'react-router-dom';
import LogoHeader from './components/LogoHeader';

function App() {
  return (
    <Router>
      <Logo/>
    </Router>
  );
}

export default App;
