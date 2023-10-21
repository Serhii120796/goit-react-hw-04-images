import styled from 'styled-components';

export const SmallImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform ${p => p.theme.transition.standart};

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Image = styled.img`
  height: 100%;
`;
