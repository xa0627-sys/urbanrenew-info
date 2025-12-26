import React, { useState } from 'react';
import { getImagePath } from './assetPaths';

const valuationImages = Array.from({ length: 15 }, (_, index) => getImagePath(`${index + 1}.png`));

export default function ValuationPage({ onBack }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const headerImage = valuationImages[0];
  const galleryImages = valuationImages.slice(1);
  const allImages = valuationImages;

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = () => {
    setLightboxIndex((current) => {
      const nextIndex = current === 0 ? allImages.length - 1 : current - 1;
      return nextIndex;
    });
  };

  const showNext = () => {
    setLightboxIndex((current) => {
      const nextIndex = current === allImages.length - 1 ? 0 : current + 1;
      return nextIndex;
    });
  };

  return (
    <div className="valuation-page">
      <div className="valuation-header">
        <button className="valuation-back" type="button" onClick={onBack}>
          返回上一頁
        </button>
        <button className="valuation-image-button" type="button" onClick={() => openLightbox(0)}>
          <img src={headerImage} alt="自主都市更新權利變換估價 圖1" />
        </button>
        <h2>自主都市更新權利變換估價</h2>
        <p className="valuation-hint">點擊圖片可放大瀏覽</p>
      </div>
      <div className="valuation-gallery">
        {galleryImages.map((src, index) => (
          <figure key={src} className="valuation-card">
            <button
              className="valuation-image-button"
              type="button"
              onClick={() => openLightbox(index + 1)}
            >
              <img src={src} alt={`自主都市更新權利變換估價 圖${index + 2}`} loading="lazy" />
            </button>
          </figure>
        ))}
      </div>
      {lightboxIndex !== null && (
        <div className="valuation-lightbox" role="dialog" aria-modal="true">
          <button className="valuation-lightbox-close" type="button" onClick={closeLightbox}>
            關閉
          </button>
          <button className="valuation-lightbox-nav valuation-lightbox-prev" type="button" onClick={showPrev}>
            ‹
          </button>
          <img
            className="valuation-lightbox-image"
            src={allImages[lightboxIndex]}
            alt={`自主都市更新權利變換估價 圖${lightboxIndex + 1}`}
          />
          <button className="valuation-lightbox-nav valuation-lightbox-next" type="button" onClick={showNext}>
            ›
          </button>
        </div>
      )}
    </div>
  );
}
