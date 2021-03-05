import './App.css';
import { Layout, Space, Button, Input, Avatar } from 'antd';
import { AppstoreOutlined, HomeOutlined, LayoutOutlined, BellOutlined, InfoCircleOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import Board from "./Board";

const { Header, Content } = Layout;

const defaultButtons = (
  <>
    <Button icon={<AppstoreOutlined />} />
    <Button className="only-big" icon={<HomeOutlined />} />
    <Button icon={<LayoutOutlined />}> Boards </Button>
    <Input.Search style={{ display: "inline" }} placeholder="Jump to..." />
  </>
)

const compactButtons = (
  <>
    <Button icon={<AppstoreOutlined />} />
    <Button icon={<LayoutOutlined />} />
    <Button icon={<SearchOutlined />} />
  </>
)

function App() {
  let leftSideButtons = useMediaQuery({minWidth: 768})? defaultButtons : compactButtons;
  return (
    <div className="App">
      <Layout className="layout">
        <Header className="header" style={{ display: "flex", justifyContent: "space-between" }}>
          <Space align="center">
            {leftSideButtons}
          </Space>
          <Space>
            <Button icon={<PlusOutlined />} />
            <Button icon={<InfoCircleOutlined />} />
            <Button icon={<BellOutlined />} />
            <Avatar style={{ backgroundColor: 'darkgray' }}>UU</Avatar>
          </Space>
        </Header>
        <Content style={{ padding: '0 8px' }}>
          <Board />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
