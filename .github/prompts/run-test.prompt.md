---
mode: agent
---

# 선택한 파일에 대한 테스트 실행

현재 선택한 파일 또는 열린 파일에 대한 테스트를 실행해주세요.

## 실행 규칙:

1. 선택한 파일이 테스트 파일(.spec.tsx, .test.tsx, .spec.ts, .test.ts)인 경우:

   - 해당 테스트 파일을 직접 실행
   - 예: `nx test <프로젝트명> -- --testPathPattern=<파일명>`

2. 선택한 파일이 일반 소스 파일인 경우:

   - 해당 파일과 연관된 테스트 파일을 찾아서 실행
   - 파일명 패턴을 기반으로 테스트 파일 매칭 (예: Button.tsx → Button.spec.tsx)

3. 테스트 실행 전에:

   - 현재 워크스페이스 구조를 파악
   - 해당 파일이 속한 프로젝트 확인
   - 적절한 Nx 프로젝트명과 테스트 경로 설정

4. 테스트 실행 후:
   - 테스트 결과 요약 제공
   - 실패한 테스트가 있다면 상세 분석 및 해결 방안 제시

예시 명령어:

```bash
nx test web -- --testPathPattern=GoodButton.spec.tsx
```

실행 가능한 프로젝트: web, mobile, web-e2e, mobile-e2e
