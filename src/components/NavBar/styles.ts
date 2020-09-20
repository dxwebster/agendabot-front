import styled from 'styled-components';

export const Container = styled.div`
  width: 256px;
  height: 100vh;
  background: var(--color-secundary);

`;

export const Content = styled.div`
  position: absolute;
  margin-left: 12px;

  > p {
    color: var(--color-line-in-white);
  }
`;

export const CompanyName = styled.div`
  margin-top: 104px;
  margin-bottom: 13px;
`;

export const Options = styled.div`

  border-top: 1px solid var(--color-line-in-white);
  > p {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 30px;

    > img {
      margin-right: 18px;
    }
  }
`;

export const Settings = styled.div`
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 30px;

  > p {
    display: flex;
    flex-direction: row;
    align-items: center;

    > img {
      margin-right: 18px;
    }
    margin-bottom: 30px;
  }
`;

export const SmallTitle = styled.div`
  margin-bottom: 18px;
`;
