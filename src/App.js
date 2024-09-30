import Counter from "./components/Counter";
import BasicExample from "./components/Example";
import Todo from "./components/Todo";
import ToggleTheme from "./components/ToggleTheme";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import NavbarComponent from "./components/Navbar";
import Cards from "./components/cards/Cards";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/toggle" element={<ToggleTheme />} />
      </Routes>
    </div>
  );
}

export default App;
