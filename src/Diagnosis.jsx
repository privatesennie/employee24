import React, { useState } from 'react'
import { ChevronRight, ArrowLeft, PhoneCall, ExternalLink } from 'lucide-react'
import Result from './Result'
import AuthForm from './AuthForm'
import './App.css'

function Diagnosis({ onBack }) {
  const [step, setStep] = useState(1)
  const [answer, setAnswer] = useState(null)

  const stepData = [
    {
      id: 1,
      title: '기본 고용보험 이력 확인',
      question: '최근 18개월(초단기근로자의 경우 24개월)동안 고용보험에 가입 된 기간이 총 180일 이상이십니까?',
      options: ['예', '아니오'],
      rejectMessage: '최근 18개월(초단기근로자의 경우 24개월)동안 고용보험에 가입 된 기간이 총 180일 이상이어야합니다'
    },
    {
      id: 2,
      title: '퇴사 사유 확인',
      question: '전직이나 개인 사업 목적이 아닌, 회사 폐업, 권고사직, 계약만료, 정당한 사유가 있는 질병 등 비자발적인 사유로 퇴사해야 하셨습니까?',
      options: ['예', '아니오'],
      rejectMessage: '전직이나 개인 사업 목적이 아닌, 회사 폐업, 권고사직, 계약만료, 정당한 사유가 있는 질병 등 비자발적인 사유로 퇴사해야 하셔야합니다.'
    },
    {
      id: 3,
      title: '근로 의사 및 상태',
      question: '근로할 의사와 능력이 있음에도 취업하지 못한 상태이십니까?',
      options: ['예', '아니오'],
      rejectMessage: '근로할 의사와 능력이 있음에도 취업하지 못한 상태이셔야 합니다.'
    },
    {
      id: 4,
      title: '재취업 활동 동의',
      question: '실업급여를 받는 기간 동안 워크넷을 통한 구직 등록 및 이력서 제출 등 적극적인 재취업 활동을 지속해야 합니다. 이에 동의하십니까?',
      options: ['예', '아니오'],
      rejectMessage: '실업급여를 받는 기간 동안 워크넷을 통한 구직 등록 및 이력서 제출 등 적극적인 재취업 활동을 지속해야 합니다.'
    }
  ]

  const currentStepData = stepData.find(s => s.id === step)
  const isRejected = answer && answer !== '예'

  const handleNext = () => {
    if (answer) {
      setStep(step + 1)
      setAnswer(null) // Reset for next step
    }
  }

  // AuthForm view for step 5
  if (step === 5) {
    return <AuthForm onBack={() => setStep(4)} onComplete={() => setStep(6)} />
  }

  // Result view for step 6
  if (step === 6) {
    return <Result onBack={() => setStep(4)} onHome={onBack} />
  }

  return (
    <div className="diagnosis-container animate-fade-in">
      <div className="overlay"></div>
      
      {/* Header */}
      <header className="header">
        <div className="logo-container" style={{ cursor: 'pointer' }} onClick={onBack}>
          <img src={`${import.meta.env.BASE_URL}user_logo.png?v=3`} alt="고용24" className="user-logo" />
          <span className="logo-text">고용24</span>
        </div>
      </header>

        <div className="diagnosis-content">
          <div className="diagnosis-header" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <button className="diagnosis-back-btn" onClick={onBack} title="이전 페이지로">
              <ArrowLeft size={24} />
            </button>
            <h2 className="ai-chat-title" style={{ margin: 0 }}>24시간 AI 챗봇 도우미</h2>
          </div>

          {/* Stepper */}
          <div className="stepper" style={{ marginBottom: '24px' }}>
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`step-item ${s <= step ? 'active' : ''}`}>
                <div className="step-box">STEP {s}</div>
              </div>
            ))}
          </div>

          
          {/* Question Card */}
          <div key={step} className="diagnosis-card animate-fade-in-up">
            <div className="step-indicator">STEP {step}. {currentStepData.title}</div>
            <p className="question-text">
              {currentStepData.question}
            </p>

            <div className="options-container">
              {currentStepData.options.map((opt) => (
                <button 
                  key={opt} 
                  className={`option-btn ${answer === opt ? 'selected' : ''}`}
                  onClick={() => setAnswer(answer === opt ? null : opt)}
                >
                  {opt}
                  <div className={`radio-circle ${answer === opt ? 'checked' : ''}`}></div>
                </button>
              ))}
            </div>

            {isRejected && (
              <div className="reject-message animate-fade-in-up" style={{ marginTop: '20px', padding: '16px', background: 'rgba(211, 47, 47, 0.08)', border: '1px solid rgba(211, 47, 47, 0.2)', borderRadius: '16px', color: '#d32f2f', fontWeight: '700', fontSize: '14.5px', lineHeight: '1.6' }}>
                ⚠️ {currentStepData.rejectMessage}
              </div>
            )}

            {step === 1 && (
              <div className="help-link">
                모르신다면? <span className="highlight">고용보험가입이력 메뉴로 이동</span>
                <ExternalLink size={14} />
              </div>
            )}

            {step === 1 && (
              <div className="call-info" style={{ marginTop: '32px' }}>
                <PhoneCall size={14} />
                근로복지공단 콜센터 (1588-0075)에서도 확인 가능합니다.
              </div>
            )}
          </div>

        {/* Footer Buttons */}
        <div className="diagnosis-footer">
          <button 
            className="nav-btn prev" 
            onClick={step > 1 ? () => setStep(step - 1) : onBack}
          >
            <ArrowLeft size={18} />
            {step > 1 ? '이전 단계로' : '이전 페이지로'}
          </button>
          
          {isRejected ? (
            <button 
              className="nav-btn next" 
              onClick={onBack}
              style={{ background: '#d32f2f' }}
            >
              메인페이지 이동
              <ChevronRight size={18} />
            </button>
          ) : (
            <button 
              className={`nav-btn next ${!answer ? 'disabled' : ''}`}
              onClick={answer ? handleNext : undefined}
            >
              다음 단계로
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Diagnosis
