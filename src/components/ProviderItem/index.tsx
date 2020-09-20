import React from 'react';

import {
  Article,
  TeacherItemContent,
  Footer,
  Header
} from './styles';

export interface ProviderData {
  name: string;
  service: string;
  cost: number;
}

interface ProviderItemProps {
  provider: ProviderData;
}

const ProviderItem: React.FC<ProviderItemProps> = ({ provider }) => {
  return (
    <Article>
      <TeacherItemContent>
        <Header>
          <div>
            <strong>{provider.name}</strong>
            <span>{provider.service}</span>
          </div>
        </Header>

        <Footer>
          <p>
            Preço/hora
            <strong>R$ {provider.cost}</strong>
          </p>
        </Footer>

      </TeacherItemContent>
    </Article>
  );
};

export default ProviderItem;
