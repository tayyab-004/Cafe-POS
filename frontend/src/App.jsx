import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu } from "./pages";
import Headers from "./components/shared/Headers";

function Layout() {
  const location = useLocation();
  const hideHeaderRoutes = ["/auth"];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Headers />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
