import React from 'react';

const valuationImages = Array.from({ length: 15 }, (_, index) => ({
  src: `${index + 1}.png`,
  label: `圖 ${index + 1}`,
}));

export default function ValuationDetail() {
  return (
    <div className="home-layout-wrapper home-valuation-wrapper" id="valuation-detail">
      <div className="home-layout">
        <h2>自主都市更新權利變換估價</h2>
        <i className="line" />
        <p className="valuation-note">點擊圖片可放大檢視</p>
        <div className="valuation-grid">
          {valuationImages.map((image) => (
            <figure key={image.src} className="valuation-card">
              <a href={image.src} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={`自主都市更新權利變換估價 ${image.label}`} loading="lazy" />
              </a>
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
