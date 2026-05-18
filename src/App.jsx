import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Search, Menu, LogIn, UserPlus, Sparkles, Bot, X, ChevronRight, Lock, ShieldCheck, Briefcase, GraduationCap, HelpCircle, Compass } from 'lucide-react'
import './App.css'
import Diagnosis from './Diagnosis'

function App() {
  const [view, setView] = useState('main')
  const [showTooltip, setShowTooltip] = useState(false)
  const [showApplicationPopup, setShowApplicationPopup] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [showSignUpPopup, setShowSignUpPopup] = useState(false)
  const [showJobSearchChoice, setShowJobSearchChoice] = useState(false)
  const [showVocationalGuide, setShowVocationalGuide] = useState(false)
  const [showJobPostings, setShowJobPostings] = useState(false)
  const [showEduPostings, setShowEduPostings] = useState(false)
  const [activeInfoPopup, setActiveInfoPopup] = useState(null) // 'card', 'digital'
  const [activeFilter, setActiveFilter] = useState(null) // 'region', 'job'
  const [filterStep, setFilterStep] = useState(1)
  const [tempSelection, setTempSelection] = useState('')

  const regions = ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "대전광역시", "울산광역시", "세종특별자치시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주특별자치도"]
  
  const regionMapping = {
    "서울특별시": ["전체", "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"],
    "경기도": ["전체", "수원시", "성남시", "의정부시", "안양시 만안구", "안양시 동안구", "부천시", "광명시", "평택시", "동두천시", "안산시", "고양시", "과천시", "구리시", "남양주시", "오산시", "시흥시", "군포시", "의왕시", "하남시", "용인시", "파주시", "이천시", "안성시", "김포시", "화성시", "광주시", "양주시", "포천시", "여주시", "양평군", "가평군", "연천군"],
    "부산광역시": ["전체", "중구", "서구", "동구", "영도구", "부산진구", "동래구", "남구", "북구", "해운대구", "사하구", "금정구", "강서구", "연제구", "수영구", "사상구", "기장군"],
    "대구광역시": ["전체", "중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군", "군위군"],
    "인천광역시": ["전체", "중구", "동구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"],
    "광주광역시": ["전체", "동구", "서구", "남구", "북구", "광산구"],
    "대전광역시": ["전체", "동구", "중구", "서구", "유성구", "대덕구"],
    "울산광역시": ["전체", "중구", "남구", "동구", "북구", "울주군"],
    "세종특별자치시": ["전체", "세종시"],
    "강원도": ["전체", "춘천시", "원주시", "강릉시", "동해시", "태백시", "속초시", "삼척시", "홍천군", "횡성군", "영월군", "평창군", "정선군", "철원군", "화천군", "양구군", "인제군", "고성군", "양양군"],
    "충청북도": ["전체", "청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "증평군", "진천군", "괴산군", "음성군", "단양군"],
    "충청남도": ["전체", "천안시", "공주시", "보령시", "아산시", "서산시", "논산시", "계룡시", "당진시", "금산군", "부여군", "서천군", "청양군", "홍성군", "예산군", "태안군"],
    "전라북도": ["전체", "전주시", "군산시", "익산시", "정읍시", "남원시", "김제시", "완주군", "진안군", "무주군", "장수군", "임실군", "순창군", "고창군", "부안군"],
    "전라남도": ["전체", "목포시", "여수시", "순천시", "나주시", "광양시", "담양군", "곡성군", "구례군", "고흥군", "보성군", "화순군", "장흥군", "강진군", "해남군", "영암군", "무안군", "함평군", "영광군", "장성군", "완도군", "진도군", "신안군"],
    "경상북도": ["전체", "포항시", "경주시", "김천시", "안동시", "구미시", "영주시", "영천시", "상주시", "문경시", "경산시", "의성군", "청송군", "영양군", "영덕군", "청도군", "고령군", "성주군", "칠곡군", "예천군", "봉화군", "울진군", "울릉군"],
    "경상남도": ["전체", "창원시", "진주시", "통영시", "사천시", "김해시", "밀양시", "거제시", "양산시", "의령군", "함안군", "창녕군", "고성군", "남해군", "하동군", "산청군", "함양군", "거창군", "합천군"],
    "제주특별자치도": ["전체", "제주시", "서귀포시"]
  }
  
  const ncsCategories = [
    "01. 사업관리", "02. 경영·회계·사무", "03. 금융·보험", "04. 교육·자연·사회과학", 
    "05. 법률·경찰·소방·교도·국방", "06. 보건·의료", "07. 사회복지·종교", "08. 문화·예술·디자인·방송", 
    "09. 운전·운송", "10. 영업판매", "11. 경비·청소", "12. 이용·숙박·여행·오락·스포츠", 
    "13. 음식서비스", "14. 건설", "15. 기계", "16. 재료", 
    "17. 화학", "18. 섬유·의복", "19. 전기·전자", "20. 정보통신", 
    "21. 식품가공", "22. 인쇄·목재·가구·공예", "23. 환경·에너지·안전", "24. 농림어업"
  ]
  
  const ncsMapping = {
    "02. 경영·회계·사무": ["전체", "경영기획", "홍보", "인사", "사무행정", "회계·감사"],
    "20. 정보통신": ["전체", "IT프로젝트관리", "IT전략·기획", "소프트웨어개발", "네트워크", "DB구축", "보안"],
    "08. 문화·예술·디자인·방송": ["전체", "디자인", "문화예술", "영상제작", "공연예술"]
  }

  const menuItems = [
    "채용정보", "취업지원", "실업급여", "직업 능력 개발", 
    "출산휴직 ·육아휴직", "기타민원", "고객센터", "마이페이지"
  ]

  const jobFilters = ['지역별', '직종별']
  const eduFilters = ['내일배움카드', 'K-디지털 훈련']
  const aiSuggestions = ['실업급여 신청방법', '실업급여 수급 자격 확인', '맞춤 일자리 찾기', '직업훈련 안내']

  if (view === 'diagnosis') {
    return <Diagnosis onBack={() => setView('main')} />
  }

  // The FAB wrapper is position:fixed, tooltip is position:absolute inside it.
  // Rendered via portal to escape any parent stacking context completely.
  const fabPortal = createPortal(
    <div
      className="fab-wrapper"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      role="complementary"
      aria-label="AI 챗봇 빠른 상담 도구"
    >
      {/* Tooltip: position absolute, to the left of the wrapper */}
      <div 
        className={`chatbot-tooltip${showTooltip ? ' chatbot-tooltip--visible' : ''}`}
        onClick={() => setView('diagnosis')}
        role="tooltip"
      >
        실업급여 수급 대상 여부를 확인해보세요 !
      </div>
      {/* FAB icon button */}
      <div className="chatbot-fab" onClick={() => setView('diagnosis')} aria-label="AI 취업비서 자가진단 열기" role="button" tabIndex={0}>
        <Bot size={32} strokeWidth={2.2} />
      </div>
    </div>,
    document.body
  )

  return (
    <>
      <div className="app-container">
        <div className="overlay"></div>

        {/* Header Section (Landmark: banner) */}
        <header className="header" role="banner" aria-label="고용24 메인 헤더">
          <div className="logo-container" tabIndex={0}>
            <img src={`${import.meta.env.BASE_URL}user_logo.png?v=3`} alt="고용24" className="user-logo" />
            <span className="logo-text">고용24</span>
          </div>
          <div className="header-icons">
            <button className="icon-btn" onClick={() => setShowLoginPopup(true)} aria-label="로그인 팝업 열기">
              <LogIn size={20} />
              <span>로그인</span>
            </button>
            <button className="icon-btn" onClick={() => setShowSignUpPopup(true)} aria-label="회원가입 팝업 열기">
              <UserPlus size={20} />
              <span>회원가입</span>
            </button>
            <button className="icon-btn" onClick={() => setShowMenu(true)} aria-label="전체 메뉴 열기">
              <Menu size={20} />
              <span>메뉴</span>
            </button>
          </div>
        </header>

        {/* Main Content Area (Landmark: main) */}
        <main className="main-grid" role="main" aria-label="고용24 주요 서비스 및 채용 탐색">
          {/* Search Bar Section */}
          <section className="search-container animate-fade-in" aria-label="일자리 통합 검색">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              className="search-bar"
              placeholder="어떤 일자리를 찾으시나요?"
              aria-label="검색어 입력"
            />
          </section>

          {/* Central AI Chat Section */}
          <section className="ai-chat-section animate-fade-in-up" style={{ animationDelay: '0.1s' }} aria-label="AI 챗봇 비서 및 추천 키워드">
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
                  aria-label="AI 챗봇 질문 입력"
                />
                <Sparkles className="ai-input-icon" size={20} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#03366A', opacity: 0.6 }} />
              </div>
              <div className="ai-suggestion-tags" role="navigation" aria-label="추천 키워드 바로가기">
                {aiSuggestions.map((tag, i) => (
                  <button 
                    key={i} 
                    className="tag"
                    onClick={() => {
                      if (tag === '실업급여 신청방법') {
                        setShowApplicationPopup(true)
                      } else if (tag === '실업급여 수급 자격 확인') {
                        setView('diagnosis')
                      } else if (tag === '맞춤 일자리 찾기') {
                        setShowJobSearchChoice(true)
                      } else if (tag === '직업훈련 안내') {
                        setShowVocationalGuide(true)
                      }
                    }}
                    aria-label={`${tag} 정보 보기`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* 주요 서비스 내비게이션 (Landmark Navigation) */}
          <nav className="landmark-section animate-fade-in-up" style={{ animationDelay: '0.15s' }} aria-label="주요 서비스 바로가기">
            <div className="landmark-header">
              <h2 className="landmark-header-title">
                <Compass size={24} color="var(--primary-color)" />
                주요 서비스
              </h2>
            </div>
            <div className="landmark-grid">
              <div className="landmark-card" onClick={() => setView('diagnosis')} role="button" tabIndex={0} aria-label="AI 자가진단 서비스로 이동">
                <div className="landmark-icon-wrapper">
                  <Bot size={28} strokeWidth={2.2} />
                </div>
                <div className="landmark-info">
                  <span className="landmark-title">AI 자가진단</span>
                  <span className="landmark-desc">실업급여 및 수급자격 1분 진단</span>
                </div>
              </div>

              <div className="landmark-card" onClick={() => setShowJobSearchChoice(true)} role="button" tabIndex={0} aria-label="맞춤 일자리 찾기 선택 창 열기">
                <div className="landmark-icon-wrapper">
                  <Briefcase size={28} strokeWidth={2.2} />
                </div>
                <div className="landmark-info">
                  <span className="landmark-title">일자리 찾기</span>
                  <span className="landmark-desc">지역별·직종별 최적 맞춤 일자리</span>
                </div>
              </div>

              <div className="landmark-card" onClick={() => setShowVocationalGuide(true)} role="button" tabIndex={0} aria-label="국비지원 직업훈련 안내 창 열기">
                <div className="landmark-icon-wrapper">
                  <GraduationCap size={28} strokeWidth={2.2} />
                </div>
                <div className="landmark-info">
                  <span className="landmark-title">직업 훈련</span>
                  <span className="landmark-desc">내일배움카드 및 K-디지털 안내</span>
                </div>
              </div>

              <div className="landmark-card" onClick={() => setShowApplicationPopup(true)} role="button" tabIndex={0} aria-label="실업급여 신청방법 안내 창 열기">
                <div className="landmark-icon-wrapper">
                  <HelpCircle size={28} strokeWidth={2.2} />
                </div>
                <div className="landmark-info">
                  <span className="landmark-title">실업급여 안내</span>
                  <span className="landmark-desc">신청 절차 및 수급 요건 총정리</span>
                </div>
              </div>
            </div>
          </nav>

          <div className="content">
            {/* Summary Section */}
            <section className="glass-card animate-fade-in-up" style={{ animationDelay: '0.2s' }} aria-label="실시간 서비스 현황 요약">
              <div className="summary-container">
                <div className="summary-item">
                  <span className="summary-label">채용공고 수</span>
                  <div className="summary-value">
                    130,828<span className="summary-unit">건</span>
                  </div>
                  <div className="summary-footer-btn-wrapper">
                    <button className="summary-action-btn" onClick={() => setShowJobPostings(true)} aria-label="실시간 채용공고 팝업 열기">확인하러 가기</button>
                  </div>
                </div>
                <div className="summary-item">
                  <span className="summary-label">교육·훈련 수</span>
                  <div className="summary-value">
                    21,877<span className="summary-unit">건</span>
                  </div>
                  <div className="summary-footer-btn-wrapper">
                    <button className="summary-action-btn" onClick={() => setShowEduPostings(true)} aria-label="국비지원 교육 안내 팝업 열기">확인하러 가기</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Job Section */}
            <section className="filter-section animate-fade-in-up" style={{ animationDelay: '0.3s' }} aria-label="채용 정보 탐색 필터">
              <h2 className="section-title">채용 정보</h2>
              <div className="filter-row" role="group" aria-label="채용 정보 필터링 옵션">
                {jobFilters.map((filter, index) => (
                  <button 
                    key={index} 
                    className="filter-btn"
                    onClick={() => {
                      if (filter === '지역별') {
                        setActiveFilter('region')
                        setFilterStep(1)
                      } else if (filter === '직종별') {
                        setActiveFilter('job')
                        setFilterStep(1)
                      }
                    }}
                    aria-label={`${filter} 채용 정보 보기`}
                  >
                    {filter}
                    <div className="arrow-icon"></div>
                  </button>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="filter-section animate-fade-in-up" style={{ animationDelay: '0.4s' }} aria-label="교육 및 훈련 탐색 필터">
              <h2 className="section-title">교육·훈련</h2>
              <div className="filter-row" role="group" aria-label="교육 및 훈련 필터링 옵션">
                {eduFilters.map((filter, index) => (
                  <button 
                    key={index} 
                    className="filter-btn"
                    onClick={() => {
                      if (filter === '내일배움카드') setActiveInfoPopup('card')
                      if (filter === 'K-디지털 훈련') setActiveInfoPopup('digital')
                    }}
                    aria-label={`${filter} 안내 보기`}
                  >
                    {filter}
                    <div className="arrow-icon"></div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      <footer className="vibe-footer" role="contentinfo" aria-label="고용24 하단 정보 및 약관">
        <div className="footer-top">

          <div className="footer-logo">
            <img src={`${import.meta.env.BASE_URL}user_logo.png?v=3`} alt="고용24" className="user-logo" />
            <span className="footer-logo-text">고용24</span>
          </div>
          <div className="footer-info">
            <p>(27740) 충청북도 음성군 맹동면 태정로 6 한국고용정보원</p>
            <p>홈페이지 전산 이용 문의 <strong>1577-7114</strong> (유료, 한국고용정보원 고객상담센터, 평일 09시 ~ 18시)</p>
            <p>고용·노동 분야 제도 문의 국번없이 <strong>1350</strong> (유료, 고용노동부 고객상담센터, 평일 09시 ~ 18시)</p>
          </div>
          <div className="footer-notice">
            <p>고용24는 <strong>통신판매중개자</strong>이며, 통신판매의 당사자가 아닙니다.</p>
            <p>상품(훈련), 상품(훈련)정보, 거래에 관한 <strong>의무와 책임은 판매자(훈련기관)</strong>에게 있습니다.</p>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-links">
            <a href="#">이용약관</a>
            <a href="#" className="bold">개인정보처리방침</a>
            <a href="#">이메일무단수집거부</a>
            <a href="#">저작권보호정책</a>
            <a href="#">오픈API 서비스</a>
            <a href="#">화상상담 관리자</a>
            <a href="#">사이트맵</a>
            <a href="#">챗봇</a>
          </div>
          <div className="footer-copyright">
            © Ministry of Employment and Labor, Korea Employment Information Service. All rights reserved.
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-partner-logos">
            <div className="partner-logo">고용노동부</div>
            <div className="partner-logo">한국고용정보원</div>
            <span className="partner-text">이 누리집은 고용노동부와 고용노동부 산하기관 한국고용정보원의 누리집 입니다.</span>
          </div>
        </div>
      </footer>

      {/* FAB portal — renders directly into document.body */}
      {fabPortal}

      {/* 실업급여 신청방법 팝업 */}
      {showApplicationPopup && (
        <div className="modal-overlay" onClick={() => setShowApplicationPopup(false)}>
          <div className="modal-content animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">실업급여 신청방법 안내</h3>
              <button className="close-btn" onClick={() => setShowApplicationPopup(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="info-banner">
                💡 실업급여는 실직 후 지체 없이 신청하셔야 합니다!
              </div>
              <ol className="method-list">
                <li>
                  <span className="step-num">01</span>
                  <div>
                    <strong>워크넷 구직등록</strong>
                    <p>워크넷(work.go.kr)에 접속하여 구직신청을 완료합니다.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">02</span>
                  <div>
                    <strong>온라인 교육 이수</strong>
                    <p>고용24에서 수급자격 온라인 교육을 시청합니다.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">03</span>
                  <div>
                    <strong>수급자격 인정 신청</strong>
                    <p>거주지 관할 고용센터를 방문하거나 온라인으로 신청서를 제출합니다.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">04</span>
                  <div>
                    <strong>구직급여 신청 및 지급</strong>
                    <p>실업인정일에 적극적 재취업 활동 확인 후 급여가 지급됩니다.</p>
                  </div>
                </li>
              </ol>
              <button className="modal-confirm-btn" onClick={() => setShowApplicationPopup(false)}>
                확인했습니다
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 전체 메뉴 모달 */}
      {showMenu && (
        <div className="full-menu-overlay animate-fade-in" onClick={() => setShowMenu(false)}>
          <div className="menu-container animate-slide-in-right" onClick={e => e.stopPropagation()}>
            <div className="menu-header">
              <div className="logo-container">
                <img src={`${import.meta.env.BASE_URL}user_logo.png?v=3`} alt="고용24" className="user-logo" />
                <span className="logo-text">고용24</span>
              </div>
              <button className="close-btn" onClick={() => setShowMenu(false)}>
                <X size={28} />
              </button>
            </div>
            <div className="menu-body">
              <div className="menu-user-info">
                <div className="user-avatar">G</div>
                <div className="user-welcome">
                  <p>반갑습니다!</p>
                  <strong>로그인이 필요합니다</strong>
                </div>
              </div>
              <ul className="menu-list">
                {menuItems.map((item, idx) => (
                  <li key={idx} className="menu-item" onClick={() => setShowMenu(false)}>
                    {item}
                    <ChevronRight size={18} opacity={0.3} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="menu-footer">
              <button className="menu-footer-btn" onClick={() => { setShowMenu(false); setShowLoginPopup(true); }}>로그인</button>
              <button className="menu-footer-btn">회원가입</button>
            </div>
          </div>
        </div>
      )}

      {/* 직업훈련 안내 팝업 */}
      {showVocationalGuide && (
        <div className="modal-overlay" onClick={() => setShowVocationalGuide(false)}>
          <div className="modal-content animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">국비지원 직업훈련 안내</h3>
              <button className="close-btn" onClick={() => setShowVocationalGuide(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="info-popup-content">
                <div className="info-banner">🎓 구직자와 재직자를 위한 전문 기술 교육</div>
                <ul className="info-list">
                  <li><strong>지원내용:</strong> 국민내일배움카드를 통한 훈련비 최대 100% 지원</li>
                  <li><strong>훈련분야:</strong> IT, 디자인, 요리, 물류, 경영 등 전 산업 분야</li>
                  <li><strong>훈련장려금:</strong> 출석률 80% 이상 시 매월 최대 11만 6천원 추가 지급</li>
                  <li><strong>참여혜택:</strong> 취업 컨설팅, 이력서 첨삭, 우수 기업 매칭 지원</li>
                </ul>
                <div style={{ marginTop: '20px', padding: '16px', background: '#f8f9fa', borderRadius: '12px', fontSize: '13.5px', color: '#555' }}>
                  <p style={{ margin: '0 0 8px 0', fontWeight: '800', color: '#333' }}>💡 참여 방법</p>
                  1. 고용24 로그인<br/>
                  2. 국민내일배움카드 발급 신청<br/>
                  3. 원하는 훈련과정 검색 및 수강 신청
                </div>
              </div>
              <button className="modal-confirm-btn" style={{ marginTop: '20px' }} onClick={() => setShowVocationalGuide(false)}>
                확인 완료
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 맞춤 일자리 찾기 선택 팝업 */}
      {showJobSearchChoice && (
        <div className="modal-overlay" onClick={() => setShowJobSearchChoice(false)}>
          <div className="modal-content animate-fade-in-up" style={{ maxWidth: '400px' }} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">맞춤 일자리 찾기</h3>
              <button className="close-btn" onClick={() => setShowJobSearchChoice(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body" style={{ padding: '24px' }}>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px', textAlign: 'center' }}>
                원하시는 검색 방식을 선택해주세요.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button 
                  className="primary-btn vibe-btn" 
                  onClick={() => {
                    setShowJobSearchChoice(false)
                    setActiveFilter('region')
                    setFilterStep(1)
                  }}
                >
                  지역별 일자리 찾기
                </button>
                <button 
                  className="primary-btn vibe-btn" 
                  style={{ background: 'white', color: 'var(--primary-color)', border: '1px solid var(--primary-color)' }}
                  onClick={() => {
                    setShowJobSearchChoice(false)
                    setActiveFilter('job')
                    setFilterStep(1)
                  }}
                >
                  직종별 일자리 찾기
                </button>
                <button 
                  className="primary-btn vibe-btn" 
                  style={{ background: 'white', color: '#666', border: '1px solid #ddd' }}
                  onClick={() => setShowJobSearchChoice(false)}
                >
                  테마별 일자리 찾기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 지역별 / 직종별 선택 팝업 */}
      {activeFilter && (
        <div className="modal-overlay" onClick={() => setActiveFilter(null)}>
          <div className="modal-content animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                {activeFilter === 'region' ? '지역 선택' : '직종 선택'} 
                <span style={{ fontSize: '13px', marginLeft: '8px', opacity: 0.6 }}>
                  ({filterStep}/2 단계)
                </span>
              </h3>
              <button className="close-btn" onClick={() => setActiveFilter(null)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body" style={{ padding: '16px' }}>
              <div className="filter-selection-grid">
                {filterStep === 1 ? (
                  (activeFilter === 'region' ? regions : ncsCategories).map((item) => (
                    <button 
                      key={item} 
                      className="selection-item-btn"
                      onClick={() => {
                        setTempSelection(item)
                        setFilterStep(2)
                      }}
                    >
                      {item}
                    </button>
                  ))
                ) : (
                  (activeFilter === 'region' 
                    ? (regionMapping[tempSelection] || ["전체"]) 
                    : (ncsMapping[tempSelection] || ["전체", "세부직무 01", "세부직무 02"])
                  ).map((item) => (
                    <button 
                      key={item} 
                      className="selection-item-btn"
                      onClick={() => setActiveFilter(null)}
                    >
                      {item === '전체' ? `${tempSelection} 전체` : item}
                    </button>
                  ))
                )}
              </div>
              {filterStep === 2 && (
                <button 
                  className="modal-confirm-btn" 
                  style={{ marginTop: '20px', background: '#f0f0f0', color: '#555' }}
                  onClick={() => setFilterStep(1)}
                >
                  이전 단계로
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 로그인 팝업 */}
      {showLoginPopup && (
        <div className="modal-overlay" onClick={() => setShowLoginPopup(false)}>
          <div className="modal-content animate-fade-in-up" style={{ maxWidth: '400px' }} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">로그인</h3>
              <button className="close-btn" onClick={() => setShowLoginPopup(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setShowLoginPopup(false); }}>
                <div className="input-group">
                  <label>아이디</label>
                  <input type="text" className="vibe-input" style={{ paddingLeft: '16px' }} placeholder="아이디를 입력하세요" />
                </div>
                <div className="input-group" style={{ marginTop: '16px' }}>
                  <label>비밀번호</label>
                  <input type="password" className="vibe-input" style={{ paddingLeft: '16px' }} placeholder="비밀번호를 입력하세요" />
                </div>
                <button type="submit" className="primary-btn vibe-btn" style={{ marginTop: '24px' }}>
                  로그인
                </button>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px', fontSize: '13px', color: '#666' }}>
                  <span>아이디 찾기</span>
                  <span>비밀번호 찾기</span>
                  <span style={{ color: 'var(--primary-color)', fontWeight: '700' }}>회원가입</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* 교육·훈련 안내 팝업 */}
      {activeInfoPopup && (
        <div className="modal-overlay" onClick={() => setActiveInfoPopup(null)}>
          <div className="modal-content animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                {activeInfoPopup === 'card' ? '국민내일배움카드 안내' : 'K-디지털 트레이닝 안내'}
              </h3>
              <button className="close-btn" onClick={() => setActiveInfoPopup(null)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              {activeInfoPopup === 'card' ? (
                <div className="info-popup-content">
                  <div className="info-banner">💳 평생 능력개발을 위한 교육비 지원</div>
                  <ul className="info-list">
                    <li><strong>지원대상:</strong> 누구나 신청 가능 (공무원, 사립학교 교직원 등 제외)</li>
                    <li><strong>지원한도:</strong> 1인당 300~500만원까지 훈련비 지원</li>
                    <li><strong>유효기간:</strong> 계좌 발급일로부터 5년간 사용 가능</li>
                    <li><strong>사용방법:</strong> 고용24에서 훈련과정 검색 후 수강신청</li>
                  </ul>
                </div>
              ) : (
                <div className="info-popup-content">
                  <div className="info-banner">🚀 미래 IT 산업을 이끌 핵심인재 양성</div>
                  <ul className="info-list">
                    <li><strong>교육내용:</strong> AI, 빅데이터, 클라우드 등 첨단 기술 훈련</li>
                    <li><strong>교육비:</strong> 훈련비 전액 무료 (100% 정부 지원)</li>
                    <li><strong>훈련장려금:</strong> 성실 참여 시 매월 추가 수당 지급</li>
                    <li><strong>참여혜택:</strong> 실무 프로젝트 중심 교육 및 취업 매칭</li>
                  </ul>
                </div>
              )}
              <button className="modal-confirm-btn" style={{ marginTop: '20px' }} onClick={() => setActiveInfoPopup(null)}>
                내용 확인 완료
              </button>
            </div>
          </div>
        </div>
      )}
      {/* 채용공고 팝업 */}
      {showJobPostings && (
        <div className="modal-overlay" onClick={() => setShowJobPostings(false)}>
          <div className="modal-content animate-scale-in" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">실시간 채용공고</h2>
              <button className="close-btn" onClick={() => setShowJobPostings(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="postings-list">
                {[
                  { company: "(주)에이아이테크", title: "프론트엔드 개발자 채용 (React/Vite)", location: "서울 강남구", salary: "연봉 4,500 ~", date: "D-5" },
                  { company: "미래소프트", title: "데이터 분석가 신입/경력 모집", location: "경기 판교", salary: "연봉 4,000 ~", date: "D-12" },
                  { company: "글로벌네트웍스", title: "웹 퍼블리셔 및 UI 디자인 전문가", location: "서울 마포구", salary: "월 350 ~", date: "오늘마감" },
                  { company: "한국시스템", title: "자바 백엔드 엔지니어 정규직 채용", location: "대전 유성구", salary: "연봉 5,000 ~", date: "D-8" }
                ].map((job, idx) => (
                  <div key={idx} className="posting-item vibe-hover">
                    <div className="posting-info">
                      <span className="posting-company">{job.company}</span>
                      <h3 className="posting-title">{job.title}</h3>
                      <div className="posting-meta">
                        <span>{job.location}</span>
                        <span className="divider">|</span>
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    <span className="posting-date">{job.date}</span>
                  </div>
                ))}
              </div>
              <button className="primary-btn vibe-btn" style={{ marginTop: '20px' }} onClick={() => setShowJobPostings(false)}>전체 공고 보러가기</button>
            </div>
          </div>
        </div>
      )}

      {/* 교육·훈련 팝업 */}
      {showEduPostings && (
        <div className="modal-overlay" onClick={() => setShowEduPostings(false)}>
          <div className="modal-content animate-scale-in" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">국비지원 교육 안내</h2>
              <button className="close-btn" onClick={() => setShowEduPostings(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="postings-list">
                {[
                  { type: "내일배움카드", title: "자바스크립트 풀스택 개발자 양성과정", provider: "KH정보교육원", price: "전액 무료", date: "06.12 개강" },
                  { type: "K-디지털", title: "빅데이터 분석 및 AI 모델링 전문가 과정", provider: "멀티캠퍼스", price: "전액 무료", date: "06.20 개강" },
                  { type: "일반훈련", title: "전산세무회계 1급/2급 자격증 취득반", provider: "그린컴퓨터아카데미", price: "80% 지원", date: "05.30 개강" },
                  { type: "내일배움카드", title: "UI/UX 웹디자인 포트폴리오 완성반", provider: "SBS아카데미", price: "전액 무료", date: "06.05 개강" }
                ].map((edu, idx) => (
                  <div key={idx} className="posting-item vibe-hover">
                    <div className="posting-info">
                      <span className="posting-badge">{edu.type}</span>
                      <h3 className="posting-title">{edu.title}</h3>
                      <div className="posting-meta">
                        <span>{edu.provider}</span>
                        <span className="divider">|</span>
                        <span className="price-tag">{edu.price}</span>
                      </div>
                    </div>
                    <span className="posting-date">{edu.date}</span>
                  </div>
                ))}
              </div>
              <button className="primary-btn vibe-btn" style={{ marginTop: '20px' }} onClick={() => setShowEduPostings(false)}>전체 교육 보러가기</button>
            </div>
          </div>
        </div>
      )}
      {/* 회원가입 팝업 */}
      {showSignUpPopup && (
        <div className="modal-overlay" onClick={() => setShowSignUpPopup(false)}>
          <div className="modal-content animate-scale-in" onClick={e => e.stopPropagation()} style={{ maxWidth: '440px' }}>
            <div className="modal-header">
              <h2 className="modal-title">회원가입</h2>
              <button className="close-btn" onClick={() => setShowSignUpPopup(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-subtitle" style={{ marginBottom: '24px', color: '#666', fontSize: '14px' }}>
                고용24의 다양한 서비스를 위해<br/>회원 정보를 입력하고 본인 확인을 진행해주세요.
              </p>
              
              <div className="auth-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="input-group">
                  <label style={{ fontSize: '13px', fontWeight: '800', color: '#03366A', marginBottom: '6px', display: 'block' }}>아이디</label>
                  <div className="input-wrapper" style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#03366A', opacity: 0.5 }}>
                      <Search size={18} />
                    </div>
                    <input type="text" placeholder="아이디 입력 (6자 이상)" className="vibe-input" style={{ paddingLeft: '48px', width: '100%', height: '50px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }} />
                  </div>
                </div>

                <div className="input-group">
                  <label style={{ fontSize: '13px', fontWeight: '800', color: '#03366A', marginBottom: '6px', display: 'block' }}>비밀번호</label>
                  <div className="input-wrapper" style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#03366A', opacity: 0.5 }}>
                      <Lock size={18} />
                    </div>
                    <input type="password" placeholder="비밀번호 입력" className="vibe-input" style={{ paddingLeft: '48px', width: '100%', height: '50px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }} />
                  </div>
                </div>

                <div style={{ padding: '20px', background: 'rgba(3, 54, 106, 0.03)', borderRadius: '16px', marginTop: '10px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#333', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={18} color="#03366A" /> 본인 확인
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input type="text" placeholder="이름" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #eee' }} />
                    <input type="text" placeholder="생년월일 (예: 900101)" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #eee' }} />
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input type="tel" placeholder="휴대폰 번호" style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #eee' }} />
                      <button className="primary-btn" style={{ width: 'auto', padding: '0 16px', fontSize: '12px', height: '44px', background: '#03366A' }}>인증 요청</button>
                    </div>
                  </div>
                </div>

                <button className="primary-btn vibe-btn" style={{ marginTop: '10px', height: '54px' }} onClick={() => {
                  alert('회원가입이 완료되었습니다.');
                  setShowSignUpPopup(false);
                }}>가입 완료</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App

