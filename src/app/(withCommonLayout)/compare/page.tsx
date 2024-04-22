"use client";
import { TProperty } from "@/constants/property";
import { useComparisonStore } from "@/store/comparison-store";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import Link from "next/link";

const ComparisonPage = () => {
  const store = useComparisonStore((state) => state.store);

  return (
    <>
      {store.length === 0 ? (
        <div>
          Please return{" "}
          <Link className="text-xl font-bold text-blue-500" href="/">
            Home
          </Link>{" "}
          and add properties for comparison!
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {store.slice(0, 4).map((property: TProperty) => (
            <Col
              key={property._id}
              className="gutter-row"
              xs={24}
              sm={12}
              md={8}
              lg={6}
            >
              <div>
                <div>
                  <Image
                    alt="image"
                    src={property.image}
                    width={300}
                    height={200}
                  />
                  <div className="flex justify-between">
                    <span>
                      <EnvironmentOutlined />
                      {property.location}
                    </span>
                    <span>Review: {property.ratings}</span>
                  </div>
                  <h1>Title: {property.title}</h1>
                  <span>Category: {property.category}</span>

                  <p>About: {property.description}</p>
                  <video width="320" height="240" controls preload="none">
                    <source
                      src="https://www.youtube.com/watch?v=RWXiF91G6xo"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default ComparisonPage;
