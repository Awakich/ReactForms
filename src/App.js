import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Features from "./components/Feauters/Features";
import Forms from "../src/components/Forms";

function App() {
  return (
    <div className="">
      <Header />

      <div id="features">
        <Features />
      </div>

      <div id="contacts">
        <Forms />
      </div>

      <Footer />
    </div>
  );
}

export default App;
