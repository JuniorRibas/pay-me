import React from "react";
import { Keyboard } from "react-native";
import Header from "../../components/Header";

import {
  Container,
  ContainerForm,
  TextInputKey,
  BtnSend,
  TextBtnSend,
} from "./styles";

const Cadastro: React.FC = () => {
  return (
    <Container>
      <Header />

      <ContainerForm>
        <TextInputKey placeholder="Banco" />
        <TextInputKey placeholder="Chave Pix" />
        <BtnSend
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <TextBtnSend>Cadastrar</TextBtnSend>
        </BtnSend>
      </ContainerForm>
    </Container>
  );
};

export default Cadastro;
