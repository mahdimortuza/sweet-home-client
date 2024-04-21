import { TProperty } from "@/constants/property";
import { EnvironmentOutlined } from "@ant-design/icons";
import Image from "next/image";
import { PiBathtubThin, PiToiletThin } from "react-icons/pi";
const PropertyCard = ({ property }: { property: TProperty }) => {
  const {
    _id,
    title,
    image,
    category,
    kitchen,
    location,
    offer,
    owner,
    price,
    description,
    ratings,
    status,
    toilet,
    bath,
  } = property;
  return (
    <div className="pb-2 mx-auto  w-[380px]">
      <div className="border-b border-gray pb-2 mx-auto  w-[380px]">
        <Image
          className="mx-auto rounded-md"
          alt="image"
          src={image}
          width={380}
          height={220}
        />
        <div className="flex items-center mt-2">
          <EnvironmentOutlined />
          <span className=" ml-2">{location}</span>
        </div>

        <h1 className=" mt-1 text-2xl font-bold">{title}</h1>
        <p className="text-[#808080]">{description}</p>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <h4 className="text-xl font-semibold">
          <span className="mr-1">{price}</span>
          <span>$</span>
        </h4>

        {/* icons  */}
        <div className=" flex items-center gap-5">
          <div className="flex items-center">
            <span className="text-xl gap-2 font-thin">{bath}</span>
            <PiBathtubThin className="text-2xl" />
          </div>
          <div className="flex items-center">
            <span className="text-xl gap-2 font-thin">{toilet}</span>
            <PiToiletThin className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
