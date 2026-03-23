import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Recommendations from "./pages/Recommendations";

function App() {

  return (

    <Router>

      <Routes>

        <Route path="/register" element={<Register />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/test" element={<Test />} />
        <Route path = "/recommendations" element={<Recommendations />} />
      </Routes>

    </Router>

  );

}

export default App;