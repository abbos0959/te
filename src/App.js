import { Space } from "antd";
import "./App.css";

import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setuser } from "./redux/authslice";

function App() {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const user = JSON.parse(localStorage.getItem("profile"));

   useEffect(() => {
      dispatch(setuser(user));
      if (!user) {
         return navigate("/login");
      }
   }, [user]);

   return (
      <div className="App">
         <AppHeader />
         <div className="SideMenuAndPageContent">
            <SideMenu></SideMenu>
            <PageContent></PageContent>
         </div>
      </div>
   );
}
export default App;
