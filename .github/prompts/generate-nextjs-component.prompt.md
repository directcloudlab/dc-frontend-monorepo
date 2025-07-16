---
mode: agent
---

## Next.js 컴포넌트 자동 생성 프롬프트

이 프롬프트는 Next.js 프로젝트에서 표준화된 컴포넌트를 자동으로 생성합니다.

### 실행 단계

1. **컴포넌트 이름 수집**

   - 사용자에게 생성할 컴포넌트의 이름을 물어보세요.
   - 컴포넌트 이름은 PascalCase로 입력받아야 합니다 (예: MyButton, UserProfile, NavigationBar).
   - 유효하지 않은 이름이 입력되면 다시 입력하도록 안내하세요.

2. **컴포넌트 파일 생성**

   - 현재 디렉토리에 `{ComponentName}.tsx` 파일을 생성합니다.
   - Styled Components를 사용하여 기본 스타일을 적용합니다.
   - 아래 형식과 동일한 컴포넌트 초기 코드를 작성합니다.
   - 절대 아래 코드 이외의 불필요한 props는 추가하지 마세요.
   - 절대 아래 코드 이외의 불필요한 styled-component 는 추가하지 마세요.

```typescript
import React from 'react';
import styled from 'styled-components';

interface SampleComponentProps {
  // Props 추가
}

const SampleComponent: React.FC<SampleComponentProps> = ({}) => {
  return <Container>{/* TODO:  */}</Container>;
};

export default SampleComponent;

const Container = styled.div`
  display: flex;
`;
```

3. **ESLint 규칙 준수**

   - 모든 코드는 프로젝트의 ESLint 설정을 완벽하게 따라야 합니다.
   - 다음 규칙을 특히 주의하세요:
     - React import 명시적 포함
     - 인터페이스 정의 우선 사용
     - Props destructuring 패턴 사용
     - 적절한 타입 정의
     - 사용하지 않는 변수 제거

4. **Props 인터페이스 정의**

   - 컴포넌트의 props는 반드시 TypeScript interface로 정의해야 합니다.
   - 기본 props는 다음을 포함해야 합니다:
     - `children?: React.ReactNode` - 자식 요소 지원
     - `className?: string` - CSS 클래스 지원
     - 필요에 따라 추가 props 정의

5. **테스트 파일 생성**
   - 같은 디렉토리에 `{ComponentName}.spec.tsx` 파일을 생성합니다.

### 검증 사항

생성 완료 후 다음을 확인하세요:

- [ ] 컴포넌트 파일이 올바른 위치에 생성되었는가?
- [ ] ESLint 에러가 없는가?
- [ ] TypeScript 타입 에러가 없는가?
- [ ] 테스트 파일이 생성되었는가?

이 프롬프트를 실행하여 일관되고 품질 높은 Next.js 컴포넌트를 생성하세요.
