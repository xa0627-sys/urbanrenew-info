import React from 'react';

export default function BannerImage() {
  return (
    <img 
      src="/assets/images/christmas-card.png" 
      alt="Christmas Banner" 
      width="510" 
      height="460" 
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '510px'
      }}
    />
  );
}