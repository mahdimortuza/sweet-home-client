"use client";
import { TProperty } from "@/constants/property";
import { useComparisonStore } from "@/store/comparison-store";
import { PlusOutlined, StarOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const SHActionButton = ({ property }: { property: TProperty }) => {
  const addToStore = useComparisonStore((state) => state.addToStore);

  const handleAddWishlist = (property: TProperty) => {};

  const handleAddComparison = (property: TProperty) => {
    addToStore(property);
  };
  return (
    <div className="flex gap-4 text-2xl ml-auto bg-slate-50 px-4 py-1 rounded-l opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <Tooltip title="Add wishlist">
        <StarOutlined
          onClick={() => handleAddWishlist(property)}
          className="hover:text-orange-300 transition duration-300"
        />
      </Tooltip>
      <Tooltip title="Compare">
        <PlusOutlined
          onClick={() => handleAddComparison(property)}
          className="hover:text-red-300 transition duration-300"
        />
      </Tooltip>
    </div>
  );
};

export default SHActionButton;
