import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
   const location = useLocation();
   const [selectedKeys, setSelectedKeys] = useState("/");

   useEffect(() => {
      const pathName = location.pathname;
      setSelectedKeys(pathName);
   }, [location.pathname]);

   const navigate = useNavigate();
   return (
      <div className="SideMenu">
         <Menu
            className="SideMenuVertical"
            mode="vertical"
            onClick={(item) => {
               navigate(item.key);
            }}
            selectedKeys={[selectedKeys]}
            items={[
               {
                  label: "Ma'lumotlar",
                  key: "/orders",
                  icon: <ShoppingCartOutlined />,
               },
               {
                  label: "Qidiruv",
                  key: "/customers",
                  icon: <SearchOutlined />,
               },
            ]}
         ></Menu>
      </div>
   );
}
export default SideMenu;
