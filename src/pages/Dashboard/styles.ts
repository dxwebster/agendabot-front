import styled from 'styled-components';

interface Props {
  isActive: boolean;
}

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

export const Title = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Main = styled.div`
  display: flex;
`;

export const Card = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
  margin-top: 46px;
  color: ${(props) => props.isActive ? 'var(--color-title-in-primary)' : 'var(--color-black)'};

  width: 156px;
  height: 140px;
  border-radius: 8px;
  border: 1px solid var(--color-gray);
  background: ${(props) => props.isActive ? 'var(--color-primary)' : 'var(--color-title-in-primary)'};

  > img {
    margin-bottom: 12px;
  }

  > p {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 2px;
  }
`;

export const CalendarContainer = styled.div`
  margin-top: 46px;

  > .calendar {
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    background: var(--color-title-in-primary);
  }

  > .calendar span {
    color: #000000;
  }

  > .calendar abbr {
    color: #000000;
    text-decoration: none;
  }

  > .calendar button {
    color: var(--color-text-complement);
  }
`;
