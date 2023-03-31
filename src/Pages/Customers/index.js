import { Avatar, Input, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../Api";
import { useSelector } from "react-redux";

function Customers() {
   const [loading, setLoading] = useState(false);
   const [dataSource, setDataSource] = useState([]);
   const { user } = useSelector((state) => state.auth);

   useEffect(() => {
      setLoading(true);
      getCustomers().then((res) => {
         setDataSource(res.users);
         setLoading(false);
      });
   }, []);

   return (
      <Space size={0} direction="vertical ">
         <Input
            style={{
               width: 500,
               height: 40,
               borderRadius: "none",
               outline: "none",
               marginTop: "10px",
            }}
            placeholder="search"
         ></Input>

         <Typography.Title level={6}>Search Data </Typography.Title>
         {user?.token ? (
            <Table
               loading={loading}
               columns={[
                  {
                     title: "Photo",
                     dataIndex: "image",
                     render: (link) => {
                        return <Avatar src={link} />;
                     },
                  },
                  {
                     title: "First Name",
                     dataIndex: "firstName",
                  },
                  {
                     title: "LastName",
                     dataIndex: "lastName",
                  },
                  {
                     title: "Email",
                     dataIndex: "email",
                  },
                  {
                     title: "Phone",
                     dataIndex: "phone",
                  },

                  {
                     title: "address",
                     dataIndex: "address",
                     render: (address) => {
                        return (
                           <span>
                              {address.address}, {address.city}
                           </span>
                        );
                     },
                  },
               ]}
               dataSource={dataSource}
               pagination={{
                  pageSize: 5,
               }}
            ></Table>
         ) : (
            <h2>Iltimos Avvsl tizimga kiring</h2>
         )}
      </Space>
   );
}
export default Customers;
