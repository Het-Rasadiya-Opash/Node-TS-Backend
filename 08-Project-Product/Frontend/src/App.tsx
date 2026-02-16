import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { UserProvider } from "./context/UserContext";
import CreateProduct from "./components/CreateProduct";

const App = () => {
  return (
    <UserProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateProduct/>} />
      </Routes>
    </UserProvider>
  );
};

export default App;
