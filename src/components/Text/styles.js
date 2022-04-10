import styled from 'styled-components';

import { themes } from '../../UI/themes';

export const StyledText = styled.p`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};

  ${({ type }) =>
    type === "title" &&
    `
        font-weight: bold;
        font-size: ${({ size }) => size};
        color: ${themes.colors.title};
    `}

  ${({ type }) =>
    type === "text" &&
    `
        font-weight: normal;
        font-size: ${({ size }) => size};
        color: ${themes.colors.text};
    `}
`;