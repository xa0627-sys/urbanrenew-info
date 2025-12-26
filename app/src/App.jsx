import { useMemo, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.scss'

function HomePage() {
  const navigate = useNavigate()
  const hero = useMemo(
    () => ({
      title: '【台北東湖耶誕快樂】',
      subtitle: '在東湖的微縮世界裡，共渡溫馨佳節。',
      image: '/urbanrenew-info/assets/images/Gemini_Generated_Image_台北東湖耶誕快樂.png'
    }),
    []
  )

  const conceptCards = useMemo(
    () => [
      {
        id: 1,
        title: '都更兩本書(事業計畫及權利變換)',
        image: '/urbanrenew-info/assets/images/2.png',
        description: '快速認識都市更新的核心流程與文件重點。'
      },
      {
        id: 2,
        title: '自主都市更新權利變換估價',
        image: '/urbanrenew-info/assets/images/1.png',
        description: '了解權利變換估價，建立公平透明的估價框架。'
      },
      {
        id: 3,
        title: '更新後房屋選配原則',
        image: '/urbanrenew-info/assets/images/4.png',
        description: '掌握選配規則與實務操作，安心完成分配。'
      }
    ],
    []
  )

  const handleCardClick = (cardId) => {
    navigate(`/detail/${cardId}`)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>東湖4-7都市更新簡單聊</h1>
      </header>
      <main className="app-main">
        <section className="hero">
          <div className="hero-text">
            <h2>{hero.title}</h2>
            <p>{hero.subtitle}</p>
          </div>
          <div className="hero-image">
            <img src={hero.image} alt={hero.title} />
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <h3>你該知道的都更觀念</h3>
            <span className="divider" />
          </div>
          <div className="concept-grid">
            {conceptCards.map((card) => (
              <article
                key={card.id}
                className="concept-card"
                onClick={() => handleCardClick(card.id)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleCardClick(card.id)}
              >
                <img src={card.image} alt={card.title} />
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <h3>平面圖說參考</h3>
            <span className="divider" />
          </div>
          <div className="plan-image">
            <img src="/urbanrenew-info/assets/images/13.png" alt="平面圖說參考" />
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <h3>案件進度及下次會議資訊</h3>
            <span className="divider" />
          </div>
          <div className="timeline-card">
            <p>近期已完成權利變換估價說明與初步意見彙整。</p>
            <p>下次住戶說明會預計於 2024/12/15 下午 2:00 舉行。</p>
          </div>
        </section>
      </main>
      <footer className="app-footer">
        <img src="/urbanrenew-info/assets/images/f-logo.png" alt="Alfa Safe" />
        <div className="footer-text">
          <p>戴雲發 Alfa Safe</p>
          <p>106 台北市大安區復興南路二段50號4樓</p>
          <p>電話：02-2358-1845 ・ 傳真：02-2358-1314</p>
          <p>www.dyl.com.tw</p>
        </div>
      </footer>
    </div>
  )
}

function DetailPage() {
  const navigate = useNavigate()
  const slides = useMemo(
    () => [
      {
        id: 1,
        title: '我們的家園新生：看懂「權利變換」如何公平實現您的夢想',
        subtitle: '自主更新的核心：公開、透明、公正',
        image: '/urbanrenew-info/assets/images/5.png'
      },
      { id: 2, title: '估價前的角色與分工', image: '/urbanrenew-info/assets/images/6.png' },
      { id: 3, title: '共同負擔怎麼計算？', image: '/urbanrenew-info/assets/images/7.png' },
      { id: 4, title: '權利價值如何轉換？', image: '/urbanrenew-info/assets/images/8.png' },
      { id: 5, title: '常見疑問解答', image: '/urbanrenew-info/assets/images/9.png' },
      { id: 6, title: '估價案例解析', image: '/urbanrenew-info/assets/images/10.png' },
      { id: 7, title: '房屋選配提醒', image: '/urbanrenew-info/assets/images/11.png' },
      { id: 8, title: '成果展示', image: '/urbanrenew-info/assets/images/12.png' }
    ],
    []
  )
  const [activeSlide, setActiveSlide] = useState(slides[0])

  const goSlide = (direction) => {
    const currentIndex = slides.findIndex((slide) => slide.id === activeSlide.id)
    const nextIndex = (currentIndex + direction + slides.length) % slides.length
    setActiveSlide(slides[nextIndex])
  }

  return (
    <div className="detail-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← 返回首頁
      </button>
      <div className="detail-hero">
        <button className="hero-nav hero-prev" onClick={() => goSlide(-1)}>
          ‹
        </button>
        <div className="hero-image-wrapper">
          <img src={activeSlide.image} alt={activeSlide.title} />
          {activeSlide.subtitle && (
            <div className="hero-caption">
              <h2>{activeSlide.title}</h2>
              <p>{activeSlide.subtitle}</p>
            </div>
          )}
        </div>
        <button className="hero-nav hero-next" onClick={() => goSlide(1)}>
          ›
        </button>
      </div>
      <div className="detail-content">
        <h1>自主都市更新權利變換估價</h1>
        <p className="detail-hint">點擊圖片可放大瀏覽</p>
        <div className="gallery-grid">
          {slides.map((slide) => (
            <button
              key={slide.id}
              className={`gallery-item ${activeSlide.id === slide.id ? 'active' : ''}`}
              onClick={() => setActiveSlide(slide)}
              type="button"
            >
              <img src={slide.image} alt={slide.title} />
              <span>{slide.title}</span>
            </button>
          ))}
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
