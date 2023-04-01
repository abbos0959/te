import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Orders() {
   const [loading, setLoading] = useState(false);
   const [dataSource, setDataSource] = useState([]);
   const { user } = useSelector((state) => state.auth);

   const AllData = async () => {
      const config = {
         headers: {
            Authorization: `Bearer ${user.token}`,
         },
      };

      const data = await axios.get(`https://toko.ox-sys.com/variations`, config);
      setDataSource(data?.data?.items);
   };

   useEffect(() => {
      AllData();
   });

   return (
      <Space size={20} direction="vertical">
         <Typography.Title level={4}>All Data</Typography.Title>
         {user?.token ? (
            <Table
               style={{ width: "1000px" }}
               loading={loading}
               columns={[
                  {
                     title: "name",
                     dataIndex: "name",
                  },
                  {
                     title: "productName",
                     dataIndex: "productName",
                     render: (value) => <span>${value}</span>,
                  },
                  {
                     title: "supplier",
                     dataIndex: "supplier",
                     render: (value) => <span>${value}</span>,
                  },
                  {
                     title: "unit",
                     dataIndex: "unit",
                  },
                  {
                     title: "description",
                     dataIndex: "description",
                  },
               ]}
               dataSource={dataSource}
               pagination={{
                  pageSize: 5,
               }}
            ></Table>
         ) : (
            <h2>Iltimos avval tizimga kiring</h2>
         )}
      </Space>
   );
}
export default Orders;
