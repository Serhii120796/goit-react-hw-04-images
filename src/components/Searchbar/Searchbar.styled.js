import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: ${p => p.theme.spasing(6)} ${p => p.theme.spasing(12)};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: none;
  opacity: 0.6;
  transition: opacity ${p => p.theme.transition.standart};
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  line-height: 1.5;
  border: none;
  outline: none;
  padding-left: ${p => p.theme.spasing(2)};
  padding-right: ${p => p.theme.spasing(2)};

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
