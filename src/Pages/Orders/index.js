import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../Api";
import { useSelector } from "react-redux";

function Orders() {
   const [loading, setLoading] = useState(false);
   const [dataSource, setDataSource] = useState([]);
   const { user } = useSelector((state) => state.auth);

   useEffect(() => {
      setLoading(true);
      getOrders().then((res) => {
         setDataSource(res.products);
         setLoading(false);
      });
   }, []);

   return (
      <Space size={20} direction="vertical">
         <Typography.Title level={4}>All Data</Typography.Title>
         {user?.token ? (
            <Table
               loading={loading}
               columns={[
                  {
                     title: "Title",
                     dataIndex: "title",
                  },
                  {
                     title: "Price",
                     dataIndex: "price",
                     render: (value) => <span>${value}</span>,
                  },
                  {
                     title: "DiscountedPrice",
                     dataIndex: "discountedPrice",
                     render: (value) => <span>${value}</span>,
                  },
                  {
                     title: "Quantity",
                     dataIndex: "quantity",
                  },
                  {
                     title: "Total",
                     dataIndex: "total",
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
