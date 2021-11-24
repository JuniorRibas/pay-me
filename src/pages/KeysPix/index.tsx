/*
 * -----
 * File Created: Wednesday, 10th November 2021 10:46:11 am
 * Author: Junior Ribeiro
 * Copyright  2021  joseribeiroalves.dev@gmail.com , Junior Ribeiro
 * -----
 */

import React, { useCallback, useMemo, useRef, useState } from "react";
import { SafeAreaView, Text, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import QRCode from "react-native-qrcode-svg";
import MaskInput, { createNumberMask, Masks } from "react-native-mask-input";
import BottomSheet, {
  BottomSheetView,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";

import Header from "../../components/Header";
import { useKeys } from "../../hooks/useKeys";
import { PIX } from "../../services/getPix";

import {
  Container,
  TextChaves,
  ContainerBody,
  ContainerCard,
  ContainerIconCard,
  ContainerDescription,
  IconKeyCard,
  TextDescription,
  TextDescriptionSecondary,
  QrCodeContainer,
  FormContainer,
  Input,
  BtnPix,
  TextBtnPix,
  BtnDeleteKey,
  TextBtnDeleteKey,
} from "./styles";

const dollarMask = createNumberMask({
  prefix: ["R", "$", " "],
  delimiter: ".",
  separator: ",",
  precision: 2,
});

const KeysPix: React.FC = () => {
  const { keys, removeById } = useKeys();
  const [QrCodePix, setQrCodePix] = useState("");

  const [value, setValue] = React.useState("");

  const [keySet, setKeySet] = useState({} as typeof keys[0]);
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    if (index === 0) {
      sheetRef.current?.snapToIndex(0);
      setQrCodePix("");
      setValue("");
      sheetRef.current.close();
    }
    console.log("handleSheetChange", index);
  }, []);

  const getpix = useCallback(async () => {
    try {
      var numero = +value / 100;
      if (keySet.key != "" && value != "") {
        const pix = new PIX();

        const dados = await pix.execute({
          city: "IMPERATRIZ",
          key: keySet.key,
          name: "José Ribeiro Alves Junior",
          version: "01",
          value: Number(numero),
        });

        console.log("Executou!");
        setQrCodePix(dados.payload());
      }
    } catch (error) {
      console.log("Erro!");
      console.log(error);
    }
  }, [value, keySet]);

  const removerKey = useCallback(async () => {
    console.log(`removendo`);
    if (keySet) {
      await removeById(keySet.id);
      handleSheetChange(0);
    }
  }, [keySet]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="position" enabled>
      <Container>
        <Header />

        <ContainerBody>
          <TextChaves> Suas Chaves </TextChaves>

          {keys.length > 0 &&
            keys.map((item) => (
              <Card
                key={item.id}
                banco={item.banco}
                type={item.type}
                onPress={() => {
                  setKeySet(item);
                  sheetRef.current?.snapToIndex(2);
                }}
              />
            ))}
        </ContainerBody>

        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
        >
          <BottomSheetView>
            <QrCodeContainer>
              <BtnDeleteKey onPress={() => removerKey()}>
                <TextBtnDeleteKey>Apagar chave</TextBtnDeleteKey>
              </BtnDeleteKey>
              {QrCodePix.length > 0 && <QRCode value={QrCodePix} size={200} />}
            </QrCodeContainer>
            <FormContainer>
              <Input
                keyboardType="decimal-pad"
                value={value}
                mask={Masks.BRL_CURRENCY}
                onChangeText={(masked, unmasked) => {
                  setValue(unmasked); // assuming you typed "123456":
                  console.log(masked); // "R$ 1.234,56"
                  console.log(unmasked); // "123456"
                }}
              />
              <BtnPix onPress={getpix}>
                <TextBtnPix>Gerar QrCode</TextBtnPix>
              </BtnPix>
            </FormContainer>
          </BottomSheetView>
        </BottomSheet>
      </Container>
    </KeyboardAvoidingView>
  );
};

interface CardProps {
  banco: string;
  type: string;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({ banco, type, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <ContainerCard>
        <ContainerIconCard>
          <IconKeyCard />
        </ContainerIconCard>
        <ContainerDescription>
          <TextDescription>{banco}</TextDescription>
          <TextDescriptionSecondary>{type}</TextDescriptionSecondary>
        </ContainerDescription>
      </ContainerCard>
    </TouchableOpacity>
  );
};

const Sheet: React.FC = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
    >
      <BottomSheetView>
        <Text>Awesome 🔥</Text>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default KeysPix;
