import React from "react";
import "../Styles/HomeScreen.css";
import bg from "../Assets/home_bg.png";
import { List, Card, Avatar } from "antd";
import { WhatsAppOutlined,PhoneOutlined } from "@ant-design/icons";
import {orders,services} from '../Data/Services.js';
import ReactWhatsapp from 'react-whatsapp';

const { Meta } = Card;

const Home = () => {
  const data = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 5",
    },
    {
      title: "Title 6",
    },
  ];
  console.log("orders--->",orders);
  console.log("services--->",services);
  return (
    <div
      style={{
        backgroundImage: "url(" + bg + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ padding: 30, }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="welcomeText" style={{ color: "#FFFFFF", paddingTop: "2%", marginTop: "5%" }}>
            {`Hello , welcome back. `}
          </div>
        </div>
        <List
          style={{marginTop:'5%'}}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 3,
          }}
          dataSource={services}
          renderItem={(item) => (
            <List.Item>
              <Card
               hoverable
                cover={
                  <img alt={item.title} src={item.logo}  />
                }
                actions={[
                  <PhoneOutlined />,
                  // <WhatsAppOutlined twoToneColor="#eb2f96" />,
                  <ReactWhatsapp number="+917277979612" message={`Hi, Please provide More info about ${item.title} services!`} element="icon"> <WhatsAppOutlined twoToneColor="#eb2f96" /></ReactWhatsapp>
                ]}
              >
                <Meta
                  title={item.title}
                  description={item.description}
                />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Home;
