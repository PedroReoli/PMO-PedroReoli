import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    
  },
  eventDate: {
    fontSize: 16,
    color: '#FFF'
  },
  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    borderRadius: 5,
    marginRight: 4,
    marginBottom: 6
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    padding: 12,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  form: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 36,
    marginBottom: 22,
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center'
  }
})