import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

export default function Page3() {
  const isDesktop = typeof window === 'undefined' ? true : window.innerWidth >= 769;
  const content = (
    <QueueAnim className="home-serve" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse>
      <h2 key="h2">案件進度及下次會議資訊</h2>
      <i key="i" className="line" />
    </QueueAnim>
  );

  return (
    <div className="home-layout-wrapper home-serve-wrapper">
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
