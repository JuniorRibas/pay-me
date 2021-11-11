import React from "react";
import { Keyboard } from "react-native";
import Header from "../../components/Header";
import LottieView from "lottie-react-native";

import {
  Container,
  ContainerForm,
  TextInputKey,
  BtnSend,
  TextBtnSend,
} from "./styles";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const Cadastro: React.FC = () => {
  return (
    <Container>
      <Header />

      <ContainerForm>
        <LottieView
          style={{
            width: widthPercentageToDP(20),
            height: heightPercentageToDP(20),
          }}
          loop={true}
          autoPlay={true}
          source={require("./../../../assets/lottie/42476-register.json")}
        />
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
