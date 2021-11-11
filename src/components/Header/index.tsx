import React from "react";
import { View } from "react-native";

import {
  Container,
  ContainerHeader,
  ContainerBtn,
  TextHeader,
  IconKey,
} from "./styles";

const Header: React.FC = () => {
  return (
    <ContainerHeader colors={["#603EB0", "#9867C5"]} end={{ x: 1, y: 1 }}>
      <ContainerBtn>
        {/* <IconKey /> */}
      </ContainerBtn>
      <TextHeader>Pay me : )</TextHeader>
      <ContainerBtn></ContainerBtn>
    </ContainerHeader>
  );
};

export default Header;
