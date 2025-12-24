import React from 'react';
import { getImagePath } from './assetPaths';

export default function BannerImage() {
  return (
    <img 
      src={getImagePath('Gemini_Generated_Image_台北東湖耶誕快樂.png')} 
      alt="台北東湖耶誕快樂 Banner" 
      width="640" 
      height="480" 
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '640px'
      }}
    />
  );
}
