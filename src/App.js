import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import AboutPage from "./pages/aboutPage/aboutPage.component";

function App() {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
