import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  name: {
    flex: 1,
    // color: '#363F5F',
    color: '#000',
    fontSize: 10,
    marginLeft: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    width: 56,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  middle: {
    backgroundColor: '#F0F2F5',
    flex: 1,
    marginRight: 2,
    height: 80,
  },
  form: {
    flexDirection: 'row',
    width: '100%',
  }
})

