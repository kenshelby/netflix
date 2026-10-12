import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Login from "./components/Login";
import Browse from "./components/Browse";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace></Navigate>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/browse" element={<Browse />}></Route>
    </Routes>
  </BrowserRouter>
)