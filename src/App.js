import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainDisplay from "./pages/MainDisplay";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Use this API https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        />
        <Routes>
          <Route path="/" element={<MainDisplay />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
