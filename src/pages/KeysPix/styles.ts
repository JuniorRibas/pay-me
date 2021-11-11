import styled from "styled-components/native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View``;

export const TextChaves = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.primary};
  font-size: ${heightPercentageToDP(2)}px;

  margin-bottom: 10px;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${heightPercentageToDP(3)}px;
`;

export const ContainerBody = styled.View`
  height: ${heightPercentageToDP(85)}px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerCard = styled.View.attrs({
  shadowColor: "#CCC",
  shadowOffset: {
    width: -6,
    height: 8,
  },
  shadowOpacity: 1,
  shadowRadius: 0.7,
})`
  flex-direction: row;
  height: ${heightPercentageToDP(8)}px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
  elevation: 5;

  margin-bottom: 15px;
`;

export const ContainerIconCard = styled.View`
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  width: ${heightPercentageToDP(8)}px;
  justify-content: center;
  align-items: center;
`;

export const IconKeyCard = styled(MaterialCommunityIcons).attrs({
  name: "account-key-outline",
})`
  color: ${({ theme }) => theme.colors.black};

  font-size: ${heightPercentageToDP(3)}px;
`;

export const ContainerDescription = styled.View`
  margin: 10px;
`;

export const TextDescription = styled.Text`
  font-size: ${heightPercentageToDP(2)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const TextDescriptionSecondary = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
`;
