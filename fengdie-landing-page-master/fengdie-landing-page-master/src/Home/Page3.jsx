import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

export default function Page3() {
  return (
    <div className="home-layout-wrapper home-serve-wrapper">
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim className="home-serve" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse>
          <h2 key="h2">案件進度及下次會議資訊</h2>
          <i key="i" className="line" />
        </QueueAnim>
      </OverPack>
    </div>);
}
