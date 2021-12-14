import "./App.css";
import { BrowserRouter as Switch, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BoysGirls from "./components/Kids/BoysGirls/BoysGirls";
import ContactUs from "./components/ContactUs/ContactUs";
import Mobiles from "./containers/Electronics/Mobiles/Mobiles";
import About from "./components/About";

function App() {
  return (
    <Switch>
      <Navbar />
      <About />
      <Routes path="/contact" component={ContactUs} />
      <Routes path="/kids/boysandgirls" component={BoysGirls} />
      <Routes path="/electronics/mobiles" component={Mobiles} />
      <Routes path="/about" component={About} />
    </Switch>
  );
}

export default App;
