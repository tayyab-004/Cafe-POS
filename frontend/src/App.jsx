import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Auth, Orders, Tables } from "./pages";
import Headers from "./components/shared/Headers";

function App() {
  return (
    <>
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
