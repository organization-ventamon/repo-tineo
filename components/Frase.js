import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/frase-style';

import OpenAI from 'openai';
import { apiKey } from '../config';


export default function Frase() {
  const [respuesta, setRespuesta] = useState('');
  const [contador, setContador] = useState(0);
  const navigation = useNavigation();

  const consultarAPI = async () => {
    try {
      const client = new OpenAI({
        apiKey,
      });

      const data = await client.responses.create({
        model: "gpt-4o-mini",
        input: 'Solo respondeme con una cita bíblica aleatoria con la referencia (libro, capítulo y versículo).',
        max_output_tokens: 50,
      });

      const texto = data.output_text;
      setRespuesta(texto);
      setContador((prevContador) => prevContador + 1);
    } catch (error) {
      console.error('Error consultando OpenAI:', error);
      setRespuesta('Error al consultar la API.');
    }
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.phrase}>{respuesta || 'Frase del día'}</Text>

      <Text style={styles.counter}>Contador: {contador}</Text>

      <TouchableOpacity style={styles.button} onPress={consultarAPI}>
        <Text style={styles.buttonText}>Recargar frase</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.buttonText}>Ir a Chat</Text>
      </TouchableOpacity>
    </View>
  );
}