import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
  baseURL: 'https://port-0-backrncs-manaeiwh8fe5b082.sel4.cloudtype.app/', // 또는 실제 서버 IP
});

// 요청 보내기 전 Authorization 헤더에 토큰 자동 추가
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
