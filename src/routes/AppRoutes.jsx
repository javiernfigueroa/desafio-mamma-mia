import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";

function AppRoutes() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("/pizzas.json")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error loading pizzas", error));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza/:id" element={<Detail pizzas={pizzas} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
