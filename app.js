import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [idade, setIdade] = useState('');
  const [faixaEtaria, setFaixaEtaria] = useState('');

  const verificarFaixaEtaria = () => {
    const idadeInt = parseInt(idade);
    if (idadeInt >= 0 && idadeInt <= 12) {
      setFaixaEtaria('Criança');
    } else if (idadeInt >= 13 && idadeInt <= 17) {
      setFaixaEtaria('Adolescente');
    } else if (idadeInt >= 18 && idadeInt <= 20) {
      setFaixaEtaria('Jovem');
    } else if (idadeInt >= 21 && idadeInt <= 60) {
      setFaixaEtaria('Adulto');
    } else if (idadeInt > 60) {
      setFaixaEtaria('Idoso');
    } else {
      setFaixaEtaria('Idade inválida');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Faixa Etária</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={(text) => setIdade(text)}
        value={idade}
        keyboardType="numeric"
      />
      <Button title="Verificar" onPress={verificarFaixaEtaria} />
      <Text style={styles.faixaEtaria}>{faixaEtaria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  faixaEtaria: {
    marginTop: 20,
    fontSize: 18,
  },
});
