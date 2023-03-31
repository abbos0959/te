import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";

import Orders from "../../Pages/Orders";
import Login from "../../Pages/Login/Login";

function AppRoutes() {
   return (
      <Routes>
         <Route path="/orders" element={<Orders />}></Route>
         <Route path="/customers" element={<Customers />}></Route>
         <Route path="/login" element={<Login />}></Route>
      </Routes>
   );
}
export default AppRoutes;
