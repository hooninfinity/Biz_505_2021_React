import logo from "./logo.svg";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import MainComp from "./comps/MainComp";
import BackImage from "./images/header_background.jpg";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${BackImage})`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `scroll`,
    backgroundSize: "cover",
  };
  return (
    <div className="App">
      <header className="App-header" style={backgroundStyle}></header>
      <UserContextProvider>
        <MainComp />
      </UserContextProvider>
    </div>
  );
}

export default App;
