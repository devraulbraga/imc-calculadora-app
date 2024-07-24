import { Button } from "../components/button";
import { ButtonIcon } from "../components/buttonicon";
import { Container, Content, Icon, Form } from "./styles";
import { HightLight } from "../components/hightlight";
import { Input } from "../components/inputs";
import { useState } from "react";
import { Alert } from "react-native";
export function Home() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function calcularBMI() {
    const alturaFloat = parseFloat(altura.replace(",", "."));
    const pesoFloat = parseFloat(peso.replace(",", "."));

    if (
      isNaN(alturaFloat) ||
      isNaN(pesoFloat) ||
      alturaFloat <= 0 ||
      pesoFloat <= 0
    ) {
      Alert.alert("Atenção", "Valores inválidos para calcular IMC");
      return;
    }
    const imcValor = pesoFloat / (alturaFloat * alturaFloat);
    let tipoIMC = "";
    if (imcValor <= 17) {
      tipoIMC = "Muito abaixo do peso";
    } else if (imcValor >= 17 && imcValor <= 18.5) {
      tipoIMC = "Abaixo do peso";
    } else if (imcValor >= 18.5 && imcValor <= 24.99) {
      tipoIMC = "Peso normal";
    } else if (imcValor >= 25 && imcValor <= 29.99) {
      tipoIMC = "Acima do peso";
    } else if (imcValor >= 30 && imcValor <= 34.9) {
      tipoIMC = "Obesidade I";
    } else if (imcValor >= 35 && imcValor <= 39.9) {
      tipoIMC = "Obesidade II (severa)";
    } else {
      tipoIMC = "Obesidade III (mórbida)";
    }
    Alert.alert(
      "Resultado",
      `Seu IMC é ${imcValor.toFixed(2)}\nGrau: ${tipoIMC}`
    );
    setAltura("");
    setPeso("");
  }

  return (
    <Container>
      <Content>
        <Icon />
        <HightLight
          title="IMC Calculadora"
          subTitle="Calcule seu Indice de Massa Corporal"
        />
        <Form>
          <Input
            placeholder="Peso"
            placeholderTextColor={"#7C7C8A"}
            onChangeText={setPeso}
            value={peso}
          />
          <ButtonIcon icon="monitor-weight" />
        </Form>
        <Form>
          <Input
            placeholder="Altura"
            placeholderTextColor={"#7C7C8A"}
            onChangeText={setAltura}
            value={altura}
          />
          <ButtonIcon icon="height" />
        </Form>
        <Button title="Calcular" onPress={calcularBMI} />
      </Content>
    </Container>
  );
}
