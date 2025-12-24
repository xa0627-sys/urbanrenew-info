import React from 'react';
import { page4 } from './data';

function Footer() {
  return (
    <div className="home-layout-wrapper home-footer-wrapper">
      <div className="home-layout">
        <div className="logo" key="logo">
          <img src={page4[2]} width="72" height="72" alt="logo" />
        </div>
        <div className="footer-info">
          <p>106 台北市大安區和平東路一段59號4樓</p>
          <p>電話：02-2358-1345</p>
          <p>傳真：02-2358-1314</p>
          <p>www.dyf.com.tw</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
