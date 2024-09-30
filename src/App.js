import Counter from "./components/Counter";
import BasicExample from "./components/Example";
import Todo from "./components/Todo";
import ToggleTheme from "./components/ToggleTheme";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import NavbarComponent from "./components/Navbar";
import Cards from "./components/cards/Cards";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (

    <div>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element = {<Counter/>} />
        <Route path="/todoapp" element={<Todo />} />
        <Route path="/basicexample" element={<BasicExample />} />
        <Route path="/toggle" element={<ToggleTheme />} />
        <Route path="/example" element={<BasicExample/>} />
      </Routes>
    </div>
  );
}
export default App;
