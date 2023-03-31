import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setlogout } from "../../redux/authslice";

function AppHeader() {
   useEffect(() => {}, []);
   const LogoutUser = () => {
      dispatch(setlogout());
   };

   const { user } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   return (
      <div className="AppHeader">
         <Typography.Title> Dashboard</Typography.Title>

         <div style={{marginRight:"30px"}}>
            {" "}
            {user?.token ? (
               <Link onClick={LogoutUser} to={"/login"} style={{ textDecoration: "none" }}>
                  Chiqish
               </Link>
            ) : (
               <Link to={"/login"} style={{ textDecoration: "none" }}>
                  Login
               </Link>
            )}
         </div>
      </div>
   );
}
export default AppHeader;
