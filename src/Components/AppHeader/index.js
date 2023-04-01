import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setlogout } from "../../redux/authslice";
import { Button } from "antd";

function AppHeader() {
   useEffect(() => {}, []);
   const LogoutUser = () => {
      dispatch(setlogout());
   };

   const { user } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   return (
      <div className="AppHeader">
         <Typography.Title style={{ cursor: "pointer", textDecoration: "none" }}>
            {" "}
            <Link to={"/customers"}>OKS Dashboard</Link>
         </Typography.Title>

         <div style={{ marginRight: "30px" }}>
            {user?.token ? (
               <Link
                  onClick={LogoutUser}
                  to={"/login"}
                  style={{
                     textDecoration: "none",
                     borderRadius: "10px",
                     padding: "10px",
                     backgroundColor: "#FF0000",
                     color: "white",
                     fontWeight: "bold",
                  }}
               >
                  Chiqish
               </Link>
            ) : (
               <Link
                  to={"/login"}
                  style={{
                     textDecoration: "none",
                     borderRadius: "10px",
                     padding: "10px",
                     backgroundColor: "#0000FF",
                     color: "white",
                     fontWeight: "bold",
                  }}
               >
                  Login
               </Link>
            )}
         </div>
      </div>
   );
}
export default AppHeader;
