import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import HouseDetails from "./pages/HouseDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house/:id" element={<HouseDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
