import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Pages/Home';
import Order from './Pages/Order';
import Cart from './Pages/Cart';
import Dashboard from './Pages/Admin_dashboard/Dashboard';
import NoPage from './Pages/NoPage';
import MyState from "./Context/myState";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
