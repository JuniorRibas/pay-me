/*
 * -----
 * File Created: Wednesday, 10th November 2021 10:46:11 am
 * Author: Junior Ribeiro
 * Copyright  2021  joseribeiroalves.dev@gmail.com , Junior Ribeiro
 * -----
 */

import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  Container,
  ContainerHeader,
  TextChaves,
  ContainerBtn,
  TextHeader,
  IconKey,
  ContainerBody,
  ContainerCard,
  ContainerIconCard,
  ContainerDescription,
  IconKeyCard,
  TextDescription,
  TextDescriptionSecondary,
} from "./styles";

const KeysPix: React.FC = () => {
  return (
    <Container>
      <ContainerHeader colors={["#603EB0", "#9867C5"]} end={{ x: 1, y: 1 }}>
        <ContainerBtn>
          <IconKey />
        </ContainerBtn>
        <TextHeader>Pay me : )</TextHeader>
        <ContainerBtn></ContainerBtn>
      </ContainerHeader>

      <ContainerBody>
        <TextChaves> Suas Chaves </TextChaves>
        <Card banco="Caixa" type="Celular" />
        <Card banco="NuBank" type="CPF" />
        <Card banco="Inter" type="E-mail" />
      </ContainerBody>
    </Container>
  );
};

const Card = ({ banco, type }) => {
  return (
    <TouchableOpacity
      onPress={() => alert(`Fazer QrCode para o banco ${banco}`)}
    >
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

export default KeysPix;
