# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.js >> 웹 접근성 자동화 테스트 (a11y) >> 메인 페이지 웹 접근성 기준 준수 여부 검사
- Location: tests\accessibility.spec.js:5:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 301

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#3c638b",
+               "contrastRatio": 4.42,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#d0dae3",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.42 (foreground color: #d0dae3, background color: #3c638b, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"ai-badge\">AI HELP</div>",
+                 "target": Array [
+                   ".ai-badge",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.42 (foreground color: #d0dae3, background color: #3c638b, font size: 8.3pt (11px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"ai-badge\">AI HELP</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".ai-badge",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#6785a5",
+               "contrastRatio": 2.34,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#bfccd9",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.34 (foreground color: #bfccd9, background color: #6785a5, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"summary-action-btn\" aria-label=\"실시간 채용공고 팝업 열기\">확인하러 가기</button>",
+                 "target": Array [
+                   "button[aria-label=\"실시간 채용공고 팝업 열기\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.34 (foreground color: #bfccd9, background color: #6785a5, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"summary-action-btn\" aria-label=\"실시간 채용공고 팝업 열기\">확인하러 가기</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[aria-label=\"실시간 채용공고 팝업 열기\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#6785a5",
+               "contrastRatio": 2.34,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#bfccd9",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.34 (foreground color: #bfccd9, background color: #6785a5, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"summary-action-btn\" aria-label=\"국비지원 교육 안내 팝업 열기\">확인하러 가기</button>",
+                 "target": Array [
+                   "button[aria-label=\"국비지원 교육 안내 팝업 열기\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.34 (foreground color: #bfccd9, background color: #6785a5, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"summary-action-btn\" aria-label=\"국비지원 교육 안내 팝업 열기\">확인하러 가기</button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[aria-label=\"국비지원 교육 안내 팝업 열기\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5f7f9",
+               "contrastRatio": 2.04,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#aeafb0",
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.04 (foreground color: #aeafb0, background color: #f5f7f9, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"filter-btn\" aria-label=\"지역별 채용 정보 보기\">지역별<div class=\"arrow-icon\"></div></button>",
+                 "target": Array [
+                   "button[aria-label=\"지역별 채용 정보 보기\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.04 (foreground color: #aeafb0, background color: #f5f7f9, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"filter-btn\" aria-label=\"지역별 채용 정보 보기\">지역별<div class=\"arrow-icon\"></div></button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[aria-label=\"지역별 채용 정보 보기\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f5f7f9",
+               "contrastRatio": 2.04,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#aeafb0",
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.04 (foreground color: #aeafb0, background color: #f5f7f9, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"filter-btn\" aria-label=\"직종별 채용 정보 보기\">직종별<div class=\"arrow-icon\"></div></button>",
+                 "target": Array [
+                   "button[aria-label=\"직종별 채용 정보 보기\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.04 (foreground color: #aeafb0, background color: #f5f7f9, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"filter-btn\" aria-label=\"직종별 채용 정보 보기\">직종별<div class=\"arrow-icon\"></div></button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[aria-label=\"직종별 채용 정보 보기\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f2f4f6",
+               "contrastRatio": 1.23,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dbdddf",
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.23 (foreground color: #dbdddf, background color: #f2f4f6, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"filter-btn\" aria-label=\"내일배움카드 안내 보기\">내일배움카드<div class=\"arrow-icon\"></div></button>",
+                 "target": Array [
+                   "button[aria-label=\"내일배움카드 안내 보기\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.23 (foreground color: #dbdddf, background color: #f2f4f6, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"filter-btn\" aria-label=\"내일배움카드 안내 보기\">내일배움카드<div class=\"arrow-icon\"></div></button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[aria-label=\"내일배움카드 안내 보기\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f2f4f6",
+               "contrastRatio": 1.23,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#dbdddf",
+               "fontSize": "11.3pt (15px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.23 (foreground color: #dbdddf, background color: #f2f4f6, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<button class=\"filter-btn\" aria-label=\"K-디지털 훈련 안내 보기\">K-디지털 훈련<div class=\"arrow-icon\"></div></button>",
+                 "target": Array [
+                   "button[aria-label=\"K-디지털 훈련 안내 보기\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.23 (foreground color: #dbdddf, background color: #f2f4f6, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<button class=\"filter-btn\" aria-label=\"K-디지털 훈련 안내 보기\">K-디지털 훈련<div class=\"arrow-icon\"></div></button>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "button[aria-label=\"K-디지털 훈련 안내 보기\"]",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+   Object {
+     "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
+     "help": "Page should contain a level-one heading",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright",
+     "id": "page-has-heading-one",
+     "impact": "moderate",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "page-has-heading-one",
+             "impact": "moderate",
+             "message": "Page must have a level-one heading",
+             "relatedNodes": Array [],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Page must have a level-one heading",
+         "html": "<html lang=\"ko\">",
+         "impact": "moderate",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.semantics",
+       "best-practice",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - banner "고용24 메인 헤더" [ref=e4]:
        - generic [ref=e5] [cursor=pointer]:
          - img "고용24" [ref=e6]
          - generic [ref=e7]: 고용24
        - generic [ref=e8]:
          - button "로그인 팝업 열기" [ref=e9] [cursor=pointer]:
            - img [ref=e10]
            - generic [ref=e13]: 로그인
          - button "회원가입 팝업 열기" [ref=e14] [cursor=pointer]:
            - img [ref=e15]
            - generic [ref=e18]: 회원가입
          - button "전체 메뉴 열기" [ref=e19] [cursor=pointer]:
            - img [ref=e20]
            - generic [ref=e21]: 메뉴
      - main "고용24 주요 서비스 및 채용 탐색" [ref=e22]:
        - region "일자리 통합 검색" [ref=e23]:
          - img [ref=e24]
          - textbox "검색어 입력" [ref=e27]:
            - /placeholder: 어떤 일자리를 찾으시나요?
        - region "AI 챗봇 비서 및 추천 키워드" [ref=e28]:
          - generic [ref=e29]:
            - generic [ref=e30]:
              - generic [ref=e31]: AI HELP
              - heading "무엇을 도와드릴까요?" [level=2] [ref=e32]
            - generic [ref=e33]:
              - textbox "AI 챗봇 질문 입력" [ref=e34]:
                - /placeholder: 궁금한 내용을 입력해 보세요
              - img [ref=e35]
            - navigation "추천 키워드 바로가기" [ref=e38]:
              - button "실업급여 신청방법 정보 보기" [ref=e39] [cursor=pointer]: "#실업급여 신청방법"
              - button "실업급여 수급 자격 확인 정보 보기" [ref=e40] [cursor=pointer]: "#실업급여 수급 자격 확인"
              - button "맞춤 일자리 찾기 정보 보기" [ref=e41] [cursor=pointer]: "#맞춤 일자리 찾기"
              - button "직업훈련 안내 정보 보기" [ref=e42] [cursor=pointer]: "#직업훈련 안내"
        - navigation "주요 서비스 바로가기" [ref=e43]:
          - heading "주요 서비스" [level=2] [ref=e45]:
            - img [ref=e46]
            - text: 주요 서비스
          - generic [ref=e49]:
            - button "AI 자가진단 서비스로 이동" [ref=e50] [cursor=pointer]:
              - img [ref=e52]
              - generic [ref=e55]:
                - generic [ref=e56]: AI 자가진단
                - generic [ref=e57]: 실업급여 및 수급자격 1분 진단
            - button "맞춤 일자리 찾기 선택 창 열기" [ref=e58] [cursor=pointer]:
              - img [ref=e60]
              - generic [ref=e63]:
                - generic [ref=e64]: 일자리 찾기
                - generic [ref=e65]: 지역별·직종별 최적 맞춤 일자리
            - button "국비지원 직업훈련 안내 창 열기" [ref=e66] [cursor=pointer]:
              - img [ref=e68]
              - generic [ref=e71]:
                - generic [ref=e72]: 직업 훈련
                - generic [ref=e73]: 내일배움카드 및 K-디지털 안내
            - button "실업급여 신청방법 안내 창 열기" [ref=e74] [cursor=pointer]:
              - img [ref=e76]
              - generic [ref=e79]:
                - generic [ref=e80]: 실업급여 안내
                - generic [ref=e81]: 신청 절차 및 수급 요건 총정리
        - generic [ref=e82]:
          - region "실시간 서비스 현황 요약" [ref=e83]:
            - generic [ref=e84]:
              - generic [ref=e85]:
                - generic [ref=e86]: 채용공고 수
                - generic [ref=e87]: 130,828건
                - button "실시간 채용공고 팝업 열기" [ref=e89] [cursor=pointer]: 확인하러 가기
              - generic [ref=e90]:
                - generic [ref=e91]: 교육·훈련 수
                - generic [ref=e92]: 21,877건
                - button "국비지원 교육 안내 팝업 열기" [ref=e94] [cursor=pointer]: 확인하러 가기
          - region "채용 정보 탐색 필터" [ref=e95]:
            - heading "채용 정보" [level=2] [ref=e96]
            - group "채용 정보 필터링 옵션" [ref=e97]:
              - button "지역별 채용 정보 보기" [ref=e98] [cursor=pointer]: 지역별
              - button "직종별 채용 정보 보기" [ref=e100] [cursor=pointer]: 직종별
          - region "교육 및 훈련 탐색 필터" [ref=e102]:
            - heading "교육·훈련" [level=2] [ref=e103]
            - group "교육 및 훈련 필터링 옵션" [ref=e104]:
              - button "내일배움카드 안내 보기" [ref=e105] [cursor=pointer]: 내일배움카드
              - button "K-디지털 훈련 안내 보기" [ref=e107] [cursor=pointer]: K-디지털 훈련
    - contentinfo "고용24 하단 정보 및 약관" [ref=e109]:
      - generic [ref=e110]:
        - generic [ref=e111]:
          - img "고용24" [ref=e112]
          - generic [ref=e113]: 고용24
        - generic [ref=e114]:
          - paragraph [ref=e115]: (27740) 충청북도 음성군 맹동면 태정로 6 한국고용정보원
          - paragraph [ref=e116]:
            - text: 홈페이지 전산 이용 문의
            - strong [ref=e117]: 1577-7114
            - text: (유료, 한국고용정보원 고객상담센터, 평일 09시 ~ 18시)
          - paragraph [ref=e118]:
            - text: 고용·노동 분야 제도 문의 국번없이
            - strong [ref=e119]: "1350"
            - text: (유료, 고용노동부 고객상담센터, 평일 09시 ~ 18시)
        - generic [ref=e120]:
          - paragraph [ref=e121]:
            - text: 고용24는
            - strong [ref=e122]: 통신판매중개자
            - text: 이며, 통신판매의 당사자가 아닙니다.
          - paragraph [ref=e123]:
            - text: 상품(훈련), 상품(훈련)정보, 거래에 관한
            - strong [ref=e124]: 의무와 책임은 판매자(훈련기관)
            - text: 에게 있습니다.
      - generic [ref=e125]:
        - generic [ref=e126]:
          - link "이용약관" [ref=e127]:
            - /url: "#"
          - link "개인정보처리방침" [ref=e128]:
            - /url: "#"
          - link "이메일무단수집거부" [ref=e129]:
            - /url: "#"
          - link "저작권보호정책" [ref=e130]:
            - /url: "#"
          - link "오픈API 서비스" [ref=e131]:
            - /url: "#"
          - link "화상상담 관리자" [ref=e132]:
            - /url: "#"
          - link "사이트맵" [ref=e133]:
            - /url: "#"
          - link "챗봇" [ref=e134]:
            - /url: "#"
        - generic [ref=e135]: © Ministry of Employment and Labor, Korea Employment Information Service. All rights reserved.
      - generic [ref=e137]:
        - generic [ref=e138]: 고용노동부
        - generic [ref=e139]: 한국고용정보원
        - generic [ref=e140]: 이 누리집은 고용노동부와 고용노동부 산하기관 한국고용정보원의 누리집 입니다.
  - complementary "AI 챗봇 빠른 상담 도구" [ref=e141]:
    - button "AI 취업비서 자가진단 열기" [ref=e142] [cursor=pointer]:
      - img [ref=e143]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | test.describe('웹 접근성 자동화 테스트 (a11y)', () => {
  5  |   test('메인 페이지 웹 접근성 기준 준수 여부 검사', async ({ page }) => {
  6  |     // 설정된 baseURL(http://localhost:5173/employee24/)로 이동
  7  |     await page.goto('/');
  8  | 
  9  |     // 페이지 로딩 대기
  10 |     await page.waitForLoadState('networkidle');
  11 | 
  12 |     // AxeBuilder를 이용해 접근성 위반 사항 분석
  13 |     const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  14 | 
  15 |     // 위반 사항이 0개여야 테스트 통과 (만약 위반 사항이 발견되면 상세 정보와 함께 에러 출력)
> 16 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
  17 |   });
  18 | });
  19 | 
```