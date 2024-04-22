"use client";
import { TProperty } from "@/constants/property";
import { useComparisonStore } from "@/store/comparison-store";
import { CloseOutlined, RetweetOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ComparisonCart = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { store, removeFromStore, clearStore } = useComparisonStore(
    (state) => ({
      store: state.store,
      removeFromStore: state.removeFromStore,
      clearStore: state.clearStore,
    })
  );

  return (
    <div className="relative">
      <Drawer
        className="relative"
        placement="right"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={true}
      >
        {store?.map((property: TProperty) => (
          <div key={property._id} className="flex gap-5 mt-4">
            <Image src={property.image} alt="image" height={30} width={40} />
            <h1 className="text-xl">{property.title}</h1>
            <Button onClick={() => removeFromStore(property._id)}>
              <CloseOutlined />
            </Button>
          </div>
        ))}
        <div className="flex gap-4 absolute bottom-[40px]">
          {store.length > 1 && (
            <Link href="/compare">
              <Button onClick={() => setOpenMenu(!true)}>Compare</Button>
            </Link>
          )}
          <Link href="/" onClick={() => setOpenMenu(!true)}>
            {store.length > 0 && (
              <Button onClick={clearStore}>Clear All</Button>
            )}
          </Link>
        </div>
      </Drawer>

      {store.length > 0 && (
        <div
          onClick={() => {
            setOpenMenu(true);
          }}
          className="fixed z-30 cursor-pointer -right-14 top-[50%] -rotate-90 flex gap-2 items-center bg-red-400 py-2 px-4 text-white rounded-md"
        >
          <RetweetOutlined className="text-2xl" />
          <span className="text-2xl ">Compare {store.length}</span>
        </div>
      )}
    </div>
  );
};

export default ComparisonCart;
