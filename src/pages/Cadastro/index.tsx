import React, { useEffect, useRef, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import LottieView from "lottie-react-native";
import RNPickerSelect from "react-native-picker-select";

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
import { TouchableOpacity } from "react-native-gesture-handler";

const Cadastro: React.FC = () => {
  const [chave, setChave] = useState(``);

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

        <View
          style={{
            width: "50%",
            marginBottom: 20,
          }}
        >
          <RNPickerSelect
            placeholder={{
              label: "Tipo da chave",
              value: null,
              color: "black",
            }}
            style={pickerSelectStyles}
            onValueChange={(value) => setChave(value)}
            items={[
              { label: "Cpf", value: "cpf" },
              { label: "E-mail", value: "email" },
              { label: "Numero", value: "numero" },
            ]}
          />
        </View>

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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});

export default Cadastro;
