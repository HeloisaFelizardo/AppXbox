import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#2c2e2d',
    padding: 15,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 10,
  },
  titulo: {
    fontSize:26,
    fontWeight: "bold",
    color: '#107c0f',
    marginBottom: 5,
  },
  descricao: {
    color: '#b2b2b2',
    textAlign: "center",
    width: 320,
    marginBottom: 25,
  },

  card: {
    width: 250,
    alignItems: "center",
    backgroundColor: '#107c0f',
    flexDirection: "row",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  
  cardImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 10,
    marginRight: 10,
  },
  cardTexto: {
    fontSize: 18,
    color: '#fff',
    textAlign: "left",
    width: 100,
  },
});

export default estilos;