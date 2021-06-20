import './App.css';
import Homepage from './pages/homepage';
import { Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from './pages/homepage';
import GeotechDescription from './pages/geotechnical';
import ContactPage from './pages/contactpage'


function App() {
  return (
    <div >
      
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/contact-us" component={ContactPage} />
        <Route exact path="/geotechnical-platform" component={GeotechDescription} />
      </Switch>

    </div>
  );
}

export default App;
