import "./App.css";
import Header from "./comps/Header";
import Footer from "./comps/Footer";
import BucketMain from "./comps/BucketMain";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main_section">
        <BucketMain />
      </section>
      <Footer />
    </div>
  );
}

export default App;
