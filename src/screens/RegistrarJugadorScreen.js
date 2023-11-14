import { SafeAreaView, View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { buttonStyles } from '../Styles'

const RegistrarJugadorScreen = () => {
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  const handleYearChange = (value) => {
    setYear(value);
  };

  const handleSubmit = () => {
    // Validar el año de nacimiento aquí
    const currentYear = new Date().getFullYear();
    const minYear = 1961;

    if (year > currentYear || year < minYear) {
      setError("Ingrese un año de nacimiento válido para el jugador");
      return;
    }

    // Realizar el registro del jugador
  };

  const dismissError = () => {
    setError("");
  };

  return (
    <SafeAreaView style={buttonStyles.container}>
      <View style={buttonStyles.body}>
        {error !== "" && (
          <View style={buttonStyles.errorContainer}>
            <Text style={buttonStyles.errorText}>{error}</Text>
            <Pressable onPress={dismissError}>
              <Text style={buttonStyles.dismissText}>X</Text>
            </Pressable>
          </View>
        )}
        <View style={buttonStyles.contentInput}>
          <TextInput placeholder="Nombre del jugador" />
        </View>
        <View style={buttonStyles.contentInput}>
          <TextInput placeholder="Apellido del jugador" />
        </View>
        <View style={buttonStyles.contentInput}>
          <TextInput
            placeholder="Año de nacimiento del jugador"
            keyboardType="decimal-pad"
            onChangeText={handleYearChange}
            value={year}
          />
        </View>
        <View style={buttonStyles.contentInput}>
          <TextInput placeholder="Nacionalidad del jugador" />
        </View>
        <View style={buttonStyles.contentInput}>
          <TextInput placeholder="Posición del jugador" />
        </View>
        <View>
          <Pressable style={buttonStyles.button} onPress={handleSubmit}>
            <Text style={buttonStyles.textButton}>Registrar</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default RegistrarJugadorScreen