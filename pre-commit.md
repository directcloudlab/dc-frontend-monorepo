# Pre-commit 설정 가이드

이 프로젝트는 Husky와 lint-staged를 사용하여 커밋 전 자동 코드 품질 검사를 수행합니다.

## 🚀 설치된 도구

- **Husky v9.1.7**: Git 훅 관리
- **lint-staged v16.1.2**: 스테이징된 파일에 대한 자동 검사

## 📋 설정 내용

### 1. Pre-commit 검사

커밋 시 자동으로 다음 검사가 실행됩니다:

#### TypeScript/JavaScript 파일 (`.ts`, `.tsx`, `.js`, `.jsx`)

```bash
eslint --fix --max-warnings=0
prettier --write
```

#### 기타 파일 (`.json`, `.css`, `.scss`, `.md`)

```bash
prettier --write
```

### 2. 커밋 메시지 검증

커밋 메시지는 다음 컨벤션을 따라야 합니다:

```
type(scope): description
```

#### 사용 가능한 타입

| 타입       | 설명                              | 예시                                     |
| ---------- | --------------------------------- | ---------------------------------------- |
| `feat`     | 새로운 기능                       | `feat(web): add new button component`    |
| `fix`      | 버그 수정                         | `fix(mobile): resolve navigation issue`  |
| `docs`     | 문서 변경                         | `docs: update README`                    |
| `style`    | 코드 포맷팅, 세미콜론 누락 등     | `style(web): format button component`    |
| `refactor` | 코드 리팩토링                     | `refactor(mobile): extract common hooks` |
| `test`     | 테스트 추가/수정                  | `test(web): add button component tests`  |
| `chore`    | 빌드 프로세스 또는 보조 도구 변경 | `chore: update dependencies`             |
| `perf`     | 성능 개선                         | `perf(web): optimize bundle size`        |
| `ci`       | CI 설정 변경                      | `ci: add GitHub Actions workflow`        |
| `build`    | 빌드 시스템 변경                  | `build: update webpack config`           |
| `revert`   | 이전 커밋 되돌리기                | `revert: rollback navigation changes`    |

## 💡 사용 예시

### ✅ 올바른 커밋 메시지

```bash
git commit -m "feat(web): add GoodButton component with styled-components"
git commit -m "fix(mobile): resolve expo navigation crash on Android"
git commit -m "docs: add pre-commit setup guide"
git commit -m "test(web): add unit tests for GoodButton component"
git commit -m "chore: add husky and lint-staged configuration"
```

### ❌ 잘못된 커밋 메시지

```bash
git commit -m "added button"           # 타입 누락
git commit -m "fix button"             # 형식 불일치
git commit -m "update: fix something"  # 잘못된 타입
```

## 🔧 작동 방식

1. **코드 변경**: 파일을 수정하고 `git add`로 스테이징
2. **커밋 시도**: `git commit` 명령 실행
3. **Pre-commit 검사**:
   - 스테이징된 파일에 대해 ESLint + Prettier 실행
   - 경고나 오류가 있으면 커밋 중단
   - 자동으로 수정 가능한 문제는 자동 수정
4. **커밋 메시지 검증**: 컨벤션에 맞지 않으면 커밋 거부
5. **커밋 완료**: 모든 검사 통과 시 커밋 성공

## 🛠️ 설정 파일

### package.json

```json
{
  "scripts": {
    "prepare": "husky"
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": ["eslint --fix --max-warnings=0", "prettier --write"],
    "*.{json,css,scss,md}": ["prettier --write"]
  }
}
```

### .husky/pre-commit

```bash
npx lint-staged
```

### .husky/commit-msg

커밋 메시지 형식을 검증하는 스크립트가 포함되어 있습니다.

## 🚨 문제 해결

### 1. ESLint 오류로 커밋 실패

```bash
# 수동으로 lint 실행하여 문제 확인
npx eslint apps/web/src --fix

# 또는 특정 파일만 검사
npx eslint apps/web/src/app/GoodButton.tsx --fix
```

### 2. Prettier 포맷팅 문제

```bash
# 수동으로 prettier 실행
npx prettier --write apps/web/src/app/GoodButton.tsx
```

### 3. 커밋 메시지 형식 오류

올바른 형식으로 다시 커밋해주세요:

```bash
git commit -m "feat(web): add new component"
```

### 4. 강제 커밋 (권장하지 않음)

```bash
# pre-commit 훅 건너뛰기 (비상시에만 사용)
git commit --no-verify -m "emergency fix"
```

## 📈 이점

- **일관된 코드 스타일**: 모든 커밋이 동일한 포맷팅 규칙을 따름
- **버그 방지**: 커밋 전 자동 린트 검사로 잠재적 문제 발견
- **협업 효율성**: 통일된 커밋 메시지 컨벤션으로 변경 이력 추적 용이
- **자동화**: 수동 검사 없이도 코드 품질 보장

## 🔄 업데이트 방법

설정을 변경하려면 다음 파일들을 수정하세요:

- `package.json`: lint-staged 규칙 변경
- `.husky/pre-commit`: pre-commit 훅 동작 변경
- `.husky/commit-msg`: 커밋 메시지 규칙 변경

변경 후 팀원들이 새로운 설정을 적용하려면:

```bash
npm install  # prepare 스크립트가 자동으로 husky를 설정
```
