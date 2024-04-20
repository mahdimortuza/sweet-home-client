// const { Title } = Typography;

import { Button, Card, Space } from "antd";

export default function Home() {
  return (
    <main>
      <Space direction="vertical" size={16}>
        <Card title="Default card">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
      <Button type="primary">Hi</Button>
    </main>
  );
}
