import styled from "styled-components";

export const Constainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 900px;

  border: 1px solid #ffffff30;
  border-radius: 8px;

  padding: 20px;

  color: #fff;

  margin-bottom: 20px;

  img{
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 8px;
  }
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin-bottom: 20px;

  h2{
    margin-left: 20px;
  }
`;

export const ImgPerfil = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 100%;

  background-image: url(perfil.jpeg);
  background-size: cover;
`;

export const Body = styled.div`
  width: 100%;
  height: 450px;

  background: #ffffff10;
  border-radius: 8px;

  margin-bottom: 20px;
`;

export const Baseboard = styled.div`
  width: 100%;
`;