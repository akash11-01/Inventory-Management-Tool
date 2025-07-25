import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Addproduct from "./components/Addproduct";
import GetProductList from "./components/GetProductList";
import UpdateQuantity from "./components/UpdateQuantity";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<GetProductList />} />
          <Route path="add" element={<Addproduct />} />
          <Route path="list" element={<GetProductList />} />
          <Route path="update" element={<UpdateQuantity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
