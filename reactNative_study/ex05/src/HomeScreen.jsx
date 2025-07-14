import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from './AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stoken, setStoken] = useState(null);

  useEffect(()=>{
    const fetchToken = async() =>{
      const token = await AsyncStorage.getItem('token');
      setStoken(token);
    }
    fetchToken
  }, []);
  
  const login = async() => {
     try {
      const res = await axios.post('https://port-0-backrncs-manaeiwh8fe5b082.sel4.cloudtype.app/auth/login', { email, password });
      Alert.alert('로그인 성공');
      AsyncStorage.setItem('token', res.data.token);
      setStoken(res.data.token);
    } catch (err) {
      Alert.alert('로그인 실패', err.response?.data?.message || err.message);
    }
  }

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-6 text-center">로그인</Text>

      {
        stoken && (
        <View>
          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-md"
            onPress={()=>{
              AsyncStorage.removeItem('token');
              setStoken(null);
            }}
          >
            <Text className="text-white text-center font-semibold">로그아웃</Text>
          </TouchableOpacity>
        </View>
      )
      }

      {
        !stoken && (
          <View>
            <Text className="mb-1 text-sm">이메일</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="example@email.com"
              className="border border-gray-300 rounded-md p-3 mb-4"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text className="mb-1 text-sm">비밀번호</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="********"
              secureTextEntry
              className="border border-gray-300 rounded-md p-3 mb-4"
            />

            <TouchableOpacity
              className="bg-blue-500 py-3 rounded-md"
              onPress={login}
            >
              <Text className="text-white text-center font-semibold">로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="mt-4"
              onPress={() => navigation.navigate('Register')}
            >
              <Text className="text-blue-500 text-center">회원가입 화면으로 돌아가기</Text>
            </TouchableOpacity>
          </View>
        )
      }

      
    </View>
  );
};

export default HomeScreen;
