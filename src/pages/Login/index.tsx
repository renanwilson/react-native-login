import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { SignInStyles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { phoneMask } from "../../utils/phoneNumberMask";
import MaskInput, { Masks } from "react-native-mask-input";

export function Login() {
  const styles = SignInStyles;
  const [hidePass, setHidePass] = useState(true);
  const [phoneNumber, setPhoneNumber] = React.useState("");

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Text style={styles.message}>Faça seu cadastro!</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View>
          <Text style={styles.title}>Email</Text>
          <TextInput
            placeholder="seunome@gmail.com"
            style={styles.input}
            autoCorrect={false}
            keyboardType="email-address"
          />
          <Text style={styles.title}>Senha</Text>
          <View style={styles.password}>
            <TextInput
              placeholder="* * * * *"
              autoCorrect={false}
              secureTextEntry={hidePass ? true : false}
              style={styles.passwordInput}
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHidePass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" size={25} />
              ) : (
                <Ionicons name="eye-off" size={25} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Celular</Text>
          <MaskInput
            style={styles.input}
            mask={Masks.BRL_PHONE}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
