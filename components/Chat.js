import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/chat-styles';


export default function Chat() {
  const navigation = useNavigation();
  const [respuesta, setRespuesta] = useState(null);

  const manejarSeleccion = (estado) => {
    setRespuesta(estado);
  };

  const respuestas = {
    Bien: {
      consejo: 'Sigue cultivando tu fe con humildad y gratitud.',
      verso: '“Confía en el Señor con todo tu corazón y no te apoyes en tu propio entendimiento.” - Proverbios 3:5',
      reflexion: 'La vida puede tener altibajos, pero una conexión fuerte con lo divino te ayuda a mantener la calma en medio de la tormenta.'
    },
    Regular: {
      consejo: 'Busca momentos de silencio para reconectar. Dios siempre está dispuesto a escucharte.',
      verso: '“Acérquense a Dios, y él se acercará a ustedes.” - Santiago 4:8',
      reflexion: 'A veces nos perdemos en la rutina o los problemas, pero basta una pausa sincera para reencontrarnos con lo esencial.'
    },
    Mal: {
      consejo: 'Dios no te juzga, te espera. Puedes comenzar de nuevo, hoy mismo.',
      verso: '“El Señor está cerca de los quebrantados de corazón.” - Salmo 34:18',
      reflexion: 'Los momentos difíciles son oportunidades para crecer. La fe no elimina los problemas, pero te da fuerza para enfrentarlos.'
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

            <View style={styles.messageBot}>
              <Text style={styles.messageText}>{respuestas[respuesta].consejo}</Text>
              <Text style={styles.messageText}>{respuestas[respuesta].verso}</Text>
              <Text style={styles.messageText}>{respuestas[respuesta].reflexion}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => setRespuesta(null)}>
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
