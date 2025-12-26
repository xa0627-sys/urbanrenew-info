import React from 'react';
import DocumentTitle from 'react-document-title';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import ValuationPage from './ValuationPage';
import Footer from './Footer';
import './static/style';

// 不支援轉動屏
class Home extends React.PureComponent {
  state = {
    showValuation: false,
    currentPage: 'home',
  };

  handleSelect = (id) => {
    if (id === 'valuation') {
      this.setState({ showValuation: true, currentPage: 'valuation' });
    } else {
      this.setState({ showValuation: false, currentPage: id });
    }
  };

  handleBack = () => {
    this.setState({ showValuation: false, currentPage: 'home' });
  };

  render() {
    const { showValuation, currentPage } = this.state;
    const pageTitle = showValuation ? '自主都市更新權利變換估價' : '東湖4-7都市更新簡單聊';

    const menuItems = [
      { id: 'valuation', title: '自主都市更新權利變換估價', desc: '瞭解估價方式', icon: '💰', color: '#FF6B6B' },
      { id: 'page1', title: '都更基本概念', desc: '基本知識介紹', icon: '📚', color: '#4ECDC4' },
      { id: 'page2', title: '平面圖說參考', desc: '詳細設計圖', icon: '📐', color: '#45B7D1' },
      { id: 'page3', title: '案件進度', desc: '最新進展資訊', icon: '📅', color: '#96CEB4' },
    ];

    return (
      <div className="home-page">
        {showValuation ? (
          <ValuationPage onBack={this.handleBack} />
        ) : currentPage !== 'home' ? (
          <React.Fragment>
            {currentPage === 'page1' && <Page1 onBack={this.handleBack} />}
            {currentPage === 'page2' && <Page2 onBack={this.handleBack} />}
            {currentPage === 'page3' && <Page3 onBack={this.handleBack} />}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Banner key="banner" />
            <div className="menu-container">
              <h2 className="menu-title">你該知道的都更觀念</h2>
              <div className="menu-grid">
                {menuItems.map((item) => (
                  <div key={item.id} className="menu-card" onClick={() => this.handleSelect(item.id)} style={{ borderTopColor: item.color }}>
                    <div className="card-content">
                      <div className="card-icon">{item.icon}</div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <div className="card-arrow">→</div>
                  </div>
                ))}
              </div>
            </div>
            <Footer key="footer" />
          </React.Fragment>
        )}
        <DocumentTitle title={pageTitle} />
      </div>
    );
  }
}

export default Home;
