import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage';
import CaseStudy from './pages/wiscon-products-case-study';
import TestPage from './pages/testpage';


function App() {
  return (
    <div >
      
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/case-study" component={CaseStudy}/>
        <Route exact path="/test" component={TestPage}/>
      </Switch>

    </div>
  );
}

export default App;
