import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  titulo: {
    fontSize:26,
    fontWeight: "bold",
    color: '#107c0f',
    marginBottom: 5,
  },
  subtitulo: {
    color: '#b2b2b2',
    fontWeight: "bold",
    fontSize:20,
    marginBottom: 20,
  },
  paragrafo: {
    color: '#b2b2b2',
    width: 320,
    marginBottom: 10,
    textAlign: "center"
  },
  img: {
    width: 320,
    height: 180,
    borderRadius: 5
  }
});

export default estilos;