// const { Title } = Typography;

import { Button, Card, Space } from "antd";

export default function Home() {
  return (
    <main>
      <Space direction="vertical" size={16}>
        <Card title="DEfault card">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        <Card
          size="small"
          title="Small size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
      <Button type="primary">Hi</Button>
    </main>
  );
}
