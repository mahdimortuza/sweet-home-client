"use client";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import { useState } from "react";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <div className="menuIcon h-[60px] pl-3 pt-3 ">
        <MenuOutlined
          className=" text-white text-2xl"
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <span className="headerMenu">
        <NavMenu />
      </span>
      <Drawer
        placement="left"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
      >
        <NavMenu isInline />
      </Drawer>
    </div>
  );
};

function NavMenu({ isInline = false }) {
  return (
    <Menu
      style={{ fontSize: 16, border: "none" }}
      className=" font-[500]"
      mode={isInline ? "inline" : "horizontal"}
      items={[
        {
          label: "Home",
          key: "home",
        },
        {
          label: "Contact US",
          key: "contact",
        },
        {
          label: "About US",
          key: "about",
        },
        {
          label: "Login",
          key: "login",
        },
      ]}
    ></Menu>
  );
}

export default Navbar;
