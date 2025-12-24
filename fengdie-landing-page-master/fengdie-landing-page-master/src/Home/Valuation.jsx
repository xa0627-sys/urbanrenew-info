import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { valuationImages } from './data';

export default function Valuation() {
  return (
    <div className="home-layout-wrapper home-valuation-wrapper" id="valuation">
      <OverPack className="home-layout" playScale={0.2}>
        <QueueAnim className="home-valuation-header" type="bottom" key="home-valuation" ease="easeOutQuart" leaveReverse>
          <h2 key="h2">自主都市更新權利變換估價</h2>
          <i key="i" className="line" />
          <p key="p" className="home-valuation-note">點擊圖片可放大瀏覽</p>
        </QueueAnim>
        <QueueAnim className="home-valuation-grid" type="bottom" key="home-valuation-grid" ease="easeOutQuart" leaveReverse>
          {valuationImages.map((image) => (
            <a
              key={image.label}
              className="valuation-card"
              href={image.src}
              target="_blank"
              rel="noreferrer"
            >
              <div className="valuation-image">
                <img src={image.src} alt={`估價圖 ${image.label}`} loading="lazy" />
              </div>
              <span className="valuation-caption">圖 {image.label}</span>
            </a>
          ))}
        </QueueAnim>
      </OverPack>
    </div>
  );
}
