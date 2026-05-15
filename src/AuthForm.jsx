import React, { useState } from 'react'
import { User, Phone, Calendar, ArrowRight } from 'lucide-react'
import './App.css'

function AuthForm({ onComplete, onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    birth: '',
    phone: ''
  })

  const isFormValid = formData.name && formData.birth && formData.phone

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      onComplete()
    }
  }

  return (
    <div className="auth-container animate-fade-in">
      <div className="overlay"></div>
      
      <header className="header">
        <div className="logo-container" style={{ cursor: 'pointer' }} onClick={onBack}>
          <img src={`${import.meta.env.BASE_URL}user_logo.png?v=3`} alt="고용24" className="user-logo" />
          <span className="logo-text">고용24</span>
        </div>
      </header>

      <div className="auth-content">
        <div className="auth-card animate-fade-in-up">
          <div className="auth-header">
            <h2 className="auth-title">본인 인증</h2>
            <p className="auth-desc">정확한 맞춤형 진단 결과를 위해<br/>기본 정보를 입력해주세요</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>이름</label>
              <div className="input-wrapper">
                <User size={18} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="실명 입력" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="vibe-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label>생년월일</label>
              <div className="input-wrapper">
                <Calendar size={18} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="예: 900101" 
                  maxLength={6}
                  value={formData.birth}
                  onChange={(e) => setFormData({...formData, birth: e.target.value.replace(/[^0-9]/g, '')})}
                  className="vibe-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label>휴대폰 번호</label>
              <div className="input-wrapper">
                <Phone size={18} className="input-icon" />
                <input 
                  type="tel" 
                  placeholder="숫자만 입력" 
                  maxLength={11}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/[^0-9]/g, '')})}
                  className="vibe-input"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className={`primary-btn vibe-btn auth-submit-btn ${!isFormValid ? 'disabled' : ''}`}
              disabled={!isFormValid}
            >
              인증 완료
              <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
