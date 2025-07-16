import React from 'react';
import styled from 'styled-components';

interface GoodButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const GoodButton: React.FC<GoodButtonProps> = ({ children, className, ...props }) => {
  return <Container className={className} {...props}>{children || 'Good Button'}</Container>;
};

export default GoodButton;

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #333;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #e0e0e0;
    border-color: #999;
  }

  &:active:not(:disabled) {
    background-color: #d0d0d0;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #007acc;
    outline-offset: 2px;
  }
`;
