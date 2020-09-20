import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-input-background);
  border-radius: 8px;
  padding: 16px;
  width: 100%;

  border-left: 2px solid #E6E6F0;

  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  /* Quando a propriedade isErrored for true, adiciona o css */
/* Ou seja, quando o input com erro, deixa a borda vermelha */
${(props) =>
  props.isErrored &&
  css`
    border-color: var(--color-primary);
  `}

  /* Quando a propriedade isFocused for true, adicionar o css */
  /* Ou seja, quando o input tiver focado, deixa o texto e borda laranjas */
  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: var(--color-primary);
    `}

/* Quando a propriedade isFilled for true, adiciona o css */
/* Ou seja, quando o input estiver preenchido, mantém o texto laranja */
    ${(props) =>
      props.isFilled &&
      css`
        color: var(--color-primary);
      `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-text-base);

    &::placeholder {
      color: var(--color-text-complement);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: var(--color-primary-darker);
    color: #fff;

    &::before {
      border-color: var(--color-primary-darker) transparent;
    }
  }
`;
