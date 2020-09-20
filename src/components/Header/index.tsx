import React from 'react';
import { Link } from 'react-router-dom';

import dashboardIcon from '../../assets/icons/dashboard.svg';
import servicesIcon from '../../assets/icons/services.svg';
import integrationIcon from '../../assets/icons/integration.svg';
import settingsIcon from '../../assets/icons/settings.svg';

import logoImg from '../../assets/logo.png';

import { Container, Content, Sair, Links, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} alt="Agendabot" />
        </Logo>

        <Links>
          <Link to="/">
            <img src={dashboardIcon} alt="dashboard icon" /> Dashboard
          </Link>

          <Link to="/providers">
            <img src={servicesIcon} alt="services icon" /> Serviços
          </Link>

          <Link to="/">
            <img src={settingsIcon} alt="integration icon" /> Configurações
          </Link>

          <Link to="/">
            <img src={integrationIcon} alt="settings icon" /> Integração
          </Link>
        </Links>

        <Sair>
          <Link to="/"> Sair > </Link>
        </Sair>
      </Content>
    </Container>
  );
};

export default Header;
