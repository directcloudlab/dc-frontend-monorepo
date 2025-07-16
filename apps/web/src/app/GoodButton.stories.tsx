import type { Meta, StoryObj } from '@storybook/react';
import GoodButton from './GoodButton';
import React from 'react';

const meta: Meta<typeof GoodButton> = {
  title: 'Components/GoodButton',
  component: GoodButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'GoodButton은 styled-components를 사용한 기본적인 버튼 컴포넌트입니다. HTML 버튼의 모든 속성을 지원하며, children prop을 통해 버튼 내용을 커스터마이징할 수 있습니다.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: '버튼 내부에 표시될 내용입니다. 텍스트나 React 요소를 전달할 수 있습니다.',
    },
    className: {
      control: 'text',
      description: '추가적인 CSS 클래스명을 적용할 수 있습니다.',
    },
    disabled: {
      control: 'boolean',
      description: '버튼을 비활성화할지 여부를 설정합니다.',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 시 실행될 함수입니다.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: 'Good Button',
  },
};

// 다양한 텍스트 컨텐츠
export const WithCustomText: Story = {
  args: {
    children: '커스텀 버튼 텍스트',
  },
  parameters: {
    docs: {
      description: {
        story: '사용자 정의 텍스트를 가진 버튼입니다.',
      },
    },
  },
};

// 긴 텍스트
export const WithLongText: Story = {
  args: {
    children: '이것은 매우 긴 텍스트를 가진 버튼입니다. 버튼이 긴 텍스트를 어떻게 처리하는지 확인할 수 있습니다.',
  },
  parameters: {
    docs: {
      description: {
        story: '긴 텍스트가 포함된 버튼의 레이아웃을 확인할 수 있습니다.',
      },
    },
  },
};

// 짧은 텍스트
export const WithShortText: Story = {
  args: {
    children: 'OK',
  },
  parameters: {
    docs: {
      description: {
        story: '짧은 텍스트를 가진 버튼입니다.',
      },
    },
  },
};

// 빈 children (기본값 사용)
export const EmptyChildren: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'children prop이 없을 때 기본값인 "Good Button"이 표시됩니다.',
      },
    },
  },
};

// React 요소를 children으로 사용
export const WithReactElement: Story = {
  args: {
    children: (
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>🚀</span>
        <span>아이콘과 텍스트</span>
      </span>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'React 요소를 children으로 전달하여 아이콘이나 복잡한 레이아웃을 포함할 수 있습니다.',
      },
    },
  },
};

// 여러 줄 컨텐츠
export const WithMultilineContent: Story = {
  args: {
    children: (
      <div style={{ textAlign: 'center' }}>
        <div>첫 번째 줄</div>
        <div style={{ fontSize: '0.8em', opacity: 0.7 }}>두 번째 줄</div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: '여러 줄의 컨텐츠를 포함하는 버튼입니다.',
      },
    },
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    children: '비활성화된 버튼',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: '버튼이 비활성화된 상태입니다. 클릭할 수 없고 시각적으로 구분됩니다.',
      },
    },
  },
};

// 커스텀 className 적용
export const WithCustomClassName: Story = {
  args: {
    children: 'Custom Styled Button',
    className: 'custom-button-class',
  },
  parameters: {
    docs: {
      description: {
        story: '외부에서 추가적인 CSS 클래스를 적용한 버튼입니다.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <style>
          {`
            .custom-button-class {
              background: linear-gradient(45deg, #4CAF50, #45a049);
              color: white;
              font-weight: bold;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            .custom-button-class:hover:not(:disabled) {
              box-shadow: 0 4px 8px rgba(0,0,0,0.3);
              transform: translateY(-1px);
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
};

// 접근성 테스트를 위한 스토리
export const WithAccessibility: Story = {
  args: {
    children: '접근성 버튼',
    'aria-label': '접근성을 고려한 버튼',
    title: '이 버튼은 접근성 속성이 추가되었습니다',
  },
  parameters: {
    docs: {
      description: {
        story: '접근성 속성이 추가된 버튼입니다. 스크린 리더 등에서 적절히 읽힐 수 있습니다.',
      },
    },
  },
};

// 다양한 상태들
export const AllStates: Story = {
  parameters: {
    docs: {
      description: {
        story: '버튼의 다양한 상태를 한 번에 확인할 수 있습니다.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <GoodButton>기본 상태</GoodButton>
        <GoodButton disabled>비활성화</GoodButton>
      </div>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <GoodButton>호버해보세요</GoodButton>
        <GoodButton style={{ background: '#007acc', color: 'white' }}>커스텀 스타일</GoodButton>
      </div>
    </div>
  ),
};

// 다중 버튼 레이아웃
export const MultipleButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: '여러 개의 버튼이 함께 배치된 레이아웃입니다.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <GoodButton>첫 번째</GoodButton>
      <GoodButton>두 번째</GoodButton>
      <GoodButton>세 번째</GoodButton>
    </div>
  ),
};

// 다양한 크기 버튼들
export const DifferentSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'CSS를 통해 다양한 크기로 조정된 버튼들입니다.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <GoodButton style={{ fontSize: '12px', padding: '4px 8px' }}>작은 버튼</GoodButton>
      <GoodButton>보통 버튼</GoodButton>
      <GoodButton style={{ fontSize: '18px', padding: '12px 24px' }}>큰 버튼</GoodButton>
    </div>
  ),
};

// 아이콘과 함께 사용
export const WithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: '다양한 아이콘과 함께 사용되는 버튼들입니다.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <GoodButton>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          ➕ 추가
        </span>
      </GoodButton>
      <GoodButton>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          ✏️ 편집
        </span>
      </GoodButton>
      <GoodButton>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          🗑️ 삭제
        </span>
      </GoodButton>
      <GoodButton>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          💾 저장
        </span>
      </GoodButton>
    </div>
  ),
};
