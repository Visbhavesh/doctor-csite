import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Empty from "./Pages/Empty/Empty";



import Services from "./Pages/Services/Services";
import About from "./Pages/Home/About/About";
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import Appointment from "./Pages/Appointment/Appointment";
import Success from "./Pages/Success/Success";

function App() {
  return (
    <div className="App">
    
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
           
           
            <Route path="/services">
              <Services></Services>
            </Route>
          
            <Route exact path="/appointment">
              <Appointment></Appointment>
            </Route>
           
            <Route path="*">
              <Empty></Empty>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
     
    </div>
  );
}

export default App;
