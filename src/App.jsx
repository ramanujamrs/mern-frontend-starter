import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowVendor from "./pages/ShowVendor";
import CreateVendors from "./pages/CreateVendors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vendors/create" element={<CreateVendors />} />
      <Route path="/vendors/show/:id" element={<ShowVendor />} />
    </Routes>
  );
}

export default App;
