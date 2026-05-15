import React, { useEffect, useState } from 'react'
import { CheckCircle, Home, FileText } from 'lucide-react'
import './App.css'

function Result({ onBack }) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress 0 to 100
    const duration = 2000 // 2 seconds
    const interval = 20 // Update every 20ms
    const steps = duration / interval
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100)
      setProgress(newProgress)
      
      if (currentStep >= steps) {
        clearInterval(timer)
        setTimeout(() => setLoading(false), 300) // slight delay after 100%
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="result-container animate-fade-in">
      <div className="result-overlay"></div>
      
      <header className="header">
        <div className="logo-container" style={{ cursor: 'pointer' }} onClick={onBack}>
          <img src={`${import.meta.env.BASE_URL}user_logo.png?v=3`} alt="고용24" className="user-logo" />
          <span className="logo-text">고용24</span>
        </div>
      </header>

      <div className="result-content">
        {loading ? (
          <div className="loading-state animate-fade-in-up">
            <div className="progress-container">
              <div className="spinner-ring"></div>
              <div className="progress-text">{progress}%</div>
            </div>
            <h2 className="loading-text">진단 결과를<br/>분석하고 있습니다</h2>
            <p className="loading-subtext">잠시만 기다려주세요</p>
          </div>
        ) : (
          <div className="success-state animate-fade-in-up">
            <div className="icon-wrapper animate-scale-in">
              <CheckCircle size={64} className="success-icon" />
            </div>
            
            <h2 className="success-title">자가진단이<br/>완료되었습니다</h2>
            <p className="success-desc">
              입력해주신 정보를 바탕으로<br/>
              <span className="highlight-text">실업급여 수급 자격</span>을 충족하실 가능성이 높습니다.
            </p>

            <div className="action-cards">
              <div className="action-card vibe-hover">
                <FileText size={24} className="card-icon" />
                <div className="card-info">
                  <h3>수급자격 온라인 교육</h3>
                  <p>실업급여 신청 전 필수 수강</p>
                </div>
              </div>
              <div className="action-card vibe-hover">
                <Home size={24} className="card-icon" />
                <div className="card-info">
                  <h3>수급자격 신청서 제출</h3>
                  <p>온라인으로 간편하게 제출</p>
                </div>
              </div>
            </div>

            <button className="primary-btn vibe-btn" onClick={onBack}>
              메인으로 돌아가기
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Result
