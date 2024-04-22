"use client";
import { Button, Form, Image, Input } from "antd";

const SubscribeSection = () => {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 place-items-center  ">
      <Image
        className="w-[300px] rounded-lg"
        src="https://raw.githubusercontent.com/mahdimortuza/sweet-home-assets/main/imgs/exh10.jpg"
        alt="img"
        width={"auto"}
        height={"auto"}
      />
      <div className=" w-[40ch] md:w-[50ch] ">
        <h2 className=" mt-4 md:mt-0  text-3xl font-bold text-blue-500">
          Subscribe To Our Newsletter
        </h2>
        <p className="mt-5 text-black">
          Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus
          mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra
          turpis id ac. Amet faucibus tempus.
        </p>

        <Form.Item
          style={{ marginTop: "20px" }}
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
          <Button type="primary" style={{ marginTop: "10px" }}>
            Submit
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default SubscribeSection;
