import React from "react";
import {Constainer, Box, ImgPerfil, Header, Body, Baseboard} from './style';

export const BoxProjets: React.FC = () =>{
  return(
    <Constainer>
      <Box>
        <Header>
          <ImgPerfil />
          <h2>Name Projeto</h2>
        </Header>
        <Body>
          <img src="perfil.jpeg" alt="Imagem Projeto" />
        </Body>
        <Baseboard>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ipsa officia iusto voluptas nulla aliquam iste! Et nisi sunt, at 
          beatae quaerat earum nam quas aut commodi possimus eaque natus labore.
        </Baseboard>
      </Box>
    </Constainer>
  );
}