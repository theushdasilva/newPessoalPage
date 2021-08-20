import React from 'react';
import { Top, Container, ImgPerfil, BoxData } from './style';

export const Menu: React.FC = () => {
  return(
    <Top>
      <Container>
        <ImgPerfil />
        <BoxData>
          <p>Nome: Matheus</p>
          <p>Status: Programador FullStack</p>
        </BoxData>
      </Container>
    </Top>
  );
}