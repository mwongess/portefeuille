import { Routes,Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Landing } from "./components/Landing/Landing";
function App() {
  return (
    <>
     <div className="main">
          <Header />
          <Landing />
        </div>
      <Routes>
        <Route />
       
      </Routes>
    </>
  );
}

export default App;
