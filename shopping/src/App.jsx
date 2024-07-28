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
import AddProduct from "./Pages/AddProduct";
import UpdateProduct from "./Pages/UpdateProduct";
import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <MyState>
      <Router>
        {/* <ToastContainer> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
          } />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
        </Routes>
        {/* </ToastContainer> */}
      </Router>
    </MyState>
  );
}
export default App;
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'rida.bsse3962@iiu.edu.pk') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}