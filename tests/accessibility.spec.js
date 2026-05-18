import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('웹 접근성 자동화 테스트 (a11y)', () => {
  test('메인 페이지 웹 접근성 기준 준수 여부 검사', async ({ page }) => {
    // 설정된 baseURL(http://localhost:5173/employee24/)로 이동
    await page.goto('/');

    // 페이지 로딩 대기
    await page.waitForLoadState('networkidle');

    // AxeBuilder를 이용해 접근성 위반 사항 분석
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    // 위반 사항이 0개여야 테스트 통과 (만약 위반 사항이 발견되면 상세 정보와 함께 에러 출력)
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
