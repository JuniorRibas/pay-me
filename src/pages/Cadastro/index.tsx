import React, { useCallback, useEffect, useRef, useState } from "react";
import { Alert, Keyboard, StyleSheet, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import LottieView from "lottie-react-native";
import { useKeys } from "../../hooks/useKeys";

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
  const navigation = useNavigation();
  const { register, keys } = useKeys();
  const [typeKey, setTypeKey] = useState(``);
  const [banco, setBanco] = useState("");
  const [key, setkey] = useState("");

  const registerKey = useCallback(async () => {
    if (typeKey != "" && banco != "" && key != "") {
      const exist = keys.find((item) => item.key === key);

      if (exist) {
        Alert.alert("Essa chave ja existe!");
        return;
      }

      await register({ banco, key, type: typeKey, id: new Date().getTime() });
      setBanco("");
      setkey("");
      navigation.navigate("Chaves");
    } else {
      Alert.alert("Preecha corretamente os campos!!");
    }
  }, [banco, key, typeKey]);

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
        <TextInputKey
          placeholder="Banco"
          value={banco}
          onChangeText={setBanco}
        />

        <TextInputKey
          placeholder="Chave Pix"
          value={key}
          onChangeText={setkey}
        />

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
            onValueChange={(value) => setTypeKey(value)}
            items={[
              { label: "Cpf", value: "cpf" },
              { label: "E-mail", value: "email" },
              { label: "Numero", value: "numero" },
            ]}
          />
        </View>

        <BtnSend
          onPress={() => {
            registerKey();
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
