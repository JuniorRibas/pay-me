import styled from "styled-components/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View``;

export const ContainerHeader = styled(LinearGradient)`
  height: ${heightPercentageToDP(15)}px;
  width: ${widthPercentageToDP(100)}px;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContainerBtn = styled.TouchableOpacity``;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${heightPercentageToDP(3)}px;
`;

export const IconKey = styled(FontAwesome).attrs({ name: "key" })`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${heightPercentageToDP(3)}px;
`;
