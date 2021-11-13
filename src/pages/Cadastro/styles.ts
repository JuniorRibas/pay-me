import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerForm = styled.View`
  height: ${heightPercentageToDP(55)}px;
  width: ${widthPercentageToDP(90)}px;
  margin-top: 10px;
  border-radius: 10px;
  elevation: 2;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const TextInputKey = styled.TextInput`
  height: ${heightPercentageToDP(7)}px;
  width: ${widthPercentageToDP(80)}px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary2};
  border-radius: 4px;

  padding: 0px 8px;
  margin: 8px 0px;
  font-size: 20px;
`;

export const BtnSend = styled.TouchableOpacity`
  height: ${heightPercentageToDP(7)}px;
  width: ${widthPercentageToDP(80)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary2};
  border-radius: 4px;
`;

export const TextBtnSend = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};

  font-size: 20px;
`;
