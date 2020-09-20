import styled from 'styled-components';

export const Container = styled.div`

`;

export const SearchProviders = styled.div`

`;

export const PageProvidersList = styled.div`
  width: 100%;
  max-width: 762px;
  margin: 0 auto;
`;

export const Form = styled.form`
  /* margin-top: 3.2rem; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /*Eu quero que ele repida o 1fr 2 vezes.*/
  column-gap: 16px;
  align-items: center;
  /* bottom: -28px; */

  > button {
    width: 100%;
    height: 50px;
    background: var(--color-secundary);
    color: var(--color-title-in-primary);
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    font: 700 17px Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 200ms;
    margin-top: 40px;

    &:hover {
      background: var(--color-secundary-dark);
    }
  }
`;

export const Main = styled.main`

`;

