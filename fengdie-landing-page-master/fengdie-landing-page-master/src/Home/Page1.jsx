import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { page1 } from './data';

export default function Page1({ onSelect }) {
  const isDesktop = typeof window === 'undefined' ? true : window.innerWidth >= 769;
  const children = page1.map((d, i) => {
    const isClickable = Boolean(d.id && onSelect);
    const handleSelect = () => {
      if (d.id && onSelect) {
        onSelect(d.id);
      }
    };
    const handleKeyDown = (event) => {
      if (!isClickable) {
        return;
      }
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleSelect();
      }
    };
    const content = (
      <React.Fragment>
        <div key="image" className="image" style={{ backgroundImage: `url(${d.src})` }} />
        <h3 key="h3">{d.title}</h3>
      </React.Fragment>
    );
    return (
      <QueueAnim
        component={Col}
        key={i}
        type="bottom"
        className="col"
        componentProps={{ span: { xs: 24, sm: 12, md: 8 } }}
      >
        {isClickable ? (
          <button
            key="button"
            className="home-func-card"
            type="button"
            onClick={handleSelect}
            onKeyDown={handleKeyDown}
          >
            {content}
          </button>
        ) : (
          <div key="static" className="home-func-card static">
            {content}
          </div>
        )}
      </QueueAnim>
    );
  });
  const content = (
    <QueueAnim className="home-func" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse>
      <QueueAnim
        key="content"
        component={Row}
        type="bottom"
        componentProps={{ gutter: 171 }}
      >
        {children}
      </QueueAnim>
    </QueueAnim>
  );

  return (
    <div className="home-layout-wrapper home-func-wrapper" id="home-func" >
      <h2>你該知道的都更觀念</h2>
      <i className="line" />
      {isDesktop ? (
        <div className="home-layout">
          {content}
        </div>
      ) : (
        <OverPack className="home-layout" location="home-func" playScale={0.4}>
          {content}
        </OverPack>
      )}
    </div>);
}
