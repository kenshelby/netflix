import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Protected from "./components/Protected";

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace></Navigate>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/browse" element={<Protected><Browse /></Protected>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)