import './App.css';
import { Layout, Space, Button } from 'antd';
import { AppstoreOutlined, HomeOutlined,UpSquareOutlined } from '@ant-design/icons';
import Board from "./Board";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Space>
            <Button size="large" icon={<AppstoreOutlined />} />
            <Button size="large" icon={<HomeOutlined />} />
            <Button size="large" icon={<UpSquareOutlined />}> Boards </Button>
          </Space>
        </Header>
        <Content style={{ padding: '0 8px' }}>
          <Board/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
