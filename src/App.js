import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage';
import CaseStudy from './pages/wiscon-products-case-study';
import TestPage from './pages/testpage';
import ContactPage from './pages/contactpage'


function App() {
  return (
    <div >
      
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/case-study" component={CaseStudy}/>
        <Route exact path="/test" component={TestPage}/>
        <Route exact path="/contact-us" component={ContactPage}/ >
      </Switch>

    </div>
  );
}

export default App;
