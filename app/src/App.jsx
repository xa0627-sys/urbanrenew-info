import { useState } from 'react'
import './App.scss'

function App() {
  const [cards] = useState([
    {
      id: 1,
      title: '自主都市更新權利變換估價',
      description: '根據优先佋件案例，計算權利変換估價，整合最新機械不動產估價機幅',
      image: '/urbanrenew-info/assets/images/1.png',
      category: '估價機幅'
    }
  ])

  return (
    <div className="app">
      <header className="app-header">
        <h1>都市更新權利變換估價系統</h1>
        <p>小區更新權利變換估價計算平台</p>
      </header>
      <main className="app-main">
        <section className="cards-container">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <div className="card-image-wrapper">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <span className="card-category">{card.category}</span>
                <h2 className="card-title">{card.title}</h2>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
