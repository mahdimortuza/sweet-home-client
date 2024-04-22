import { Button, Flex, Image, Typography } from "antd";
import Link from "next/link";
import React from "react";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const sliderData = [
  {
    image:
      "https://raw.githubusercontent.com/mahdimortuza/sweet-home-assets/main/imgs/exh3.jpg",
    text: "We are here to find you the best property of your dream",
  },
  {
    image:
      "https://raw.githubusercontent.com/mahdimortuza/sweet-home-assets/main/imgs/exh10.jpg",
    text: "We are here to find you the best property of your dream",
  },
  {
    image:
      "https://raw.githubusercontent.com/mahdimortuza/sweet-home-assets/main/imgs/exh26.jpg",
    text: "We are here to find you the best property of your dream",
  },
];
const HeroSection = () => {
  return (
    <div className="my-10">
      <Flex justify="space-between" wrap="wrap" gap="small" align="center">
        <Flex vertical>
          <Typography>
            <span className="text-3xl font-medium">Looking for yor</span>
            <span className="text-4xl font-semibold"> Dream property?</span>
          </Typography>
          <Typography style={{ marginTop: "15px" }}>
            <span className=" text-2xl font-medium">
              We are here to find you the best <br /> property of your dream.
            </span>
          </Typography>

          <Flex gap={10} style={{ marginTop: "30px" }}>
            <Link href="/properties">
              <Button type="primary">See all</Button>
            </Link>
            <Link href="/">
              <Button>Contact us</Button>
            </Link>
          </Flex>
        </Flex>
        <Image
          className=" rounded-lg"
          src="https://raw.githubusercontent.com/mahdimortuza/sweet-home-assets/main/imgs/exh3.jpg"
          alt="img"
          width={600}
          height={"auto"}
        />
      </Flex>
    </div>
  );
};

export default HeroSection;
