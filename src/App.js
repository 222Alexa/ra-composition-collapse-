import "./App.css";
import "./main.css";

import Collapse from "./components/Collapse";




function App() {
  return (
    <div className="App">
      <div className="body-container">
        <header className="header-wrapper">
          <h2 className="flowers-guide-title">Справочник конатных растений</h2>
        </header>
        <main className="main-container">

          <Collapse/>
        </main>
      </div>
    </div>
  );
}

export default App;

