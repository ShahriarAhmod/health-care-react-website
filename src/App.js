
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from './Context/AuthProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import SingleService from './components/SingleService/SingleService';
import Contact from "./components/Contact/Contact";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import About from "./components/About/About";



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/home" >
              <Home />
            </Route>
            <Route path="/services" >
              <Services />
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <SingleService />
            </PrivateRoute>
            <Route path="/about" >
              <About />
            </Route>
            <Route path="/contact" >
              <Contact />
            </Route>
            <Route path="/signup" >
              <SignUp />
            </Route>
            <Route path="/login" >
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
      </div>
  );
}

export default App;
