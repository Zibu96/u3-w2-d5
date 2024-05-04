import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <MyNav />
      <HomePage />
    </div>
  );
}

export default App;
