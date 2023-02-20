import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TextInput } from "react-native";
// import {InputStandard} from 'react-native-input-outline'

const App = () => {
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [breed, setBreed] = useState("");
  const [toy, setToy] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
      <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: "center"}}>
        <Finput
          inputType="false"
          secureTextEntry
          placeholder="Email"
          onChange={setEmail}
        />
        <Finput
          inputType="true"
          placeholder="Password"
          onChange={setPassword}
        />
        <Finput inputType="false" placeholder="Dog Name" onChange={setName} />
        <Finput
          inputType="false"
          placeholder="Date Of Birth"
          onChange={setDob}
        />
        <Finput inputType="false" placeholder="Breed" onChange={setBreed} />
        <Finput
          inputType="false"
          placeholder="Favorite Toy"
          onChange={setToy}
        />
      </ScrollView>
  );
};

const Finput = ({ placeholder, onChange, inputType }) => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={inputType}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "white",
    fontSize: 18,
    padding: 8,
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "75%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 150 / 2,
    margin: 10,
  },
  text: {
    alignItems: "center",
    color: "black",
    fontSize: 10,
  },
});

export default App;
