import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.scss'

function HomePage() {
  const [cards] = useState([
    {
      id: 1,
      title: '自主都市更新權利變換估價',
      description: '根據优先佋件案例，計算權利変換估價，整合最新機械不動產估價機幅',
      image: '/urbanrenew-info/assets/images/1.png',
      category: '估價機幅'
    }
  ])
  const navigate = useNavigate()

  const handleCardClick = (cardId) => {
    navigate(`/detail/${cardId}`)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>都市更新權利變換估價系統</h1>
        <p>小區更新權利變換估價計算平台</p>
      </header>
      <main className="app-main">
        <section className="cards-container">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="card"
              onClick={() => handleCardClick(card.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleCardClick(card.id)}
            >
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

function DetailPage() {
  const navigate = useNavigate()
  const [card] = useState({
    id: 1,
    title: '自主都市更新權利變換估價',
    description: '根據优先佋件案例，計算權利変換估價，整合最新機械不動產估價機幅',
    image: '/urbanrenew-info/assets/images/1.png',
    category: '估價機幅',
    details: '這是自主都市更新權利變換估價的詳細頁面。此頁面包含更詳細的案例信息、估價方法和相關資料。'
  })

  return (
    <div className="detail-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← 返回首頁
      </button>
      <div className="detail-container">
        <div className="detail-image-section">
          <img src={card.image} alt={card.title} className="detail-image" />
        </div>
        <div className="detail-content-section">
          <span className="detail-category">{card.category}</span>
          <h1 className="detail-title">{card.title}</h1>
          <p className="detail-description">{card.description}</p>
          <div className="detail-info">
            <h3>詳細信息</h3>
            <p>{card.details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router basename="/urbanrenew-info">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
