import logo from './logo.svg';
import './App.css';
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import SearchWidget from "./components/SearchWidget/SearchWidget";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <SearchWidget />
        <Banner />
        <Footer />
    </div>
  );
}

export default App;
