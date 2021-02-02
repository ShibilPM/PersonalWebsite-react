import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="main">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
