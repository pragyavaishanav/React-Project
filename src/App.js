import './App.css';
import Homepage from './pages/homepage';
import CaseStudy from './pages/wiscon-products-case-study';
import { Switch, Route } from 'react-router-dom';
import ContactUS from './pages/contactUs'

function App() {
  return (
    <div >
      
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/wiscon-products-case-study" component={CaseStudy}/>
        <Route exact path="/contact-us" component={ContactUS}/>
      </Switch>

    </div>
  );
}

export default App;
