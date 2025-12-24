import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>東湖4-7都市更新簡單聊</span>
          </a>
        </h1>
      </div>
    </header>
  );
}
