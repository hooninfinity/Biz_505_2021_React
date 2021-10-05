import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./comps/LoginForm";
import { BrowserRouter } from "react-router-dom";
import MainNav from "./comps/MainNav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <MainNav />
        <LoginForm />
      </BrowserRouter>
    </div>
  );
}

export default App;
