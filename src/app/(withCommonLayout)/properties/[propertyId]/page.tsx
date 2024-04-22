import { Image } from "antd";

interface IPropertyId {
  params: {
    propertyId: string;
  };
}

const SinglePropertyPage = async ({ params }: IPropertyId) => {
  const res = await fetch(
    `${process.env.BASE_API}/properties/${params.propertyId}`
  );
  const result = await res.json();
  const { data: property } = result;

  const {
    _id,
    title,
    image,
    optImage1,
    optImage2,
    optImage3,
    video,
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
    <div className="mx-auto py-8">
      <div className="max-w-lg">
        <Image
          src={image}
          alt={title}
          width={"auto"}
          height={"auto"}
          className="rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{title}</h1>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-800 mt-2">{price}</p>
        <p className="text-gray-800">{location}</p>
        <p className="text-gray-800">Category: {category}</p>
        <p className="text-gray-800">Kitchen: {kitchen}</p>
        <p className="text-gray-800">Toilet: {toilet}</p>
        <p className="text-gray-800">Bath: {bath}</p>
        <p className="text-gray-800">Offer: {offer}</p>
        <p className="text-gray-800">
          Owner: {owner.name} ({owner.status})
        </p>
        <p className="text-gray-800">Status: {status}</p>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Additional Images</h2>
          <div className="flex mt-2">
            {optImage1 && (
              <Image
                src={optImage1}
                alt="Optional Image 1"
                width={200}
                height={150}
                className="rounded-lg mr-2"
              />
            )}
            {optImage2 && (
              <Image
                src={optImage2}
                alt="Optional Image 2"
                width={200}
                height={150}
                className="rounded-lg mr-2"
              />
            )}
            {optImage3 && (
              <Image
                src={optImage3}
                alt="Optional Image 3"
                width={200}
                height={150}
                className="rounded-lg mr-2"
              />
            )}
          </div>
        </div>
        {video && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Video Tour</h2>
            <div className="mt-2">
              <iframe
                className="rounded-lg"
                width="auto"
                height="auto"
                src={video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePropertyPage;
