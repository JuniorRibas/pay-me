import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import QRCode from "react-native-qrcode-svg";
import { PIX } from "../../services/getPix";

const Home: React.FC = () => {
  const [QrCodePix, setQrCodePix] = useState("");
  const getpix = useCallback(async () => {
    try {
      const pix = new PIX();

      const dados = await pix.execute({
        city: "IMPERATRIZ",
        key: "60743686357",
        name: "José Ribeiro Alves Junior",
        version: "01",
        value: 1.0,
      });

      console.log("Executou!");
      setQrCodePix(dados.payload());
    } catch (error) {
      console.log("Erro!");
      console.log(error);
    }
  }, []);

  //   useEffect(() => {
  //     getpix();
  //   }, [getpix]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Ola Junior</Text>
      {QrCodePix.length > 0 && <QRCode value={QrCodePix} size={200} />}
      <TouchableOpacity
        onPress={() => getpix()}
        style={{
          width: 200,
          height: 50,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Buscar Pix</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
