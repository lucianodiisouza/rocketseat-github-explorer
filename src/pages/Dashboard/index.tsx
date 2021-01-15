import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10830068?s=460&u=8efbad27437b5aa7c436cb8cd3de95212f63ffdc&v=4"
            alt="Luciano"
          />
          <div>
            <strong>portfolio/teste</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10830068?s=460&u=8efbad27437b5aa7c436cb8cd3de95212f63ffdc&v=4"
            alt="Luciano"
          />
          <div>
            <strong>portfolio/teste</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10830068?s=460&u=8efbad27437b5aa7c436cb8cd3de95212f63ffdc&v=4"
            alt="Luciano"
          />
          <div>
            <strong>portfolio/teste</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10830068?s=460&u=8efbad27437b5aa7c436cb8cd3de95212f63ffdc&v=4"
            alt="Luciano"
          />
          <div>
            <strong>portfolio/teste</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
