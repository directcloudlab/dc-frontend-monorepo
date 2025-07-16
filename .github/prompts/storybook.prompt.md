---
mode: agent
description: React 컴포넌트에 대한 Storybook 파일을 생성하는 방법에 대한 프롬프트입니다.
---

# React 컴포넌트 Storybook 파일 생성 가이드

이 프롬프트는 주어진 React 컴포넌트에 대해 포괄적이고 유용한 Storybook 스토리를 생성하는 방법을 안내합니다.

## 기본 구조

### 1. Meta 정보 설정

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName', // 카테고리/컴포넌트명
  component: ComponentName,
  parameters: {
    layout: 'centered', // 또는 'fullscreen', 'padded'
    docs: {
      description: {
        component: '컴포넌트에 대한 상세 설명을 작성합니다.',
      },
    },
  },
  argTypes: {
    // props에 대한 controls 설정
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;
```

### 2. 기본 스토리들

#### Default Story

```typescript
export const Default: Story = {
  args: {
    // 기본 props 값들
  },
};
```

#### 다양한 상태의 스토리들

- **Interactive**: 사용자 상호작용이 가능한 상태
- **Loading**: 로딩 상태
- **Error**: 에러 상태
- **Empty**: 빈 상태
- **Disabled**: 비활성화 상태

### 3. 변형(Variants) 스토리들

컴포넌트의 다양한 props 조합을 보여주는 스토리들을 생성합니다.

## 작성 지침

### 필수 사항

1. **컴포넌트 분석**: 먼저 컴포넌트의 props, 타입, 기능을 파악합니다.
2. **실제 사용 사례**: 실제 애플리케이션에서 사용될 법한 현실적인 데이터를 사용합니다.
3. **접근성**: 스크린 리더 등 접근성 도구로 테스트할 수 있도록 적절한 label과 aria 속성을 포함합니다.
4. **반응형**: 다양한 화면 크기에서 테스트할 수 있도록 viewport 설정을 고려합니다.

### 권장 사항

1. **Mock 데이터**: MSW(Mock Service Worker)를 사용하여 API 호출이 필요한 컴포넌트의 경우 적절한 mock을 설정합니다.
2. **Actions**: 이벤트 핸들러는 Storybook actions을 사용하여 로깅할 수 있도록 합니다.
3. **Controls**: 사용자가 Storybook UI에서 쉽게 props를 조작할 수 있도록 적절한 controls을 설정합니다.
4. **Documentation**: 각 스토리에 대한 설명을 추가하여 사용법을 명확히 합니다.

### 예시 스토리 패턴

#### Button 컴포넌트 예시

```typescript
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    onClick: fn(),
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Button with Icon',
    icon: <IconName />,
    onClick: fn(),
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Loading...',
    loading: true,
    onClick: fn(),
  },
};
```

#### Form 컴포넌트 예시

```typescript
export const EmptyForm: Story = {
  args: {
    onSubmit: fn(),
  },
};

export const FilledForm: Story = {
  args: {
    defaultValues: {
      name: 'John Doe',
      email: 'john@example.com',
    },
    onSubmit: fn(),
  },
};

export const WithValidationErrors: Story = {
  args: {
    errors: {
      name: 'Name is required',
      email: 'Invalid email format',
    },
    onSubmit: fn(),
  },
};
```

### argTypes 설정 예시

```typescript
argTypes: {
  variant: {
    control: 'select',
    options: ['primary', 'secondary', 'danger'],
    description: '버튼의 스타일 변형을 선택합니다.'
  },
  size: {
    control: 'radio',
    options: ['small', 'medium', 'large'],
  },
  disabled: {
    control: 'boolean',
  },
  children: {
    control: 'text',
    description: '버튼 내부에 표시될 텍스트입니다.'
  },
  onClick: {
    action: 'clicked',
  },
}
```

### 특수한 경우 처리

#### 1. Context Provider가 필요한 컴포넌트

```typescript
export const WithProvider: Story = {
  render: (args) => (
    <ThemeProvider theme={lightTheme}>
      <ComponentName {...args} />
    </ThemeProvider>
  ),
  args: {
    // props
  },
};
```

#### 2. Router가 필요한 컴포넌트

```typescript
import { MemoryRouter } from 'react-router-dom';

export const WithRouter: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    // props
  },
};
```

#### 3. API 호출이 필요한 컴포넌트

```typescript
export const WithMockData: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get('/api/data', (req, res, ctx) => {
          return res(ctx.json({ data: 'mock data' }));
        }),
      ],
    },
  },
  args: {
    // props
  },
};
```

## 파일 명명 규칙

- 선택한 파일과 같은 디렉토리에 위치
- `ComponentName.stories.tsx` 형식으로 명명
- 여러 변형이 있는 경우 `ComponentName.stories.ts` 또는 세부적으로 분리

## 최종 체크리스트

- [ ] 모든 주요 props 조합이 스토리로 표현되었는가?
- [ ] 에러 상태, 로딩 상태 등 다양한 상태가 포함되었는가?
- [ ] 접근성 테스트가 가능한가?
- [ ] 실제 사용 시나리오를 반영하는가?
- [ ] 문서화가 충분한가?
- [ ] Controls이 직관적으로 설정되었는가?
