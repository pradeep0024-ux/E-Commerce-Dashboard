import "./App.css";
import NavBar from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/pages/Product";
import Profile from "./components/pages/Profile";
import AddProduct from "./components/pages/AddProduct";
import UpdateProduct from "./components/pages/UpdateProduct";
import Footer from "./components/Footer";
import SignUp from "./components/pages/SignUp";
import PrivateRoutes from "./components/pages/PrivateRoutes";
import LogIn from "./components/pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <h1>E-Commerce-Dashboard</h1> */}
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Product />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
