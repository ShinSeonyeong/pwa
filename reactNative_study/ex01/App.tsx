/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useState } from 'react';
import {
  Alert,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const messages = [
  '지친 당신, 오늘은 그냥 숨만 쉬어도 괜찮아요. 👍',
  '마음이 시키는 방향으로 가세요. 그게 정답이에요. ✨',
  '꽃은 피는 데 시간이 걸려요. 당신도 그래요. 😌',
  '쉬어도 괜찮아요. 멈춘 게 아니라 충전 중이니까요. 😎',
  '괜찮아질 거예요. 진심으로요. 💻',
  '당신이 얼마나 애쓰는지 알아요. 그거면 충분해요. 🚀',
  '세상이 아무리 시끄러워도, 내 마음만은 조용히 안아주세요. 🌈',
  '햇살이 오늘 당신 마음에도 닿기를 바랍니다. 👣',
  '지금 이 순간에도 당신은 잘 버티고 있어요. 대단해요. 🐢',
  '어떤 하루든 당신은 그 안에서 잘 살아낸 거예요. 🎵',
];

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [message, setMessage] = useState('버튼을 눌러 응원을 받아보세요!');

  const onPressButton = () => {
    const randomMsg = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomMsg]);
  };

  return (
    
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.title}>💬 당신을 위한 응원</Text>
      <Text style={styles.message}>{message}</Text>
      <Button title="응원 받기 💖" onPress={onPressButton}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f', // 어두운 배경으로 대비 강조
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#00f0ff', // 네온 블루
    textShadowColor: '#ff00ff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 30,
  },
  message: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#ff80f0', // 핑크 네온
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#ffccff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 30,
    lineHeight: 30,
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
  },
});


export default App;
