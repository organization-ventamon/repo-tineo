import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  chatContainer: { padding: 20 },
  messageBot: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'flex-start',
    maxWidth: '85%'
  },
  messageUser: {
    backgroundColor: '#c8e6c9',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'flex-end',
    maxWidth: '85%'
  },
  messageText: {
    fontSize: 16
  },
  messageTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16
  },
  optionsContainer: {
    marginTop: 10,
    gap: 10
  },
  userOption: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 10
  },
  optionText: {
    color: 'white',
    fontSize: 16
  },
  button: {
    backgroundColor: '#1976d2',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  buttonSecundario: {
    backgroundColor: '#9c27b0',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
});
