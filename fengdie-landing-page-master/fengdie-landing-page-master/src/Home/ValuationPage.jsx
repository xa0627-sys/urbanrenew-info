import React from 'react';
import { getImagePath } from './assetPaths';

const valuationImages = Array.from({ length: 15 }, (_, index) => getImagePath(`${index + 1}.png`));

export default function ValuationPage({ onBack }) {
  const headerImage = valuationImages[0];
  const galleryImages = valuationImages.slice(1);

  return (
    <div className="valuation-page">
      <div className="valuation-header">
        <button className="valuation-back" type="button" onClick={onBack}>
          返回上一頁
        </button>
        <a href={headerImage} target="_blank" rel="noopener noreferrer">
          <img src={headerImage} alt="自主都市更新權利變換估價 圖1" />
        </a>
        <h2>自主都市更新權利變換估價</h2>
        <p className="valuation-hint">點擊圖片可放大瀏覽</p>
      </div>
      <div className="valuation-gallery">
        {galleryImages.map((src, index) => (
          <figure key={src} className="valuation-card">
            <a href={src} target="_blank" rel="noopener noreferrer">
              <img src={src} alt={`自主都市更新權利變換估價 圖${index + 2}`} loading="lazy" />
            </a>
          </figure>
        ))}
      </div>
    </div>
  );
}
