import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

// interface RepositoryParams {
//   repository: string;
// }

const Repository: React.FC = () => {
  // const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Logo" />
        <Link to="/">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/10830068?s=400&u=8efbad27437b5aa7c436cb8cd3de95212f63ffdc&v=4"
            alt="Roi"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="/repositories/teste">
          <div>
            <strong>testes </strong>
            <p>tests</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
