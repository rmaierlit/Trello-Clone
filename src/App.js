import './App.css';
import { Layout, Menu, Breadcrumb, Space, List } from 'antd';

const { Header, Content, Footer } = Layout;

const LIST_ONE_DATA = [
  {
    title: 'card 1',
  },
  {
    title: 'card 2',
  },
  {
    title: 'card 3',
  },
  {
    title: 'card 4',
  },
];

const LIST_STYLE = {
  width: 272
}

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Space>
            <List
              style={LIST_STYLE}
              header={<div>To Do</div>}
              itemLayout="vertical"
              dataSource={LIST_ONE_DATA}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description="card description"
                  />
                </List.Item>
              )}
            />
            <List
              style={LIST_STYLE}
              header={<div>Doing</div>}
              itemLayout="vertical"
              dataSource={LIST_ONE_DATA}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description="card description"
                  />
                </List.Item>
              )}
            />
          </Space>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Trello Clone</Footer>
      </Layout>
    </div>
  );
}

export default App;
