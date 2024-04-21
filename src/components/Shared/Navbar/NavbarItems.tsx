import { Menu } from "antd";
import Link from "next/link";

const NavbarItems = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link href="/">Logo</Link>
        </div>

        <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
          <Menu.Item key="login">Login</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default NavbarItems;
