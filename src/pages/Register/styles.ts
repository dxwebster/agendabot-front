import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

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


export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  form {
    margin: 0 0;
    width: 340px;
    text-align: left;

    > img {
      cursor: pointer;
    }

    > h1 {
      color: var(--color-secundary);
      font-size: 36px;
      margin-top: 48px;
    }

    > p {
      font-size: 16px;
      margin-bottom: 40px;
    }

  }
`;

export const Background = styled.div`
  flex: 1;
  background: var(--color-primary);
  background-size: cover;
`;
