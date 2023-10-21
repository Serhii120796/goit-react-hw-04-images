import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  padding: ${p => p.theme.spasing(4)} ${p => p.theme.spasing(8)};
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.blue};
  transition: background-color ${p => p.theme.transition.standart};
  text-align: center;
  display: block;
  color: ${p => p.theme.colors.white};
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  min-width: 180px;
  margin: auto;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
