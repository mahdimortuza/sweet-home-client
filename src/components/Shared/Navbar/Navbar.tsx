"use client";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    label: "Home",
    link: "/",
    key: "home",
  },
  {
    label: "Contact",
    link: "/",
    key: "contact",
  },
  {
    label: "About",
    link: "/",
    key: "about",
  },
  {
    label: "Login",
    link: "/",
    key: "login",
  },
];
const Navbar = () => {
  return (
    <Layout style={{ height: "65px" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <div className="demo-logo">Logo</div>
        <Menu
          // theme="white"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ flex: 1, minWidth: 0 }}
        >
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
          <Menu.Item key="login">Login</Menu.Item>{" "}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
