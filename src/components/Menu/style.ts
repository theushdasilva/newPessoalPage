import styled from "styled-components";

export const Top = styled.nav`
  width: 100%;
  height: 250px;

  background-image: url(bkp.jpg);

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 100px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;

  display: flex;
  align-items: flex-end;
`;

export const ImgPerfil = styled.div`
  width: 150px;
  height: 150px;

  border-radius: 100%;
  box-shadow: 0 0 10px #000;

  margin-bottom: -50px;

  background-image: url(perfil.jpeg);
  background-size: cover;
`;

export const BoxData = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;

  // color: #ec5990;
  color: #fff;;
`;