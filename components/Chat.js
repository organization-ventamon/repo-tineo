import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/chat-styles';

import OpenAI from 'openai';
import { apiKey } from '../config';

export default function Chat() {
  const navigation = useNavigation();
  const [respuesta, setRespuesta] = useState(null);
  const [consulta, setConsulta] = useState(null);

  const manejarSeleccion = async (estado) => {
    setRespuesta(estado);
    if (estado != null) {
      await consultarAPI();
    }
  };

  const consultarAPI = async () => {
    try {
      const client = new OpenAI({
        apiKey,
      });

      const data = await client.responses.create({
        model: "gpt-4o-mini",
        input: `Escribe un rezo católico de 55 palabras según:
          - Mi relación con Dios: ${respuesta}
          - Situación actual de Perú (crisis social, económica o espiritual)

          Debe ser esperanzador y espiritual. Incluye una cita bíblica al final.`,
        max_output_tokens: 60,
      });

      const texto = data.output_text;
      console.log("Consultando...");
      setConsulta(texto);
      console.log("Consultado exitosamente");
    } catch (error) {
      console.error('Error consultando OpenAI:', error);
      setConsulta('Error al consultar la API.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        <View style={styles.messageBot}>
          <Text style={styles.messageText}>¿Cómo estás con tu relación con Dios?</Text>
        </View>

        {!respuesta && (
          <View style={styles.optionsContainer}>
            {['Bien', 'Regular', 'Mal'].map((estado) => (
              <TouchableOpacity key={estado} style={styles.userOption} onPress={() => manejarSeleccion(estado)}>
                <Text style={styles.optionText}>{estado}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {respuesta && (
          <>
            <View style={styles.messageUser}>
              <Text style={styles.messageText}>{respuesta}</Text>
            </View>

            {consulta && (
              <View style={styles.messageBot}>
                <Text style={styles.messageText}>{consulta}</Text>
              </View>
            )}

            <TouchableOpacity style={styles.button} onPress={() => { setRespuesta(null); setConsulta(null); }}>
              <Text style={styles.buttonText}>Volver a preguntar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSecundario} onPress={() => navigation.navigate('Frase')}>
              <Text style={styles.buttonText}>Ir a Frase</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </View>
  );
}
