import React from 'react';
import { Layout } from 'antd';
import MemoDetail from './component/content/MemoDetail';

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
            <Header>Header</Header>
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
