import React from 'react';
import DocumentTitle from 'react-document-title';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Footer from './Footer';
import './static/style';

// 不支持移动端
class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-page">
        <Banner key="banner" />
        <Page1 key="page1" />
        <Page2 key="page2" />
        <Page3 key="page3" />
        <Footer key="footer" />
        <DocumentTitle title="東湖4-7都市更新簡單聊" />
      </div>
    );
  }
}
export default Home;
