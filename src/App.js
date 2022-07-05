import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route} from "react-router";
import ListaUtentiComponent from "./components/ListaUtentiComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" element = {<ListaUtentiComponent/>}/>
              <Route path="/utenti" element = {<ListaUtentiComponent/>}/>
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
