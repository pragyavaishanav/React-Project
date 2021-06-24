import './App.css';
import Homepage from './pages/homepage';
import { Switch, Route, Link } from 'react-router-dom';
import GeotechDescription, { GeotechInstallPage, CrackLensPage, LoraDevicesPage, DigitalTwinPage, ConstructionSurveyPage } from './pages/geotechnical';
import ContactPage from './pages/contactpage'
import LoginPage from './pages/LoginPage'
import AboutUsPage from './pages/aboutuspage';



function App() {

  const noRoute = ()=>{
    return(
    <div class="h-screen w-screen bg-gray-100 flex items-center">
	<div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   		<div class="max-w-md">
      		<div class="text-5xl font-dark font-bold">404</div>
            <p
              class="text-2xl md:text-3xl font-light leading-normal"
            >Sorry we couldn't find this page. </p>
          <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>          
          <Link to="/">
            <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back to homepage</button>
          </Link>
    </div>
      <div class="max-w-lg">
    </div>
    
  </div>
</div>
    )
  }

  return (
    <div >
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/contact-us" component={ContactPage} />
        <Route exact path="/geotechnical-platform" component={GeotechDescription} />
        <Route exact path="/geotechnical-installation" component={GeotechInstallPage} />
        <Route exact path="/crack-lens" component={CrackLensPage} />
        <Route exact path="/lora-devices" component={LoraDevicesPage} />
        <Route exact path="/digital-twin" component={DigitalTwinPage} />
        <Route exact path="/construction-survey" component={ConstructionSurveyPage} />
        <Route exact path="/about-us" component={AboutUsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={noRoute} />

      </Switch>

    </div>
  );
}

export default App;
