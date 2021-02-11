import './App.css'
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>            {/*wrap the entire section in router first this is what displays the components*/ }
    <div className="app">
      <Header />
      <Switch>          {/* the components you want to render at a time*/}
      <Route path='/checkout'>
      <Checkout />
      </Route>

      <Route path='/fuck'>
      <h1> what the fuck are you doing here its top secret </h1>
      </Route>

      <Route path='/'>  {/*this is the  route path ie where the are the components basically the location the link*/}
      <Home />
    </Route>


    </Switch>
    </div>
    </Router>
  );
}

export default App;
