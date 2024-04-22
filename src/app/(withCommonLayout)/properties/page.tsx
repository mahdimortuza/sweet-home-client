import PropertyCard from "@/components/Shared/PropertyCard/PropertyCard";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import { TProperty } from "@/constants/property";
import { Col, Row } from "antd";

const ProductsPage = async () => {
  const res = await fetch(`${process.env.BASE_API}/properties`);
  const result = await res.json();
  const { data: properties } = result;

  return (
    <>
      <SectionTitle
        title="See our available all"
        main="real estate properties"
      />
      <Row
        gutter={{ xs: 8, sm: 8, md: 8, lg: 16 }}
        align="middle"
        justify="center"
      >
        {properties?.map((property: TProperty) => (
          <Col
            key={property._id}
            className="gutter-row"
            xs={24}
            sm={16}
            md={12}
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

export default ProductsPage;
