import React, { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import InputServices from '../../components/InputSevices';
import Select from '../../components/Select';

import { Container, Content, Main, Fieldset, ScheduleItem, ResetScheduleButton } from './styles';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

interface SignInFormData {
  name: string;
  email: string;
  whatsapp: string;
  cost: string;
}

export default function Services() {
  const [data, setData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    subject: '',
    cost: '',
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    console.log(name, value)

    setData({ ...data, [name]: value })
  }

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/dashboard');
      } catch (err) {
        // se o erro for gerado pelo Yupi, retorna o erro
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
        // senão, vai disparar um toast
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um  erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast, history]
  );

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function handleAddNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleResetSchedule(event: FormEvent) {
    event.preventDefault();

    setScheduleItems([
      { week_day: 0, from: '', to: '' }
    ])
  }

  return (
    <Container>
      <Header />

      <Content>
        <h1>Novo Prestador de Serviço</h1>

        <Main>
        <Form ref={formRef} onSubmit={handleSubmit}>
          {/*O fieldset vai ser cada bloco dos inputs*/}
          <Fieldset>
            <legend>Dados Pessoais</legend>

            <InputServices
              name="name"
              label="Nome"
              onChange={(e) => handleInputChange(e)}
            />

            <InputServices
              name="email"
              label="Email"
              onChange={(e) => handleInputChange(e)}
            />

            <InputServices
              name="whatsapp"
              label="Whatsapp"
              onChange={(e) => handleInputChange(e)}
            />

          </Fieldset>

          <Fieldset>
            <legend>Sobre a aulas</legend>

            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: 'medico', label: 'Médico' },
                { value: 'advogado', label: 'Advogado' },
              ]}
            />

            <InputServices
              name="cost"
              label="Custo da sua hora"
              onChange={(e) => handleInputChange(e)}
            />
          </Fieldset>

          <Fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={handleAddNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

              {scheduleItems.map((scheduleItem, index) => {
                return (
                  <ScheduleItem key={scheduleItem.week_day}>
                    <Select
                      name="week_day"
                      label="Dia da semana"
                      value={scheduleItem.week_day}
                      onChange={(e) =>
                        setScheduleItemValue(index, 'week_day', e.target.value
                      )}
                      options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-feira' },
                        { value: '2', label: 'Terça-feira' },
                        { value: '3', label: 'Quarta-feira' },
                        { value: '4', label: 'Quinta-feira' },
                        { value: '5', label: 'Sexta-feira' },
                        { value: '6', label: 'Sábado' }
                      ]}
                    />

                    <InputServices
                      name="from"
                      label="Das"
                      type="time"
                      value={scheduleItem.from}
                      onChange={(e) => setScheduleItemValue(index, 'from', e.target.value
                      )}
                    />

                    <InputServices
                      name="to"
                      label="Até"
                      type="time"
                      value={scheduleItem.to}
                      onChange={(e) => setScheduleItemValue(index, 'to', e.target.value
                      )}
                    />

                  </ScheduleItem>
                );
              })}

              <ResetScheduleButton>
                <button onClick={handleResetSchedule}>
                  Resetar horários
                </button>
              </ResetScheduleButton>

            <button type="submit">
              Salvar cadastro
            </button>
          </Fieldset>
          </Form>
        </Main>
      </Content>

    </Container>
  );
}
