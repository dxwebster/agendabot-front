import styled from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  > h1 {
    margin-top: 26px;
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 342px;
  color: var(--color-text-base);
  & + & {
    margin-top: 67px;
  }

  > legend {
    font: 700 28px Archivo;
    color: var(--color-text-title);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
    > button {
      background: none;
      border: 0;
      color: var(--color-primary);
      font: 700 17px Archivo;
      cursor: pointer;
      transition: color 200ms;
      &:hover {
        color: var(--color-primary-darker);
      }
    }
  }

  > button {
    width: 197px;
    height: 56px;
    background: var(--color-secundary);
    color: var(--color-title-in-primary);
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    font: 700 18px Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 200ms;
    margin-top: 3.2rem;

    &:hover {
      background: var(--color-secundary-dark);
    }
  }
`;

export const Form = styled.form`

`;

export const ScheduleItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 1.6rem;
  margin-bottom: 26px;

  & + & {
    border-top: 1px solid var(--color-line-in-white);
  }
`;

export const ResetScheduleButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    background: none;
    border: 0;
    font-weight: 500;
    color: var(--color-primary);

    &:hover {
      color: var(--color-primary-darker);
    }
  }
`;
