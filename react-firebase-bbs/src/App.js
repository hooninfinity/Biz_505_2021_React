import "./App.css";
import Header from "./comps/Header";
import BBsMain from "./comps/MainNav";
import MainNav from "./comps/BBsMain";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <BBsMain />
        <MainNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
