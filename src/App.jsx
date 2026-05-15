import { useState } from 'react'
import { Search, Menu, LogIn, UserPlus, Sparkles, Bot } from 'lucide-react'
import './App.css'
import Diagnosis from './Diagnosis'

function App() {
  const [view, setView] = useState('main') // 'main' or 'diagnosis'
  const [showTooltip, setShowTooltip] = useState(false)

  const jobFilters = ['지역별', '직종별', '테마별']
  const eduFilters = ['내일배움카드', 'K-디지털 훈련', '정부부처별']
  const aiSuggestions = ['실업급여 신청방법', '실업급여 수급 자격 확인', '맞춤 일자리 찾기', '직업훈련 안내']

  if (view === 'diagnosis') {
    return <Diagnosis onBack={() => setView('main')} />
  }

  return (
    <div className="app-container">
      <div className="overlay"></div>

      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <img src={`${import.meta.env.BASE_URL}user_logo.png?v=3`} alt="고용24" className="user-logo" />
          <span className="logo-text">고용24</span>
        </div>
        <div className="header-icons">
          <button className="icon-btn">
            <LogIn size={20} />
            <span>로그인</span>
          </button>
          <button className="icon-btn">
            <UserPlus size={20} />
            <span>회원가입</span>
          </button>
          <button className="icon-btn">
            <Menu size={20} />
            <span>메뉴</span>
          </button>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="main-grid">
        {/* Search Bar Section */}
        <div className="search-container animate-fade-in">
          <Search className="search-icon" size={20} />
          <input 
            type="text" 
            className="search-bar" 
            placeholder="어떤 일자리를 찾으시나요?" 
          />
        </div>

        {/* Central AI Chat Section */}
        <div className="ai-chat-section animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="ai-chat-card">
            <div className="ai-chat-header">
              <div className="ai-badge">AI HELP</div>
              <h2 className="ai-chat-title">무엇을 도와드릴까요?</h2>
            </div>
            <div className="ai-chat-input-wrapper">
              <input 
                type="text" 
                className="ai-chat-input" 
                placeholder="궁금한 내용을 입력해 보세요" 
              />
              <Sparkles className="ai-input-icon" size={20} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#03366A', opacity: 0.6 }} />
            </div>
            <div className="ai-suggestion-tags">
              {aiSuggestions.map((tag, i) => (
                <span key={i} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="content">
          {/* Summary Section */}
          <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="summary-container">
              <div className="summary-item">
                <span className="summary-label">채용공고 수</span>
                <div className="summary-value">
                  130,828<span className="summary-unit">건</span>
                </div>
              </div>
              <div className="summary-item">
                <span className="summary-label">교육·훈련 수</span>
                <div className="summary-value">
                  21,877<span className="summary-unit">건</span>
                </div>
              </div>
            </div>
          </div>

          {/* Job Section */}
          <div className="filter-section animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="section-title">채용 정보</h2>
            <div className="filter-row">
              {jobFilters.map((filter, index) => (
                <button key={index} className="filter-btn">
                  {filter}
                  <div className="arrow-icon"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="filter-section animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="section-title">교육·훈련</h2>
            <div className="filter-row">
              {eduFilters.map((filter, index) => (
                <button key={index} className="filter-btn">
                  {filter}
                  <div className="arrow-icon"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Chatbot FAB - tooltip rendered independently outside FAB */}
      {showTooltip && (
        <div
          className="chatbot-tooltip chatbot-tooltip--visible"
          onClick={() => setView('diagnosis')}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          실업급여 수급 대상 여부를 확인해보세요 !
        </div>
      )}
      <div
        className="chatbot-fab"
        onClick={() => setView('diagnosis')}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Bot size={32} strokeWidth={2.2} />
      </div>
    </div>
  )
}

export default App
