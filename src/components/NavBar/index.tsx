import React from 'react';

import dashboardIcon from '../../assets/icons/dashboard.svg';
import servicesIcon from '../../assets/icons/services.svg';
import integrationIcon from '../../assets/icons/integration.svg';
import settingsIcon from '../../assets/icons/settings.svg';

import {
  Container,
  Content,
  CompanyName,
  Options,
  Settings,
  SmallTitle
} from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <CompanyName>
          <strong>Nome da sua empresa</strong>
        </CompanyName>

        <Options>
          <p><img src={dashboardIcon} alt="dashboard icon" />Dashboard</p>
          <p><img src={servicesIcon} alt="services icon" />Serviços</p>
        </Options>

        <Settings>
          <SmallTitle>
            <small>Settings</small>
          </SmallTitle>
          <p><img src={settingsIcon} alt="integration icon" />Configurações</p>
          <p><img src={integrationIcon} alt="settings icon" />Integração</p>
        </Settings>
      </Content>
    </Container>
  );
};

export default NavBar;
