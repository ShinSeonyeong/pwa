import { Button } from '@react-navigation/elements';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { useState } from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const handlePress = () => {
    Alert.alert('수업에 오신 것을 환영합니다!');
  };

  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text style={styles.title}>안녕하세요</Text>
      </View>
      <View>
        <Text style={styles.title}>React Native 입니다.</Text>
      </View>
      <View>
        <Text style={styles.title}>오전 수업 진행 중입니다.</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonText}
        onPress={() => setValue(value + 1)}
      >
        <Text style={styles.button}>변경 {value}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonText} onPress={handlePress}>
        <Text style={styles.button}>눌러보세요.</Text>
      </TouchableOpacity>
      <Button
        onPress={() => {
          Alert.alert('눌렀음');
          navigation.navigate('Details');
        }}
      >
        디테일로 이동
      </Button>
    </View>
  );
}

function DetailScreen() {
  const navigation = useNavigation();
  const [result, setResult] = useState([]);
  const fetchPost = async () => {
    const number = Math.floor(Math.random() * 10 + 1);
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${number}`,
    );
    console.log(result);
    setResult(result.data);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detail Screen</Text>
      {result && (
        <Text style={{ padding: 20 }}>
          id={result.id} body={result.body} title={result.title}
        </Text>
      )}
      <Text>Detail Screen</Text>
      <TouchableOpacity style={styles.buttonText} onPress={fetchPost}>
        <Text style={styles.button}>데이터 가져오기(axios)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonText}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.button}>뒤로 돌아가기</Text>
      </TouchableOpacity>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Details: DetailScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
  },
  buttonText: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  button: {
    color: '#FFF',
    fontSize: 15,
  },
});

export default App;
