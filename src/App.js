import "./App.css";
import Menu from "./components/menu/Menu";
import Title from "./components/title/Title"
import Main from "./components/main/Main";
import About from "./components/about/About"
import Focus from "./components/focus/Focus";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Menu />
      <Title />
      <Main />
      <About />
      <Focus />
      <Projects />
    </div>
  );
}

export default App;
