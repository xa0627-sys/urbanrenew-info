import React from 'react';
import DocumentTitle from 'react-document-title';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import ValuationPage from './ValuationPage';
import Footer from './Footer';
import './static/style';

// 不支持移动端
class Home extends React.PureComponent {
  state = {
    showValuation: false,
  };

  handleSelect = (id) => {
    if (id === 'valuation') {
      this.setState({ showValuation: true });
    }
  };

  handleBack = () => {
    this.setState({ showValuation: false });
  };

  render() {
    const { showValuation } = this.state;
    const pageTitle = showValuation ? '自主都市更新權利變換估價' : '東湖4-7都市更新簡單聊';

    return (
      <div className="home-page">
        {showValuation ? (
          <ValuationPage onBack={this.handleBack} />
        ) : (
          <React.Fragment>
            <Banner key="banner" />
            <Page1 key="page1" onSelect={this.handleSelect} />
            <Page2 key="page2" />
            <Page3 key="page3" />
            <Footer key="footer" />
          </React.Fragment>
        )}
        <DocumentTitle title={pageTitle} />
      </div>
    );
  }
}
export default Home;
