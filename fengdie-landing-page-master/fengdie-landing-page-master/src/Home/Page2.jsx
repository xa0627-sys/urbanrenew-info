import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

export default function Page2() {
  const isDesktop = typeof window === 'undefined' ? true : window.innerWidth >= 769;
  const content = (
    <QueueAnim className="home-case" type="bottom" key="home-case" ease="easeOutQuart" leaveReverse>
      <h2 key="h2">平面圖說參考</h2>
      <i key="i" className="line" />
    </QueueAnim>
  );

  return (
    <div className="home-layout-wrapper home-case-wrapper">
      {isDesktop ? (
        <div className="home-layout">
          {content}
        </div>
      ) : (
        <OverPack className="home-layout" playScale={0.4}>
          {content}
        </OverPack>
      )}
    </div>);
}
