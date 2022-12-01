import styled from 'styled-components';

export const Wrapper = styled.article`
  position: relative;
  border-radius: var(--border-radius-5);
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 9px;
  align-items: center;
  pointer-events: none;
  z-index: 1;
  font-size: var(--font-size-12);
  color: var(--color-grey-80);
`;

export const Input = styled.input`
  border: 0;
  color: var(--color-grey-100);
  opacity: 0.75;
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  width: 100%;
  border: 1px solid var(--color-grey-50);
  border-radius: var(--border-radius-5);
  padding: 4px 4px 4px 24px;

  &:focus {
    outline: 1px solid transparent;
    outline-offset: 2px;
    border-color: var(--color-primary-50);
  }
`;