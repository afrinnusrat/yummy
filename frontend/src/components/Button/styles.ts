import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isLoading: number;
}

export const Container = styled.button<ContainerProps>`
  background: #f83f19;
  height: 40px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: ${props => props.theme.colors.insideButton};
  width: 100%;
  font-weight: 500;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.2, '#e85d04')};
  }

  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
`;
