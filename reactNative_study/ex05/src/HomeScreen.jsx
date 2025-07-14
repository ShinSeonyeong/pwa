import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-6 text-center">로그인</Text>

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
        onPress={() => {
          alert('회원가입 완료!');
        }}
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
  );
};

export default HomeScreen;
