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
import Header from "../../components/Header";
import { useKeys } from "../../hooks/useKeys";

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
} from "./styles";

Header;

const KeysPix: React.FC = () => {
  const { keys } = useKeys();
  return (
    <Container>
      <Header />

      <ContainerBody>
        <TextChaves> Suas Chaves </TextChaves>

        {keys.length > 0 &&
          keys.map((item) => (
            <Card key={item.id} banco={item.banco} type={item.type} />
          ))}
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
