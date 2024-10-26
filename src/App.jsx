import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/reg" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
