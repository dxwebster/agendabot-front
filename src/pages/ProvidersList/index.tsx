import React, { useState } from 'react';

import Header from '../../components/Header';
import InputServices from '../../components/InputSevices';
import Select from '../../components/Select';
import ProviderItem, { ProviderData } from '../../components/ProviderItem';

import './styles.css';

import {
  Container,
  Form,
  PageProvidersList,
  SearchProviders,
  Main,
} from './styles';

const ProvidersList: React.FC = () => {
  const [providers, setProviders] = useState([
    {
      name: 'alexandre',
      service: 'Médico',
      cost: 4.0,
    },
  ]);

  return (
    <Container>
      <Header />
      <h1>ProvidersList</h1>

      <PageProvidersList>
        <SearchProviders>
          <div id="page-teacher-form" className="container">
            <main>
              <Form>
                <fieldset>
                  <legend>Seus dados</legend>
                  <input name="name"></input>
                </fieldset>

                <Select
                  differentColor
                  isWhithoutMarginTop
                  name="service"
                  label="Serviço"
                  options={[
                    { value: 'medico', label: 'Médico' },
                    { value: 'advogado', label: 'Advogado' },
                  ]}
                />
                <Select
                  differentColor
                  isWhithoutMarginTop
                  name="week_day"
                  label="Dia da semana"
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />
                <InputServices
                  isTeacherList
                  type="time"
                  name="time"
                  label="Hora"
                />

                <button type="submit">Buscar</button>
              </Form>
            </main>
          </div>
        </SearchProviders>

        <Main>
          {providers.map((provider: ProviderData) => {
            return <ProviderItem provider={provider} />;
          })}
        </Main>
      </PageProvidersList>
    </Container>
  );
};

export default ProvidersList;
