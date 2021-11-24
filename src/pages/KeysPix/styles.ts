import styled from "styled-components/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MaskInput from "react-native-mask-input";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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

export const QrCodeContainer = styled.View`
  position: relative;
  height: 65%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FormContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const Input = styled(MaskInput)`
  height: ${heightPercentageToDP(7)}px;
  width: ${widthPercentageToDP(80)}px;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${heightPercentageToDP(3)}px;

  text-align: center;
  padding: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary2};
`;

export const BtnPix = styled.TouchableOpacity`
  height: ${heightPercentageToDP(7)}px;
  width: ${widthPercentageToDP(50)}px;

  margin-top: 20px;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary2};
`;

export const TextBtnPix = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${heightPercentageToDP(2)}px;
`;

export const BtnDeleteKey = styled.TouchableOpacity`
  position: absolute;
  top: 1px;
  right: 1px;
  padding: 5px;
  margin-right: 10px;
  height: ${RFValue(25)}px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const TextBtnDeleteKey = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
