import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import { FilterCategory } from "./pages/Categories";
import { ViewProduct } from "./pages/Products";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<FilterCategory />} />
          <Route path="/product/:id" element={<ViewProduct />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/search/:q" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
