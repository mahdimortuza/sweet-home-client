import PropertyCard from "@/components/Shared/PropertyCard/PropertyCard";
import { TProperty } from "@/constants/property";
import { Col, Row } from "antd";

const PopularPropertySection = async () => {
  const res = await fetch(`${process.env.BASE_API}/properties`);
  const result = await res.json();
  const { data: properties } = result;
  return (
    <>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        align="middle"
        justify="center"
      >
        {properties?.map((property: TProperty) => (
          <Col
            key={property._id}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={8}
            style={{ marginBottom: 30 }}
          >
            <PropertyCard property={property} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PopularPropertySection;
