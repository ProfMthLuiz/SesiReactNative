import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../styles/Style";

// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TxtInputComponent from "../components/TxtInputComponent";
import { TextInput } from "react-native-web";

export default function CalcImc() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");
  const [visible, setVisible] = useState(false);

  console.log("Resultado: ", resultado);

  const calc_imc = () => {
    const calcImc = peso / (altura * altura);
    setVisible(true);

    if (calcImc < 18.5) {
      setResultado("Abaixo do peso.");
    } else if (calcImc >= 18.5 && calcImc < 24.9) {
      setResultado("Peso normal.");
    } else if (calcImc >= 25 && calcImc < 29.9) {
      setResultado("Sobrepeso.");
    } else if (calcImc >= 30 && calcImc < 34.9) {
      setResultado("Obesidade grau I.");
    } else if (calcImc >= 35 && calcImc < 39.9) {
      setResultado("Obesidade grau II.");
    } else {
      setResultado("Obesidade grau III.");
    }
  };

  const calcularNovamente = () => {
    setAltura("");
    setPeso("");
    setVisible(false);

    console.log("Peso zerado: ", peso);
  };

  return (
    <View style={styles.container}>
      <Text>Calcular IMC</Text>
      <TxtInputComponent
        txtplace="Digite sua altura"
        value={altura}
        changeText={setAltura}
      />
      <TxtInputComponent
        txtplace="Digite seu peso"
        value={peso}
        changeText={setPeso}
      />
      <TouchableOpacity onPress={calc_imc}>
        <Text>Calcular IMC</Text>
      </TouchableOpacity>

      <Modal visible={visible}>
        <View>
          <Text>Modal</Text>
          <TouchableOpacity onPress={calcularNovamente}>
            <Text>Fechar</Text>
          </TouchableOpacity>
          <Text>{resultado}</Text>
        </View>
      </Modal>
    </View>
  );
}
