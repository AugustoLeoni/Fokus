import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const pomodoro = [
  {
    id: 'focus',
    image: require('./pomodoro.png'),
    inicialValue: 25,
    display: 'Foco'
  },
  {
    id: 'short',
    image: require('./short.png'),
    inicialValue: 5,
    display: 'Pausa curta'
  },
  {
    id: 'long',
    image: require('./long.png'),
    inicialValue: 15,
    display: 'Pausa longa'
  }
]

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={timerType.image}/>
      <View style={styles.action}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <Pressable 
              key={p.id}
              style={ timerType.id === p.id ? styles.contextButtonActive : null }
              onPress={() => setTimerType(p)}
            >
              <Text style={styles.contextButtonText}>
                {p.display}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.timer}>
          { new Date(timerType.inicialValue * 1000).toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' })}
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Alura. 
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  image: {
    width: 317.67,
  },
  action: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8,
    
  },
  contextButtonText: {
    padding: 8,
    fontSize: 12.5,
    color: '#FFF'
  },
  timer: {
    color: "#FFF",
    fontSize: 54,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8,
  },
  buttonText: {
    color: "#021123",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center"
  },
  footer: {
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
})
