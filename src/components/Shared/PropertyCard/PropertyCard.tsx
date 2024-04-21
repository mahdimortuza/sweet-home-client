import SHActionButton from "@/components/UI/SHActionButton/SHActionButton";
import { TProperty } from "@/constants/property";
import { EnvironmentOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
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
  const { image: ownerImage, name: ownerName, status: ownerStatus } = owner;

  return (
    <div className="pb-2 mx-auto  w-[380px]">
      <div className="border-b border-gray pb-2 mx-auto  w-[380px]">
        {/* image and status in position */}
        <div className="relative">
          <div className="group">
            <Image
              className="mx-auto rounded-md"
              alt="image"
              src={image}
              width={380}
              height={220}
            />
            {/* for showing status and comparison */}
            <div className="absolute top-4 flex justify-between w-full ">
              <div className="bg-slate-50 px-4 py-1 rounded-r">{status}</div>

              {/* action buttons */}
              <SHActionButton property={property} />
            </div>
            {/* for showing owner information */}
            <Link href="/">
              <div className="absolute bottom-4 right-0 text-black bg-slate-50 px-4 py-1 rounded-l opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="text-base">{ownerName}</h3>
                <span className="mt-2">{ownerStatus}</span>
              </div>
            </Link>
          </div>
        </div>

        {/* info text  */}
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
