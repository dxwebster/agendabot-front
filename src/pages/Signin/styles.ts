import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  form {
    margin: 52px 0 20px;
    width: 340px;
    text-align: left;

    h1 {
      color: var(--color-secundary);
      font-weight: 600;
      font-size: 36px;
      margin-bottom: 40px;
    }
  }
`;

export const BoxCheckerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-text-complement);

  > span {
    font-size: 14px;
  }
`;

export const GroupCheckerBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;

  > input[type='checkbox'] {
    margin-right: 16px;
  }

  > span {
    font-size: 14px;
  }
`;

export const GroupText = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  > a {
    color: var(--color-text-complement);
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: ${shade(0.2, '#9C98A6')};
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;

  display: flex;
  justify-content: center;
  text-align: center;

  > p,
  strong {
    font-size: 16px;
  }
`;

export const WrapperText = styled.div`
  > p {
    color: var(--color-text-complement);
    > img {
      margin-left: 6px;
    }
  }
`;

export const WrapperLink = styled.div`
  > a {
    text-decoration: none;
    color: var(--color-primary);

    &:hover {
      color: ${shade(0.2, '#E83F5C')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
