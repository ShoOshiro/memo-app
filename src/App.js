import React from 'react';
import { Layout } from 'antd';

import MemoDisplay from './component/content/MemoDisplay';
import MemoAction from './component/header/MemoAction';
import MemoList from './component/sideMenu/MemoList';
import SearchArea from './component/sideMenu/SearchArea';

function App() {
  
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div className="App">
      <body>
        <Layout>
          <div className="sider">
            <Sider trigger={null} theme='light'>
              <SearchArea/>
              <MemoList/>
            </Sider>
          </div>
          <Layout>
            <Header>
              <MemoAction/>
            </Header>
            <Content>
              <MemoDisplay/>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </body>
    </div>
  );
}

export default App;
