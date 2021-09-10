import "./App.css";
import Header from "./comps/Header";
import BBsMain from "./comps/MainNav";
import MainNav from "./comps/BBsMain";
import BBsDetail from "./comps/BBsDetail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainNav />
        <section>
          <Switch>
            <Route exact path="/" component={BBsMain} />
            <Route exact path="/write" component={BBsDetail} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
