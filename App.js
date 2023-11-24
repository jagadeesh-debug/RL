import React, { useState } from 'react';

import {
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
} from 'react-native';

const App = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  return (
    <View style={styles.Box}>
      <Text
        style={{
          color: 'black',
          fontSize: 40,
          marginBottom: 50,
        }}>
        Sign up
      </Text>
      <View style={styles.Tinp}>
        <TextInput
          value={Email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={styles.inp}
        />
      </View>
      <View style={styles.Tinp}>
        <TextInput
          value={Password}
          onChangeText={(text) => setPassword(text)}
          placeholder="password"
          style={styles.inp}
        />
      </View>
      <View style={styles.Tinp}>
        <TextInput
          value={Password}
          onChangeText={(text) => setPassword(text)}
          placeholder="confirm password"
          style={styles.inp}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.sign}>Already have account? Login</Text>
      </TouchableOpacity>
      <Button title="Sign Up" style={styles.btn}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  Box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  inp: {
    borderRadius: 30,
    height: 50,
  },
  Tinp: {
    width: '80%',
    backgroundColor: 'grey',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    borderStyle: '',
  },
  sign: {
    marginBottom: 20,
  },
});
export default App;
