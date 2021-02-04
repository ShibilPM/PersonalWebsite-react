import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import AboutPage from "./pages/aboutPage/aboutPage.component";
import ContactPage from "./pages/contactPage/contactPage.component";

function App() {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
