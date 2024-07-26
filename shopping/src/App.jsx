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
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductInfo from "./Pages/ProductInfo";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
