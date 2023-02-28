import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
    </div>
  );
}
