import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import CreateProduct from "./components/CreateProduct";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
