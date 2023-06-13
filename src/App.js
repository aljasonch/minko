import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Cart from "./Module/Shopping";
import Home from "./Module/Home";
import Login from "./Module/Login";
import { useState, useEffect } from "react";
import ModalTrue from "./Components/Modal/true";
import ModalWrong from "./Components/Modal/Wrong";
import "./App.css";
import Footer from "./Components/Footer";
import About from "./Module/About";
import ChairProduct from "./Module/ProductComponents/ChairProduct";
import TableProduct from "./Module/ProductComponents/TableProduct";
import LampProduct from "./Module/ProductComponents/LampProduct";
import MirrorProduct from "./Module/ProductComponents/MirrorProduct";
import BedProduct from "./Module/ProductComponents/BedProduct";
import Contacts from "./Module/Contact";
import { ClimbingBoxLoader } from "react-spinners";

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [showDialogPassword, setshowDialogPassword] = useState(true);
  const [showDialogSuccessfull, setshowDialogSuccessfull] = useState(false);
  const [userGoogle, setUserGoogle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleLogin = (username) => {
    setUsername(username);
    if (username === "jason") {
      setisLoggedIn(true);
      setshowDialogSuccessfull(true);
    } else {
      setisLoggedIn(false);
      setshowDialogPassword(false);
    }
  };

  const handleLoginGoogle = (userObject) => {
    setUsername(userObject.name);
    setisLoggedIn(true);
    setshowDialogSuccessfull(true);
    setUserGoogle(userObject.picture);
  }

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen bg-[#F3DEBA]">
        <ClimbingBoxLoader size={20} color={"#A9907E"} loading={isLoading} />
      </div>
    );
  }

  return (
    <div>
      <Router>
        <div className="fixed top-0 left-0 right-0 z-[999]">
          <Header picture={userGoogle} username={username} isLoggedIn={isLoggedIn} />
        </div>
        {!showDialogPassword && <ModalWrong />}
        {showDialogSuccessfull && <ModalTrue />}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login onLogin={handleLogin} onLoginGoogle={handleLoginGoogle} />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<BedProduct />} />
          <Route path="/product/chair" element={<ChairProduct />} />
          <Route path="/product/table" element={<TableProduct />} />
          <Route path="/product/lamp" element={<LampProduct />} />
          <Route path="/product/mirror" element={<MirrorProduct />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
