import { TProperty } from "@/constants/property";
import Image from "next/image";

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
    ratings,
    status,
    toilet,
  } = property;
  return (
    <div className="border-b border-gray pb-5 mx-auto  w-[380px]">
      <Image
        className="mx-auto"
        alt="image"
        src={property.image}
        width={380}
        height={220}
      />
    </div>
  );
};

export default PropertyCard;
