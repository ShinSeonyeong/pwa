import React, { useState } from 'react';
import axios from 'axios';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  FlatList,
  Modal,
  TextInput,
  Alert,
} from 'react-native';

// 타입선언해줌, number, string은 이미 기본타입이지만
// item은 타입을 별도로 선언해줘야 함.
type User = {
  _id: string;
  nickname: string;
  email: string;
  password: string;
  createdAt: string;
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

  // 등록용 상태값
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 수정용 상태값
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editNickname, setEditNickname] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPassword, setEditPassword] = useState('');

  const reqUsers = async () => {
    try {
      const res = await axios.get(
        'https://port-0-backrncs-manaeiwh8fe5b082.sel4.cloudtype.app/users',
      ); // cloudtype 주소
      setUsers(res.data);
    } catch (e) {
      console.log('Error fetching users:', e);
    }
  };

  const handleDelete = async (id: string) => {
    Alert.alert('삭제', '삭제하시겠습니까?', [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '삭제',
        style: 'destructive',
        onPress: async () => {
          try {
            const result = await axios.delete(
              `https://port-0-backrncs-manaeiwh8fe5b082.sel4.cloudtype.app/users/${id}`,
            );
            Alert.alert('삭제성공');
            console.log(result);
          } catch (e) {
            console.log(e);
          }
        },
      },
    ]);
  };

  const handleRegister = async () => {
    if (!nickname || !email || !password) {
      Alert.alert('모든 항목을 입력해 주세요.');
      return;
    }

    try {
      await axios.post(
        'https://port-0-backrncs-manaeiwh8fe5b082.sel4.cloudtype.app/users/register',
        { nickname, email, password },
      ); // cloudtype 주소
      Alert.alert('등록 성공');
      setModalVisible(false);
      setNickname('');
      setEmail('');
      setPassword('');
      reqUsers(); // 등록 후 목록 다시 불러오기
    } catch (e) {
      console.log('등록 오류:', e);
      Alert.alert('등록 실패');
    }
  };

  const handleUpdate = async () => {
    console.log('여기 오나');
    console.log(selectedUser?._id);
    console.log(editEmail);
    console.log(editNickname);
    console.log(editPassword);

    if (!editEmail || !editNickname || !editPassword) {
      Alert.alert('모든 항목을 입력해주세요.');
      return;
    }

    try {
      await axios.put(
        `https://port-0-backrncs-manaeiwh8fe5b082.sel4.cloudtype.app/users/${selectedUser?._id}`,
        {
          nickname: editNickname,
          password: editPassword,
          email: editEmail,
        },
      );
      Alert.alert('수정성공');
      setUpdateModalVisible(false);
      reqUsers();
    } catch (error) {
      Alert.alert('수정실패' + error);
    }
  };

  const editUser = (item: User) => {
    setUpdateModalVisible(true);
    setEditNickname(item.nickname);
    setEditEmail(item.email);
    setEditPassword(item.password);
    setSelectedUser(item);
  };

  // item이 class형태임. item안에 nickname, password,, 등 있음
  const renderItem = ({ item }: { item: User }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.label}>uuid: {item._id}</Text>
        <Text style={styles.label}>닉네임: {item.nickname}</Text>
        <Text style={styles.label}>이메일: {item.email}</Text>
        <Text style={styles.label}>비밀번호: {item.password}</Text>
        <Text style={styles.label}>가입일자: {item.createdAt}</Text>

        <View style={styles.rowButtons}>
          <TouchableOpacity
            onPress={e => {
              setUpdateModalVisible(true);
              editUser(item);
              // console.log(item);
            }}
            style={[styles.buttonSmall, { backgroundColor: '#a2c044' }]}
          >
            <Text style={styles.buttonText}>수정</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleDelete(item._id);
            }}
            style={[styles.buttonSmall, { backgroundColor: '#fba322' }]}
          >
            <Text style={styles.buttonText}>삭제</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkBackground]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <TouchableOpacity style={styles.button} onPress={reqUsers}>
        <Text style={styles.buttonText}>사용자 목록 가져오기</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#34a853' }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>+ 사용자 등록</Text>
      </TouchableOpacity>

      <FlatList
        data={users}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      {/* 등록하는 모달창 */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>사용자 등록</Text>
            <TextInput
              style={styles.input}
              placeholder="닉네임"
              value={nickname}
              onChangeText={setNickname}
            />
            <TextInput
              style={styles.input}
              placeholder="이메일"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="비밀번호"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: '#4e8cff', flex: 1, marginRight: 5 },
                ]}
                onPress={handleRegister}
              >
                <Text style={styles.buttonText}>등록</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: '#aaa', flex: 1, marginLeft: 5 },
                ]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* 수정하는 모달창 */}
      <Modal
        visible={updateModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>사용자 수정</Text>
            <TextInput
              style={styles.input}
              placeholder="닉네임"
              value={editNickname}
              onChangeText={setEditNickname}
            />
            <TextInput
              style={styles.input}
              placeholder="이메일"
              value={editEmail}
              onChangeText={setEditEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="비밀번호"
              value={editPassword}
              onChangeText={setEditPassword}
              secureTextEntry
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: '#4e8cff', flex: 1, marginRight: 5 },
                ]}
                onPress={handleUpdate}
              >
                <Text style={styles.buttonText}>수정</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: '#aaa', flex: 1, marginLeft: 5 },
                ]}
                onPress={() => setUpdateModalVisible(false)}
              >
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  darkBackground: {
    backgroundColor: '#222',
  },
  button: {
    backgroundColor: '#4e8cff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 12,
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  rowButtons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  buttonSmall: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
  },
});

export default App;
