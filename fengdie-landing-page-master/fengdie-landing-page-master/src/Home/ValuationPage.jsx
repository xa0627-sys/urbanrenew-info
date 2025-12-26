import React, { useState, useEffect, useCallback, useRef } from 'react';
import './ValuationPage.scss';
import { getImagePath } from './assetPaths';

export default function ValuationPage({ onBack }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [valuationImages] = useState(
    Array.from({ length: 15 }, (_, index) => getImagePath(`${index + 1}.png`))
  );
  const lightboxRef = useRef(null);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? valuationImages.length - 1 : prev - 1));
    }
  }, [lightboxIndex, valuationImages.length]);

  const goToNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === valuationImages.length - 1 ? 0 : prev + 1));
    }
  }, [lightboxIndex, valuationImages.length]);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (lightboxIndex === null) return;
      
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeydown);
      return () => window.removeEventListener('keydown', handleKeydown);
    }
  }, [lightboxIndex, closeLightbox, goToPrevious, goToNext]);

  return (
    <div className="valuation-page">
      <div className="page-header">
        <h1>估值圖庫</h1>
        <button className="back-btn" onClick={onBack} aria-label="返回">返回</button>
      </div>

      <div className="gallery-grid">
        {valuationImages.map((imageSrc, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() => openLightbox(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="image-container">
              <img src={imageSrc} alt={`估值圖片 ${index + 1}`} loading="lazy" />
              <div className="overlay">
                <span className="view-text">點擊查看</span>
              </div>
            </div>
            <div className="card-footer">
              <p className="image-title">圖片 #{index + 1}</p>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div 
          className="lightbox-overlay" 
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="圖片燈箱"
        >
          <div 
            className="lightbox-container" 
            onClick={(e) => e.stopPropagation()}
            ref={lightboxRef}
          >
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="關閉燈箱"
              type="button"
            >
              ×
            </button>

            <div className="lightbox-content">
              <img
                src={valuationImages[lightboxIndex]}
                alt={`估值圖片 ${lightboxIndex + 1} 全螢幕検視`}
                className="lightbox-image"
              />
            </div>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={goToPrevious}
              aria-label="上一張圖片"
              type="button"
            >
              ‹
            </button>
            <button
              className="lightbox-nav lightbox-next"
              onClick={goToNext}
              aria-label="下一張圖片"
              type="button"
            >
              ›
            </button>

            <div className="lightbox-info">
              <span className="image-counter">
                {lightboxIndex + 1} / {valuationImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
