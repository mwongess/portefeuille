import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header/Header";
import { Landing } from "./components/Landing/Landing";
import { Projects } from "./components/Projects/Projects";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main">
                <Header />
                <Landing />
              </div>
              <Projects />
            </>

          }
        />
      </Routes>
    </>
  );
}

export default App;
