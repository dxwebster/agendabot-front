import React from 'react';
import Calendar from 'react-calendar';

import Header from '../../components/Header';

import 'react-calendar/dist/Calendar.css';

import { Container, Content, CardContainer, Main, Card, CalendarContainer } from './styles';

import clientsIcon from '../../assets/icons/clients.svg'
import boardIcon from '../../assets/icons/board.svg'
import bellIcon from '../../assets/icons/bell.svg'
import headupIcon from '../../assets/icons/headup.svg'

export default function Dashboard() {
  return (
    <Container>
      <Header />

      <Content>
        <h1>Dashboard</h1>
        <Main>
          <CardContainer>
            <Card isActive={false}>
              <img src={clientsIcon} alt=""/>
              <p>128</p>
              <small>Clientes</small>
            </Card>

            <Card isActive>
              <img src={boardIcon} alt=""/>
              <p>32</p>
              <small>Missões cumpridas</small>
            </Card>

            <Card isActive={false}>
              <img src={bellIcon} alt=""/>
              <p>2</p>
              <small>Notificações</small>
            </Card>

            <Card isActive={false}>
              <img src={headupIcon} alt=""/>
              <p>2</p>
              <small>Relatório</small>
            </Card>
          </CardContainer>

          <CalendarContainer>
            <Calendar
              className="calendar"
              next2Label=""
              prev2Label=""

            />
          </CalendarContainer>
        </Main>
      </Content>
    </Container>
  );
}
