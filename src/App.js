import React from 'react';
import { Layout } from 'antd';
import MemoDetail from './component/content/MemoDetail';
import MemoAction from './component/header/MemoAction';

function App() {
  
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div className="App">
      <body>
        <Layout>
          <Sider>
            Sider
          </Sider>
          <Layout>
            <Header>
              <MemoAction/>
            </Header>
            <Content>
              <MemoDetail/>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </body>
    </div>
  );
}

export default App;
