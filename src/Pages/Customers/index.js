import { Avatar, Input, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Data } from "../../redux/Dataactions";

import axios from "axios";

function Customers() {
   const [loading, setLoading] = useState(false);
   const [search, SetSearch] = useState("");
   const [dataSource, setDataSource] = useState([]);
   const [filt, setfilt] = useState([]);
   const { user } = useSelector((state) => state.auth);
   const { data } = useSelector((state) => ({ ...state.data }));
   const dispatch = useDispatch();

   const FetchData = async () => {
      const config = {
         headers: {
            Authorization: `Bearer ${user.token}`,
         },
      };

      const data = await axios.get(`https://toko.ox-sys.com/variations`, config);

      setDataSource(data?.data?.items);
   };

   const handlechange = (e) => {
      SetSearch(e.target.value);
      console.log(search);
   };

   const da = dataSource.filter((item) => {
      return search.toLowerCase() == ""
         ? item
         : item.name.toLowerCase().includes(search) ||
              item.productName.toLowerCase().includes(search) ||
              item.supplier.toLowerCase().includes(search);
   });

   useEffect(() => {
      // dispatch(Data());
      FetchData();
   });

   if (dataSource == []) {
      return <h1>Loading...</h1>;
   }
   console.log(dataSource);
   return (
      <Space size={0} direction="vertical ">
         <Input
            value={search}
            onChange={handlechange}
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
               style={{ width: "1000px" }}
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
                     title: "Name",
                     dataIndex: "name",
                  },
                  {
                     title: "Product Name",
                     dataIndex: "productName",
                  },
                  {
                     title: "supplier",
                     dataIndex: "supplier",
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
               dataSource={da}
               pagination={{
                  pageSize: 5,
               }}
            ></Table>
         ) : (
            <h2>Iltimos Avval tizimga kiring</h2>
         )}
      </Space>
   );
}
export default Customers;
